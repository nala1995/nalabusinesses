// PaypalLogic.jsx
/* import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import config from './config';

function PaypalLogic({ productId, productQuantity, price, currency }) {
  const [message, setMessage] = useState('');

  const initialOptions = {
    'client-id': config.PAYPAL_PUBLIC_KEY, // Utilizando el Client ID desde config.js
    'enable-funding': 'venmo',
    currency: currency,
    'data-page-type': 'product-details',
    components: 'buttons',
    'data-sdk-integration-source': 'developer-studio',
  };

  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: 'rect',
            layout: 'vertical',
            color: 'gold',
            label: 'paypal',
          }}
          onError={(err) => {
            if (err?.message === 'Error crítico') {
              // Redirigir solo en caso de error crítico
              window.location.assign('/pagina-de-error');
            } else {
              // Manejar el error de otra manera, como mostrar un mensaje de error al usuario
              setMessage(`Error: ${err?.message}`);
            }
          }}
          onApprove={async (data, actions) => {
            try {
              const response = await fetch(
                `/api/orders/${data.orderID}/capture`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              );

              const orderData = await response.json();
              const errorDetail = orderData?.details?.[0];

              if (errorDetail?.issue === 'INSTRUMENT_DECLINED') {
                return actions.restart();
              } else if (errorDetail) {
                throw new Error(
                  `${errorDetail.description} (${orderData.debug_id})`
                );
              } else {
                const transaction = orderData.purchase_units[0].payments.captures[0];
                setMessage(
                  `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`
                );
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
              }
            } catch (error) {
              console.error(error);
              setMessage(`Sorry, your transaction could not be processed...${error}`);
            }
          }}
        />
      </PayPalScriptProvider>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PaypalLogic;
 */

// PaypalLogic.jsx
import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import config from './config';

function PaypalLogic({ productId, productQuantity, price, currency }) {
  const [message, setMessage] = useState('');

  const initialOptions = {
    'client-id': config.PAYPAL_PUBLIC_KEY, // Utilizando el Client ID desde config.js
    'enable-funding': 'venmo',
    currency: currency,
    'data-page-type': 'product-details',
    components: 'buttons',
    'data-sdk-integration-source': 'developer-studio',
  };

  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: 'rect',
            layout: 'vertical',
            color: 'gold',
            label: 'paypal',
          }}
          onError={(err) => {
            if (err?.message === 'Error crítico') {
              // Redirigir solo en caso de error crítico
              window.location.assign('/pagina-de-error');
            } else {
              // Manejar el error de otra manera, como mostrar un mensaje de error al usuario
              setMessage(`Error: ${err?.message}`);
            }
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: price,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            // Capturar la orden en aprobación
            return actions.order.capture().then(function(details) {
              // Mostrar mensaje de éxito
              setMessage('Transacción completada con éxito: ' + details.payer.name.given_name);
              // Manejar la orden completada aquí
            });
          }}
        />
      </PayPalScriptProvider>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PaypalLogic;
