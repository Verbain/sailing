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
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("teamName")} />
        <input {...register("teamPicture")} />
        <button type="submit">Submit</button>
    </form>
    );
}

export default TeamForm;