import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


function AddPlayer(props) {
    const { team } = props;
    const { teamComp } = props;
    const { register, handleSubmit } = useForm();

    const onSubmitDelete = (data) => { 
        let remove=false;

            console.log('teamComp : ', teamComp)
            teamComp.forEach( teamCompID => {
                if(teamCompID.pseudo===data.pseudo && !remove){
                    axios.get(`/api/removePlayerInTeam/${teamCompID.id}`);
                    alert(`Joueur supprimer de l'équipe ${team.team_name}. `)
                    remove = true;
                    window.location = '/teams'
                }
            });
            
            if(!remove){
                    alert(`Impossible, le joueur n'est pas dans l'équipe ${team.team_name}.`)
            }
    }



    const onSubmit = async (data) => { 
        let isPresent = false;
        
        teamComp.map((tc) => 
               {
                if(data.pseudo===tc.pseudo){
                    alert(`Impossible, le joueur est déjà dans l'équipe ${team.team_name}.`)
                    isPresent = true;

                }

            })
            
   
            if(!isPresent){
                const getResponse = await axios.get(`/api/playerByName/${data.pseudo}`)
                const playerData = getResponse.data
                console.log('playerData :', playerData)
                const playerID = { playerID : playerData[0].id, teamID : team.id}
                await axios.post('/api/addPlayerInTeam', playerID);
                alert(`Joueur ajouté à l'équipe ${team.team_name}. `)
                window.location = '/teams'
            
            }


    } 

    return (
        <div>
            <div class="addplayer-id">
            {teamComp.map((tc) =>(
                <div>
                    {tc.pseudo}
                </div>
                
            ))}
            </div>
            <form >
                <input {...register("pseudo")} />
                <button onClick={handleSubmit(onSubmit)} type="submit">Ajouter</button>
                <button onClick={handleSubmit(onSubmitDelete)} type="submit">Supprimer</button>
            </form>
        </div>
        
    );
}

export default AddPlayer;
