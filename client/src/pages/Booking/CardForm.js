import React from "react";
import "./CardForm.css";

const CardForm = () => {

    return (
        <div className="my-card-form-container">
            <form className="my-card-form">
                <div className="my-form-group">
                    <label className="my-label" htmlFor="cardNumber">Card number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        className="input"
                        placeholder="1234 1234 1234 1234"
                    />
                    <div className="card-icons">
                        <img src="/assets/visa.webp" alt="Visa" />
                        <img src="/assets/mastercard.webp" alt="MasterCard" />
                    </div>
                </div>

                <div className="form-group half-width">
                    <label className="my-label" htmlFor="expirationDate">Expiration date</label>
                    <input
                        type="text"
                        className="input"
                        id="expirationDate"
                        name="expirationDate"
                        placeholder="MM / YY"
                    />
                </div>

                <div className="form-group half-width">
                    <label className="my-label mt-3" htmlFor="securityCode">Security code</label>
                    <input
                        type="text"
                        className="input"
                        id="securityCode"
                        name="securityCode"
                        placeholder="CVC"
                    />
                </div>
                <img src="/assets/secure_payment.avif" alt="Secure Payment" className="secure-payment" />                 
            </form>
        </div>
    );
};

export default CardForm;