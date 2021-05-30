import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


function TeamForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        axios.post('/api/newTeam', data);
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