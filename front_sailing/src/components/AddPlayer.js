import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


function AddPlayer(props) {
    const { team } = props;
    const { register, handleSubmit } = useForm();
    const [ playerData, setData ] = useState([]);


    const onSubmit = (data) => {
        axios.get(`/api/playerByName/${data.pseudo}`).then((res) => setData(res.data))
        console.log(playerData);
        const playerID = { id_player : playerData.id_player, id_team : team.id}
        console.log(playerID);
        axios.post('/api/addPlayerInTeam', playerID);
        console.log(playerData);

    } 

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("pseudo")} />
        <button type="submit">Submit</button>
    </form>
    );
}

export default AddPlayer;