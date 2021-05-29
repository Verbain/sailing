import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
require('dotenv').config();

const Auth0ProviderWithHistory = ({ children }) => {
    const domain = "dev-cip8s-8m.eu.auth0.com";
    const clientId = "0SfFPnBEQRCjPIKXPYvq6Tes6jODPYOj";
    const audience = "https://sailing.com/api";

    const DEFAULT_REDIRECT_CALLBACK = () =>
        window.history.replaceState({}, document.title, window.location.pathname);

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={DEFAULT_REDIRECT_CALLBACK}
            audience = {audience}
        >
            {children}
        </Auth0Provider>
    );
};
export default Auth0ProviderWithHistory;