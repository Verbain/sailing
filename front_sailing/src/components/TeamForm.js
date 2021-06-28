import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useAuth0 } from "@auth0/auth0-react";


function TeamForm() {
    const { user } = useAuth0();
    const { email } = user;
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        axios.post('/api/newTeam', data).then((res) => {
            axios.get(`/api/getPlayerByEmail/${email}`).then((resEmail) => {
                const payload = { playerID : resEmail.data.id, teamID : res.data.id}
                console.log('~ payload : ', payload)
                axios.post(`/api/addCaptain/`, payload)
            })
        });
       window.location = "/teams"
    } 

    return (        
        <div>
            <form class="form" onSubmit={handleSubmit(onSubmit)}>
                <div class="form-item">
                    <label > Nom de l'équipe : </label>
                    <input {...register("teamName")} />
                </div>
                <div class="form-item">
                    <label for="teams">Image d'équipe ( pas obligatoire ) : </label>
                    <input {...register("teamPicture")} />

                </div>
                <div class="form-item">
                    <button class="form-button" type="submit">Créer</button>
                </div>
            </form>
        </div>
     
    );
}

export default TeamForm;