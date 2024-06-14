import React, { useState, useEffect } from 'react';
import Wompi from '../assets/imgs/Wompi.svg';
import '../assets/main.css';
import config from '../config';
import generateHash from '../Hashing';
import PaypalLogic from '../Paypalogic';
import logo from '../assets/imgs/Nala.png';
import binancemc from '../assets/imgs/binancemc.svg';
import StripeCheckoutButton from './StripeCheckoutButton';


const CardPopup = ({ title, description, imageUrl, price, currency, onClose, priceCOP, currencyCOP, id, stripeProductId }) => {

    const [signature, setSignature] = useState('');
    const publicKey = config.WOMPI_API_PUBLIC;
    const Integritysign = config.INTEGRITY_KEY;
    const reference = '37DNKF84S92N1S';

    useEffect(() => {
      if (title && description && imageUrl && price && currency && priceCOP && currencyCOP) {
          async function generateSignature() {
              try {
                  const generatedSignature = await generateHash(integrityKey, priceCOP, currencyCOP, reference);
                  console.log("Generated Signature: ", generatedSignature);
                  setSignature(generatedSignature);
              } catch (error) {
                  console.error('Error generating signature:', error);
              }
          }
          generateSignature();
      }
    }, [title, description, imageUrl, price, currency, priceCOP, currencyCOP]);

    if (!title || !description || !imageUrl || !price || !currency || !priceCOP || !currencyCOP) {
        return null;
    }

    return (
        <div className="popup-container">
            <div className="popup-content">
                <button className="close-button hover:bg-red-600" onClick={onClose}><svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button>
                <img src={logo} alt={title} className="popup-image max-h-14 max-w-14 ml-24 mb-20" />
                {/* <p>{description}</p> */}
                {/* <p>{currency} {price}</p> */}
                <button className='binance-btn' type="submit">
                        <a href="https://accounts.binance.com/en/login?loginChannel=header_pay_merchant&return_to=aHR0cHM6Ly9tZXJjaGFudC5iaW5hbmNlLmNvbS9lbg%3D%3D" target="_blank" rel="noreferrer">   
                            <img src={binancemc} alt="icon binance"/>
                        </a>
                </button>
                <StripeCheckoutButton stripeProductId={stripeProductId} />
                <form action="https://checkout.wompi.co/p/" method="GET">
                    <input type="hidden" name="public-key" value={publicKey} />
                    <input type="hidden" name="currency" value={currencyCOP} />
                    <input type="hidden" name="amount-in-cents" value={priceCOP} />
                    <input type="hidden" name="reference" value="37DNKF84S92N1S" />
                    <input type="hidden" name="signature:integrity" value={signature} />
                    <button className='wompi-btn' type="submit">
                      <img className='imgwompi' src={Wompi} alt="icon Wompi" />
                    </button>                 
                </form>
                <div className='paypal-button-container'>
                    <PaypalLogic
                        productId={id}
                        price={price}
                        productQuantity={1} 
                        currency={currency}
                    />
                </div>
            </div>
            <div className="popup-overlay" onClick={onClose}></div>
        </div>
    );
};

export default CardPopup; 
