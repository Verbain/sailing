import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


function AddPlayer(props) {
    const { team } = props;
    const { register, handleSubmit } = useForm();
    const playerData= '';
    
    const onSubmit = (data) => {
        axios.get(`/api/playerByName/${data.pseudo}`).then((res) => playerData=res.data)
        console.log(playerData);
        const playerID = { id_player : playerData.id, id_team : team.id}

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