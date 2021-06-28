import React, { useState, useEffect } from 'react';
import TeamCard from './TeamCard';
import add from '../assets/add.png';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";



function Team() {

    const { user } = useAuth0();
    const { email } = user;
    const[data, setData] = useState([]);
    
    useEffect(() => {

        axios.get(`/api/getPlayerByEmail/${email}`).then((res) => axios.get(`/api/allTeamOfPlayer/${(res.data.id)}`).then((res) => setData(res.data)));
        

    }, []);

    return(
        
        <div class="teams">
            <div class="div-team-0">
                <a class="div-team-1" href="/teams/createTeam">
                <span class="iconify-plus add-team-img add-team" data-icon="fluent:people-team-add-24-filled" data-inline="false"></span>                    <div className="div-team-description">
                        Créer une équipe
                    </div>
                </a>
            </div>
            
            {data.map((team)=>(
                <TeamCard team={team} key={team.id}/>
            ))}
        </div>
    );
}

export default Team;