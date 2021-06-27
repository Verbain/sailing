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
                <button onClick={result}>result</button>
            )
        } else {
            return (
                <button onClick={start}>start</button>
            ) }
    }

    return (
        
        <div>
            <div class="div-game-info"> 
            "{match.game_name}" | Mise : {match.mise} SC | RiotGameID : #{match.riot_game_id}
            <StartButton match={match} riotGameId={match.riot_game_id}/>
            </div>
            <div class="div-match-0">
                {data.map((teamName) =>(
                    <TeamNameCard teamName={teamName} key={teamName.id}/>
                ))}

            </div>
        </div>
        
        
        
    );
}

export default MatchCard;
