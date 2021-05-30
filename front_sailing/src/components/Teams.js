import React, { useState, useEffect } from 'react';
import TeamCard from './TeamCard';
import add from '../assets/add.png';
import axios from 'axios';


function CreateTeam() {
    const[data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('/api/teams').then((res) => setData(res.data));

    }, []);

    return(
        
        <div class="teams">
            <div class="div-team-0">
                <div class="div-team-1">
                    <a class="add-team" href="/teams/createTeam">
                        <img
                            src={add}
                            alt="+"
                            class="add-team-img"
                        />
                    </a>
                    <div className="div-team-description">
                        <h5>Créer une équipe</h5>
                    </div>
                </div>
            </div>
            
            {data.map((team)=>(
                <TeamCard team={team} key={team.id}/>
            ))}
        </div>
    );
}

export default CreateTeam;