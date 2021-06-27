import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout-button";
import LoginButton from "./Login-button";
import axios from 'axios';
import Wallet from './Wallet';

function Nav() {
    const { isAuthenticated, user } = useAuth0();
    const [ data, setData] = useState([]);




    useEffect(() =>{
        if (isAuthenticated === true) {
            const {nickname} = user;
            axios.get(`/api/playerByName/${nickname}`).then((res) => setData(res.data))
        }


    }, []);

    function openNav() {
        document.getElementById("menu").style.width = "66%";
        document.getElementById("burger").style.color = "white";
        document.getElementById("cross").style.display = "flex";

      }

      function closeNav() {
        document.getElementById("menu").style.width = "0";
        document.getElementById("burger").style.display = "flex";

      }
    
    return(
        <div>
            <div id="burger">
                <span id="burger" class="iconify-burger" data-icon="radix-icons:hamburger-menu" data-inline="false"  onClick={openNav}></span>
            </div>
        <nav id="menu" class="menu">
                <div class="nav-item">
                    <ul class="menu__list r-list">
                        <div id="cross">
                            <span id="cross" class="iconify-cross" data-icon="akar-icons:cross" data-inline="false" onClick={closeNav}></span>
                        </div>
                        <Link to='/' class="menu__link r-link text-underlined"> ACCUEIL </Link>
                        <Link to='/profile' class="menu__link r-link text-underlined"> PROFIL </Link>
                        <Link to='/createMatch' class="menu__link r-link text-underlined"> CRÉER UN MATCH </Link>
                        <Link to='/teams' class="menu__link r-link text-underlined"> MES ÉQUIPES </Link>
                        <Link to='/shop' class="menu__link r-link text-underlined"> BOUTIQUE</Link>
                        <div class="menu__link r-link">
                        <span class="iconify-wallet" data-icon="simple-icons:riotgames" data-inline="false"></span>                            {data.map((wallet) =>(
                                <Wallet wallet={wallet} key={wallet}/>
                            ))} 
                        </div>
                        <div class="menu__link">
                        {isAuthenticated ? <LogoutButton /> : <LoginButton />} 
                        </div>
                    </ul>
                    
                </div>

        </nav>
        </div>
    );
}

export default Nav;