import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


const LoginButton = () => {
    const {loginWithRedirect } = useAuth0();
    return(
        <Button
        onClick={() => loginWithRedirect()}
        id="qsLoginBtn"
        variant="primary"
        className="btn-margin"
        >
        <span class="iconify-login" data-icon="bx:bx-log-in" data-inline="false" ></span>        
        </Button>
    );
};

export default LoginButton;