import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import SelectTeam from "./selectTeam";
import mixpanel from 'mixpanel-browser';
import { useAuth0 } from "@auth0/auth0-react";

mixpanel.init('MIXPANEL_TOKEN');



function MatchForm(props) {
    const { user } = useAuth0();
    const { email } = user;

    const {dataTeam}=props
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        axios.get(`/api/getPlayerByEmail/${email}`).then((res) => {
            axios.post('/api/newGame', data).then((resNewGame) => {
                const payload = { id : res.data.id, amount : resNewGame.data.data.mise }
                axios.post(`/api/updateWalletDecremente`, payload).then(() => { window.location = "/"})
            })

        })
        mixpanel.track("Match created");

    } 

    return (      
        <div>
            <form class="form" onSubmit={handleSubmit(onSubmit)}>
                <div class="form-item">
                    <label > Nom de la partie : </label>
                    <input {...register("gameName")} />
                </div>
                <div class="form-item">
                    <label for="teams">Équipe : </label>
                            <select id="teams" {...register("team")}>
                                {dataTeam.map((teams)=>(
                                    <SelectTeam teams={teams} key={teams.id}/>
                                ))}
                            </select>
                </div>
                <div class="form-item">
                    <label > Mise : </label>
                    <input {...register("mise")} />
                </div>
                <div class="form-item">
                    <button class="form-button" type="submit">Créer</button>
                </div>
            </form>
        </div>
        
    );
}

export default MatchForm;