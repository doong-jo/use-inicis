# use-inicis
A INICIS hook for React

- Official manual: https://www.inicis.com/ini-manual

## INI Web Standard
```typescript
import React from 'react';
import { useInicis, INICIS_OPTIONS_PLATFORM } from 'use-inicis';

const INICIS_OPTIONS = {
  platform: INICIS_OPTIONS_PLATFORM.MOBILE,
  formId: 'SendPayForm_id',
};

function MyComponent() {
  const pgRequestParameters = { mid: '123', ... } // your requset parameters
  const inicisFormData = useInicis<{
    mid: string;
    price: string;
    oid: string;
    goodsname: string;
    currency: string;
    buyername: string;
    buyertel: string;
    timestamp: string;
    signature: string;
    returnUrl: string;
    closeUrl: string;
    mkey: string;
    gopaymethod: string;
  }>(INICIS_OPTIONS, pgRequestParameters);

  if (!inicisFormData) {
    return <div>Load Inicis...</div>;
  }

  return (
    <div>
      <form id="SendPayForm_id" name="SendPayForm_id" method="POST">
          <input type="hidden" name="mid" value={inicisFormData.mid} />
          <input type="hidden" name="price" value={inicisFormData.price} />
          <input type="hidden" name="version" value="1.0" />
          <input type="hidden" name="oid" value={inicisFormData.oid} />
          <input
            type="hidden"
            name="goodsname"
            value={inicisFormData.goodsname}
          />
          <input
            type="hidden"
            name="currency"
            value={inicisFormData.currency}
          />
          <input
            type="hidden"
            name="buyername"
            value={inicisFormData.buyername}
          />
          <input
            type="hidden"
            name="buyertel"
            value={inicisFormData.buyertel}
          />
          <input
            type="hidden"
            name="timestamp"
            value={parseInt(inicisFormData.timestamp, 10)}
          />
          <input
            type="hidden"
            name="signature"
            value={inicisFormData.signature}
          />
          <input
            type="hidden"
            name="returnUrl"
            value={inicisFormData.returnUrl}
          />
          <input type="hidden" name="mKey" value={inicisFormData.mkey} />
          <input
            type="hidden"
            name="closeUrl"
            value={inicisFormData.closeUrl}
          />
          <input
            type="hidden"
            name="gopaymethod"
            value={inicisFormData.gopaymethod}
          />
          <input type="hidden" name="payViewType" value="overlay" />
        </form>
    </div>
  );
}
```

## INIpay Mobile
```typescript
import React from 'react';
import { useInicis, INICIS_OPTIONS_PLATFORM } from 'use-inicis';

const INICIS_OPTIONS = {
  platform: INICIS_OPTIONS_PLATFORM.MOBILE,
  formId: 'SendPayForm_id',
};

function MyComponent() {
  const pgRequestParameters = { P_MID: '123', ... } // your requset parameters
  const inicisFormData = useInicis<{
    P_MID: string;
    P_GOODS: string;
    P_AMT: string;
    P_OID: string;
    P_EMAIL: string;
    P_UNAME: string;
    P_NEXT_URL: string;
    P_INI_PAYMENT: string;
    actionUrl: string;
  }>(INICIS_OPTIONS, pgRequestParameters);

  if (!inicisFormData) {
    return <div>Load Inicis...</div>;
  }

  return (
    <div>
      <form
        id="SendPayForm_id"
        name="SendPayForm_id"
        method="POST"
        acceptCharset="euc-kr"
        action={inicisFormData.Action_URL}
      >
        <input type="hidden" name="P_GOODS" value={inicisFormData.P_GOODS} />
        <input type="hidden" name="P_MID" value={inicisFormData.P_MID} />
        <input type="hidden" name="P_AMT" value={inicisFormData.P_AMT} />
        <input type="hidden" name="P_OID" value={inicisFormData.P_OID} />
        <input type="hidden" name="P_EMAIL" value={inicisFormData.P_EMAIL} />
        <input type="hidden" name="P_UNAME" value={inicisFormData.P_UNAME} />
        <input
          type="hidden"
          name="P_NEXT_URL"
          value={inicisFormData.P_NEXT_URL}
        />
        <input
          type="hidden"
          name="P_INI_PAYMENT"
          value={inicisFormData.P_INI_PAYMENT}
        />
      </form>
    </div>
  );
}
```

