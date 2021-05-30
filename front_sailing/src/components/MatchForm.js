import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import mixpanel from 'mixpanel-browser';
mixpanel.init('MIXPANEL_TOKEN');



function MatchForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        axios.post('/api/newGame', data);
        window.location = "/"
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
                                    <option >{teams.id}</option>
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