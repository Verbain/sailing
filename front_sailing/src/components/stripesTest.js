import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51IucrnF5ZtIQrMXgiui58mFpgHqqXo6I4OyyQDAS3DXIo60oUMcaIpPlmvJXzklnisGydH9QHCH5iaaMaSSUlFTH00QrhV5Z1W");
const ProductDisplay = ({ handleClick }) => (
    <div class="div-shop">
        <div class="div-shop-container">
            <div class="div-shop-product">
            <span class="iconify-shop" data-icon="simple-icons:riotgames" data-inline="false"></span>
                <div className="div-shop-description">
                    <h3>1 SC</h3>
                    <h5>1€</h5>
                </div>
            </div>
            <button class="btn-4" type="button" id="checkout-button" role="link" onClick={handleClick}>
                Acheter
            </button>
        </div>
    </div>
);
const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);
export default function App() {
    const [message, setMessage] = useState("");
    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }
        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);
    const handleClick = async (event) => {
        const stripe = await stripePromise;
        const response = await fetch("/create-checkout-session", {
            method: "POST",
        });
        const session = await response.json();
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    };
    return message ? (
        <Message message={message} />
    ) : (
        <ProductDisplay handleClick={handleClick} />
    );
}
