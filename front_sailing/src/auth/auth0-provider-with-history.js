import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
    const history = useHistory();
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

    const DEFAULT_REDIRECT_CALLBACK = () =>
        window.history.replaceState({}, document.title, window.location.pathname);

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={DEFAULT_REDIRECT_CALLBACK}
        >
            {children}
        </Auth0Provider>
    );
};
export default Auth0ProviderWithHistory;