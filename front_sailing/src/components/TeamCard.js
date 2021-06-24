import React, { useState, useEffect} from 'react';
import AddPlayer from './AddPlayer';
import axios from "axios";

function TeamCard(props) {
    const { team } = props;
    const [teamComp, setDataTC]= useState([]);
    
    useEffect(() => {
        axios.get(`/api/teamComposition/${team.id}`).then((res) => setDataTC(res.data))

    }, []);

    const onSubmitDelete = () => { 
        if(window.confirm(`Êtes-vous sûre de vouloir supprimer l'équipe ${team.team_name}`)){
            axios.get(`/api/removeTeam/${team.id}`);
            window.location = '/teams'
        }
    }

    return(
        
        <div class="team">
            <div class="teamcard">
                <div class="teamcard-info">
                    <p> {team.team_name} </p>
                    <button onClick={onSubmitDelete} type="submit">X</button>

                </div>
                <div class="teamcard-list">
                    <li>
                        <AddPlayer team={team} teamComp={teamComp} />
                    </li>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;