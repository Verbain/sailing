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
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("gameName")} />
        <input {...register("team")} />
        <input {...register("mise")} />
        <button type="submit">Submit</button>
    </form>
    );
}

export default MatchForm;