import React, {useEffect, useState} from 'react';
import axios from "axios";
import TeamNameCard from "./TeamNameCard";

function MatchCard(props) {
    const { match } = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`/api/teamName/${match.id}`).then((res) => setData(res.data));
    }, []);


    return (
        
        <div>
            <div class="div-game-info"> "{match.game_name}" | Mise : {match.mise} SC</div>
            <div class="div-match-0">
                {data.map((teamName) =>(
                    <TeamNameCard teamName={teamName} key={teamName.id}/>
                ))}

            </div>
        </div>
        
        
        
    );
}

export default MatchCard;
