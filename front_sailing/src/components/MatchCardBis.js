import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";


function MatchCardBis(props) {
    const { matchbis } = props;
    const { dataTeam } = props;
    let[data, setData] = useState([]);

    useEffect(() => {
        axios.get(`/api/teamName/${matchbis.id}`).then((res) => setData(res.data));
        console.log(data);
    }, []);

    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        const teamOpponent = { id : matchbis.id, opponent : data.teamID }
        if(!matchbis.team_1==data.teamID){
            axios.post('/api/updateOpponent', teamOpponent);
        } else {
            alert("Erreur, vous devez être connecter pour rejoindre un match avec votre équipe, deplus une même équipe ne peux s'affronter.")
        }
    } 

    return (
        
        <div>
            <div class="div-game-info"> "{matchbis.game_name}" | Mise : {matchbis.mise} SC</div>
            <div class="div-match-0">
                <div class="div-match-1">
                    {matchbis.team_1}
                </div>
                <div class="div-match-2">
                    VS
                </div>
                <div class="div-match-3">
                <form onSubmit={handleSubmit(onSubmit)} class="matchbis-form">
                    <label for="teams">Équipe : </label>
                    <select id="teams" {...register("teamID")}>
                        {dataTeam.map((teams)=>(
                            <option >{teams.id}</option>
                        ))}
                    </select>
                    <button type="submit" class="matchbis-button"> ↩ </button>
                </form>
                </div>
            </div>
        </div>
        
        
        
    );
}

export default MatchCardBis;
