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

    }

    const onSubmitSummonerName = (data) => {
        const playerSummonerName = { pseudo : nickname, summonerName : data.summonerName, email: email}
        axios.post('/api/newPlayer', playerSummonerName)
    }
    

    return(
        
        <div class="profile-container">
            <div class="div-profile-0">
                <div class="div-profile-1">
                    <img
                        src={picture}
                        alt="image"
                        class="profile-img"
                    />
                </div>
                <div class="div-profile-2">
                    <div class="div-profile-info">
                        <h2>Pseudo : {nickname}</h2>
                    </div>
                    <div class="div-profile-info">
                        <h2>Adresse e-mail : {email}</h2>
                    </div>
                    <div class="div-profile-info">
                        <form onSubmit={handleSubmit(onSubmitOpGg)}>
                            <label> opgg : </label>
                            <input {...register("opGg")} />
                            <button type="submit">Enregistrer</button>
                        </form>
                    </div>
                    <div class="div-profile-info">
                    <form onSubmit={handleSubmit(onSubmitSummonerName)}>
                        <label> summoner name : </label>
                        <input {...register("summonerName")} />
                        <button type="submit">Enregistrer</button>
                    </form>
                    </div>
                </div>
            </div>
        
        </div>
    );
    
}

export default Profile;
