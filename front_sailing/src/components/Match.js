import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatchCard from './MatchCard';
import MatchCardBis from './MatchCardBis';

function Match() {
    const[data, setData] = useState([]);
    const[data2, setData2 ] = useState([]);

    
    useEffect(() => {
        axios.get('/api/gamesWithOpponent').then((res) => setData(res.data));
        axios.get('/api/gamesWithoutOpponent').then((res) => setData2(res.data));


    }, []);

    return(
        
        <div>
            <div>
                {data.map((match)=>(
                    <MatchCard match={match} key={match.id}/>
                ))}

            </div>
            <div>
                {data2.map((matchbis) =>(
                    <MatchCardBis matchbis={matchbis} key={matchbis.id}/>
                ))}
            </div>
        </div>


    );
}

export default Match;

