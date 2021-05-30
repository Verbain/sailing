import React, { useState, useEffect} from 'react';
import AddPlayer from './AddPlayer';
import axios from "axios";

function TeamCard(props) {
    const { team } = props;
    
    const[data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('/api/teams').then((res) => setData(res.data));

    }, []);

    return(
        
        <div class="team">
            <div class="teamcard">
                <div class="teamcard-info">
                    <p> {team.team_name} </p>
                </div>
                <div class="teamcard-list">
                    <li>
                        <AddPlayer team={team} />
                    </li>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;