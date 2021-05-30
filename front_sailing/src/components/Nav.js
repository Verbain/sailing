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

    
    return(
        <nav class="nav-bar">
                <div class="nav-item">
                    <Link to='/' class="nav-item-text"> ACCUEIL </Link>
                    <Link to='/profile' class="nav-item-text"> PROFIL </Link>
                    <Link to='/createMatch' class="nav-item-text"> CRÉER UN MATCH </Link>
                    <Link to='/teams' class="nav-item-text"> MES ÉQUIPES </Link>
                    <Link to='/shop' class="nav-item-text"> BOUTIQUE</Link>
                    <div class="nav-item-wallet"> 
                        {data.map((wallet) =>(
                            <Wallet wallet={wallet} key={wallet}/>
                        ))} 
                    </div>
                    
                    <div class="nav-button">
                    {isAuthenticated ? <LogoutButton /> : <LoginButton />} 
                    </div>
                </div>

        </nav>
    );
}

export default Nav;