import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


function MatchForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        axios.post('/api/newGame', data);
        window.location = "/"
    } 

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("gameName")} />
        <input {...register("team")} />
        <input {...register("mise")} />
        <button type="submit">Submit</button>
    </form>
    );
}

export default MatchForm;