import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

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