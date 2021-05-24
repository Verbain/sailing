import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav class="navbar">
                <div class="nav-item">
                    <Link to='/' class="nav-item-text"> SAILING </Link>
                    <Link to='/profil' class="nav-item-text"> PROFIL </Link>
                    <Link to='/createMatch' class="nav-item-text"> CRÉER UN MATCH </Link>
                    <Link to='/teams' class="nav-item-text"> MES ÉQUIPES </Link>
                    <div class="nav-item-wallet"> 100.00$ </div>

                </div>
        </nav>
       

    );
}

export default Nav;