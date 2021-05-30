import React, { useState, useEffect} from 'react';
import AddPlayer from './AddPlayer';
import axios from "axios";

function TeamCard(props) {
    const { team } = props;
    const [teamComp, setDataTC]= useState([]);
    
    useEffect(() => {
        axios.get(`/api/teamComposition/${team.id}`).then((res) => setDataTC(res.data))

    }, []);

    return(
        
        <div class="team">
            <div class="teamcard">
                <div class="teamcard-info">
                    <p> {team.team_name} </p>
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