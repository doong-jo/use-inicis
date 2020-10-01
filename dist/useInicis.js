"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INICIS_OPTIONS_PLATFORM = void 0;
const react_1 = require("react");
function loadInicis(platform, formId) {
    function addScript(name, attrs, loadCallback) {
        const head = document.querySelector('head');
        const findScript = document.querySelector(`script[use-inicis-script-name=${name}]`);
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
    addScript('inicis', {
        language: 'javascript',
        type: 'text/javascript',
        charset: 'UTF-8',
        src: 'https://stgstdpay.inicis.com/stdjs/INIStdPay.js',
        async: true,
    }, () => {
        if (platform === 'desktop') {
            // eslint-disable-next-line dot-notation
            window['INIStdPay'].pay('SendPayForm_id');
        }
        else if (platform === 'mobile' && formId) {
            const formEl = document.querySelector(`#${formId}`);
            formEl && formEl.submit();
        }
    });
}
var INICIS_OPTIONS_PLATFORM;
(function (INICIS_OPTIONS_PLATFORM) {
    INICIS_OPTIONS_PLATFORM["MOBILE"] = "mobile";
    INICIS_OPTIONS_PLATFORM["DESKTOP"] = "desktop";
})(INICIS_OPTIONS_PLATFORM = exports.INICIS_OPTIONS_PLATFORM || (exports.INICIS_OPTIONS_PLATFORM = {}));
function useInicis({ platform, formId }, pgRequestParameters) {
    const [inicisFormData, setInicisFormData] = react_1.useState();
    react_1.useEffect(() => {
        if (inicisFormData) {
            return;
        }
        loadInicis(platform, formId);
        setInicisFormData(pgRequestParameters);
    }, [formId, inicisFormData, pgRequestParameters, platform]);
    return inicisFormData;
}
exports.default = useInicis;
