import React, { useState, useEffect } from 'react';
import Wompi from '../assets/imgs/Wompi.svg';
import '../assets/main.css';
import config from '../config';
import generateHash from '../Hashing';
import PaypalLogic from '../Paypalogic';
import logo from '../assets/imgs/Nala.png';
import binancemc from '../assets/imgs/binancemc.svg';


const CardPopup = ({ title, description, imageUrl, price, currency, onClose, priceCOP, currencyCOP, id }) => {

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
                <button className='stripe-btn' type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="81.35" height="34" viewBox="0 0 512 214"><path fill="#635bff" d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658m-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716m-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28M241.493 36.551l35.698-7.68V0l-35.698 7.538zm0 10.809h35.698v124.444h-35.698zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524m-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022zM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106c29.582 0 49.92-14.648 49.92-40.106c-.142-42.382-54.329-34.845-54.329-50.774"/></svg>
                </button>
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
