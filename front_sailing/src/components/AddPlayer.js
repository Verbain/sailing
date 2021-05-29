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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("pseudo")} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddPlayer;