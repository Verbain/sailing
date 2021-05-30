import React, { useEffect, useState} from 'react';
import MatchForm from './MatchForm';
import axios from 'axios';

function CreateMatch() {
    const[dataTeam, setDataTeam ] = useState([]);

    useEffect(() => {
    axios.get('/api/teams').then((res) => setDataTeam(res.data));
    }, []);
    
    return(
        
        <div class="div-home-0">
            <div class="div-home-1">
                <div class="div-home-2">
            <MatchForm dataTeam={dataTeam}/>
        </div>
        </div>
        </div>
    );
}

export default CreateMatch;