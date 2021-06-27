import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import TeamNameCard from "./TeamNameCard";
import SelectTeam from './selectTeam';
import { useAuth0 } from "@auth0/auth0-react";


function MatchCardBis(props) {
    const { isAuthenticated } = useAuth0();

    const { matchbis } = props;
    const { dataTeam } = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`/api/teamName/${matchbis.id}`).then((res) => setData(res.data));
    }, []);

    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        const teamOpponent = { id : matchbis.id, opponent : data.teamID }
        if(!(matchbis.team_1===data.teamID) && isAuthenticated === true){
            axios.post('/api/updateOpponent', teamOpponent);
            window.location = "/"
        } else {
            alert("Erreur, vous devez être connecter pour rejoindre un match avec votre équipe, deplus une même équipe ne peux s'affronter.")
        }
    } 

    return (
        
        <div>
            <div class="div-game-info"> "{matchbis.game_name}" | Mise : {matchbis.mise} SC</div>
            <div class="div-match-0">
                {data.map((teamName) =>(
                    <TeamNameCard teamName={teamName} key={teamName.id}/>
                ))}

                <div class="div-match-3">
                <form onSubmit={handleSubmit(onSubmit)} class="matchbis-form">
                    <select id="teams" {...register("teamID")}>
                        {dataTeam.map((teams)=>(
                            <SelectTeam teams={teams} key={teams.id}/>
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
