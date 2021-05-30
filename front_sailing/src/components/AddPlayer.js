import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


function AddPlayer(props) {
    const { team } = props;
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => { 
        const playerID = { playerID : data.pseudo, teamID : team.id}
        axios.post('/api/addPlayerInTeam', playerID);

    } 

    return (
        <div>
            <div>
                
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("pseudo")} />
                <button type="submit">Ajouter</button>
            </form>
        </div>
        
    );
}

export default AddPlayer;