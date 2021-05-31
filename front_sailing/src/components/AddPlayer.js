import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


function AddPlayer(props) {
    const { team } = props;
    const { teamComp } = props;
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => { 
        let isPresent = false;
        
        teamComp.map((tc) => 
               {
                if(data.pseudo==tc.id_player){
                    alert(`Impossible, le joueur est déjà dans l'équipe ${team.team_name}.`)
                    isPresent = true;

                }

            })
            
   
            if(!isPresent){
                const getResponse = await axios.get(`/api/playerByName/${data.pseudo}`)
                const playerData = getResponse.data
                const playerID = { playerID : playerData[0].id, teamID : team.id}
                console.log(getResponse);
                console.log('playerID', playerID);
                await axios.post('/api/addPlayerInTeam', playerID);
                alert(`Joueur ajouter à l'équipe ${team.team_name}. `)
                window.location = '/teams'
            
            }


    } 

    return (
        <div>
            <div class="addplayer-id">
            {teamComp.map((tc) =>(
                <p> {tc.pseudo}</p>
            ))}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("pseudo")} />
                <button type="submit">Ajouter</button>
            </form>
        </div>
        
    );
}

export default AddPlayer;
