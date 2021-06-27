import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


const LogoutButton = () => {
    const {logout } = useAuth0();
    return(
        <Button
        onClick={() => logout()}
        id="qsLogoutBtn"
        variant="danger"
        className="btn-margin"
        
        >
        <span class="iconify-logout" data-icon="bx:bx-log-out" data-inline="false" ></span>        
        </Button>
    );
};

export default LogoutButton;