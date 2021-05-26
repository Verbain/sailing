import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout-button";
import LoginButton from "./Login-button";

function Nav() {
    const { isAuthenticated } = useAuth0();
    return(
        <nav class="navbar">
                <div class="nav-item">
                    <Link to='/' class="nav-item-text"> SAILING </Link>
                    <Link to='/profile' class="nav-item-text"> PROFIL </Link>
                    <Link to='/createMatch' class="nav-item-text"> CRÉER UN MATCH </Link>
                    <Link to='/teams' class="nav-item-text"> MES ÉQUIPES </Link>
                    <Link to='/stripe' class="nav-item-text"> checkout </Link>
                    <div class="nav-item-wallet"> 100.00$ </div>
                </div>

        </nav>
                    {isAuthenticated ? <LogoutButton /> : <LoginButton />} 

       

    );
}

export default Nav;