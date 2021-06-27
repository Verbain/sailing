import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { useForm } from "react-hook-form";


function Profile() {
    const { user } = useAuth0();
    const { nickname , picture, email } = user;
    const { register, handleSubmit } = useForm();

    const onSubmitOpGg = (data) => { 
        const playerOpGg = { opGg : data.opGg, pseudo : nickname }
        axios.post('/api/updateOpGg', playerOpGg);
        window.location = '/profile'

    }

    const onSubmitSummonerName = (data) => {
        const playerSummonerName = { pseudo : nickname, summonerName : data.summonerName, email: email}
        console.log('~ summonerName :', playerSummonerName.summonerName)
        console.log('~ playerSummonerName :', playerSummonerName)
        axios.post('/api/newPlayer', playerSummonerName)
        axios.get(`/api/summonername/${playerSummonerName.summonerName}`)
        window.location = '/profile'
    }   

    return(
        
        <div class="profile-container">
            <div class="div-profile-0">
                <div class="div-profile-1">
                    <img
                        src={picture}
                        alt="ceci est l'image de profil"
                        class="profile-img"
                    />
                </div>
                <div class="div-profile-2">
                    <div class="div-profile-info">
                        <label>PSEUDO : {nickname}</label>
                    </div>
                    <div class="div-profile-info">
                        <label>ADRESSE E-MAIL : {email}</label>
                    </div>
                    <div class="div-profile-info">
                        <form onSubmit={handleSubmit(onSubmitOpGg)}>
                            <label> OP.GG : </label>
                            <input {...register("opGg")} />
                            <button class="btn-2" type="submit"><span class="iconify-enter" data-icon="fluent:arrow-enter-left-20-regular" data-inline="false"></span></button>
                        </form>
                    </div>
                    <div class="div-profile-info">
                    <form onSubmit={handleSubmit(onSubmitSummonerName)}>
                        <label> NOM D'INVOCATEUR : </label>
                        <input {...register("summonerName")} />
                        <button class="btn-2" type="submit"><span class="iconify-enter" data-icon="fluent:arrow-enter-left-20-regular" data-inline="false"></span></button>
                    </form>
                    </div>
                </div>
            </div>
        
        </div>
    );
    
}

export default Profile;
