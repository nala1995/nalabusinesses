import React, { useState, useEffect } from 'react';
import Wompi from '../assets/imgs/Wompi.svg';
import '../assets/main.css';
import config from '../config';
import generateHash from '../Hashing';


const CardPopup = ({ title, description, imageUrl, price, currency, onClose, priceCOP, currencyCOP }) => {

    const [signature, setSignature] = useState('');
    const publicKey = config.WOMPI_API_PUBLIC;
   /*  const Integritysign = config.INTEGRITY_KEY; */
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
                <button className="close-button" onClick={onClose}>Close</button>
                {/* <img src={imageUrl} alt={title} className="popup-image" /> */}
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{currency} {price}</p>
                <form action="https://checkout.wompi.co/p/" method="GET">
                    <input type="hidden" name="public-key" value={publicKey} />
                    <input type="hidden" name="currency" value={currencyCOP} />
                    <input type="hidden" name="amount-in-cents" value={priceCOP} />
                    <input type="hidden" name="reference" value="37DNKF84S92N1S" />
                    <input type="hidden" name="signature:integrity" value={signature} />
                    <button className='wompi-btn' type="submit">
                      Pay with<img className='imgwompi' src={Wompi} alt="icon Wompi" />
                    </button>
                </form>
            </div>
            <div className="popup-overlay" onClick={onClose}></div>
        </div>
    );
};

export default CardPopup; 
