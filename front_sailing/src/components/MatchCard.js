import React, {useEffect, useState} from 'react';
import axios from "axios";
import TeamNameCard from "./TeamNameCard";

function MatchCard(props) {
    const { match } = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`/api/teamName/${match.id}`).then((res) => setData(res.data));
    }, []);


    function StartButton(props){     
        const { riotGameId } = props;
        const { match } = props;

        const result = () => { 
            axios.get(`/api/matchEnd/${match.id}`)
            window.location = '/'
        }

        const start = () => { 
            axios.get(`/api/setGameId/${match.id}`)
            window.location = '/'
        }

        if(!(riotGameId==null)){
            return (
                <button class="btn-3" onClick={result}><span class="iconify-refresh" data-icon="clarity:refresh-line" data-inline="false"></span></button>
            )
        } else {
            return (
                <button class="btn-3" onClick={start}><span class="iconify-play" data-icon="clarity:play-line" data-inline="false"></span></button>
            ) }
    }

    return (
        
        <div>
            <div class="div-game-info"> 
            "{match.game_name}" | Mise : {match.mise} SC | RiotGameID : #{match.riot_game_id}
            </div>
            <StartButton match={match} riotGameId={match.riot_game_id}/>
            <div class="div-match-0">
                {data.map((teamName) =>(
                    <TeamNameCard teamName={teamName} key={teamName.id}/>
                ))}

            </div>
        </div>
        
        
        
    );
}

export default MatchCard;
