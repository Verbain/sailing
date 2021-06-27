import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatchCard from './MatchCard';
import MatchCardBis from './MatchCardBis';


function Home() {
    const[data, setData] = useState([]);
    const[data2, setData2 ] = useState([]);
    const[dataTeam, setDataTeam ] = useState([]);
    const matchStates = ["recherche", "cours"];
    const [matchState, setMatchState] = useState('recherche');
    
    useEffect(() => {
        axios.get('/api/gamesWithOpponent').then((res) => setData(res.data));
        axios.get('/api/gamesWithoutOpponent').then((res) => setData2(res.data));
        axios.get('/api/teams').then((res) => setDataTeam(res.data));
    }, []);

    return(
        
        <div class="div-home-0">
            {matchStates.map(matchState => (
                <button 
                    type="button" 
                    key={matchState} 
                    onClick={() => setMatchState(matchState)}
                    >
                    {matchState}
                </button>
            ))}
            <div>
                {matchState === 'recherche' && (
                    <div class="div-home-2-bis">
                        <h2> Recherche de match </h2>
                        <div class="h2-place"></div>
                        <div>
                            {data2.map((matchbis) =>(
                                <MatchCardBis dataTeam={dataTeam} matchbis={matchbis} key={matchbis.id}/>
                            ))}
                        </div>
                    </div> 
                )}
                {matchState === 'cours' && (
                    <div class="div-home-2">
                    <h2> Match en cours </h2>
                    <div class="h2-place"></div>
                    <div>
                        {data.map((match)=>(
                            <MatchCard match={match} key={match.id}/>
                        ))}
                    </div>
                </div>
                )}
            </div>
            <div class="div-home-1">
                
            </div>
            <div class="div-home-1">
                   
            </div>
        </div>
        
    );
}

export default Home;

