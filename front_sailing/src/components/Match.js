import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatchCard from './MatchCard';

function Match() {
    const[data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('/api/games').then((res) => setData(res.data));
    }, []);

    return(
        <div>
            {data.map((match)=>(
                <MatchCard match={match} key={match.game_name}/>
            ))}
        </div>

    );
}

export default Match;

