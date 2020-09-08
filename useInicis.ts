import { useState, useEffect } from 'react';

function loadInicis(platform: 'mobile' | 'desktop', formId?: string) {
  function addScript(
    name: string,
    attrs: { [key: string]: any },
    loadCallback: () => void,
  ) {
    const head = document.querySelector('head');
    const findScript = document.querySelector(
      `script[mrt-script-name=${name}]`,
    );

    if (head && !findScript) {
      const script = document.createElement('script');
      script.setAttribute('use-inicis-script-name', name);
      Object.entries(attrs).forEach(([key, value]) => {
        script.setAttribute(key, value);
      });

      head.appendChild(script);

      if (attrs.async || attrs.defer) {
        script.addEventListener('load', loadCallback);
      }
    }
  }

  addScript(
    'mrt-inicis',
    {
      language: 'javascript',
      type: 'text/javascript',
      charset: 'UTF-8',
      src: 'https://stgstdpay.inicis.com/stdjs/INIStdPay.js',
      async: true,
    },
    () => {
      if (platform === 'desktop') {
        // eslint-disable-next-line dot-notation
        window['INIStdPay'].pay('SendPayForm_id');
      } else if (platform === 'mobile' && formId) {
        const formEl = document.querySelector<HTMLFormElement>(`#${formId}`);
        formEl && formEl.submit();
      }
    },
  );
}

export enum INICIS_OPTIONS_PLATFORM {
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
}

interface InicisOptionsType {
  platform: INICIS_OPTIONS_PLATFORM;
  formId?: string;
}

export default function useInicis<T>(
  { platform, formId }: InicisOptionsType,
  pgRequestParameters: any,
) {
  const [inicisFormData, setInicisFormData] = useState<T>();

  useEffect(() => {
    if (inicisFormData) {
      return;
    }

    loadInicis(platform, formId);
    setInicisFormData(pgRequestParameters);
  }, [formId, inicisFormData, pgRequestParameters, platform]);

  return inicisFormData;
}
