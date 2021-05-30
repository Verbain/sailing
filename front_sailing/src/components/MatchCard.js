import React, {useEffect, useState} from 'react';
import axios from "axios";

function MatchCard(props) {
    const { match } = props;
    /*ESSAYER DE RECUPERER LE NOM DES EQUIPES*/
    let[data, setData] = useState([]);

    useEffect(() => {
        axios.get(`/api/teamName/${match.id}`).then((res) => setData(res.data));
    }, []);


    return (
        
        <div>
            <div class="div-game-info"> "{match.game_name}" | Mise : {match.mise} SC</div>
            <div class="div-match-0">
                <div class="div-match-1">
                    {match.team_1}
                </div>
                <div class="div-match-2">
                    VS
                </div>
                <div class="div-match-3">
                {match.team_2}
                </div> 
            </div>
        </div>
        
        
        
    );
}

export default MatchCard;
