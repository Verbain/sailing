import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatchCard from './MatchCard';
import MatchCardBis from './MatchCardBis';
import { useAuth0 } from "@auth0/auth0-react";



function Home() {
    const { user } = useAuth0();
    const { email } = user;
    const[data, setData] = useState([]);
    const[data2, setData2 ] = useState([]);
    const[dataTeam, setDataTeam ] = useState([]);
    const matchStates = ["Recherche de match", "Match en cours"];
    const [matchState, setMatchState] = useState('Recherche de match');
    
    useEffect(() => {
        axios.get('/api/gamesWithOpponent').then((res) => setData(res.data));
        axios.get('/api/gamesWithoutOpponent').then((res) => setData2(res.data));
        axios.get(`/api/getPlayerByEmail/${email}`).then((res) => axios.get(`/api/allTeamOfPlayer/${(res.data.id)}`).then((res) => setDataTeam(res.data)));
    }, []);

    return(
        
        <div class="div-home-0">
            <div class="div-home-btn">
                {matchStates.map(matchState => (
                    <button 
                        type="button" 
                        class="slide"
                        key={matchState} 
                        onClick={() => setMatchState(matchState)}
                        >
                        <div>{matchState}</div>
                        <i class="icon-arrow-right"></i>
                    </button>
                ))}
            </div>
            <div>
                {matchState === 'Recherche de match' && (
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
                {matchState === 'Match en cours' && (
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
        </div>
        
    );
}

export default Home;

