import React,{useState,useEffect} from 'react';
import MatchForm from './MatchForm';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function CreateMatch() {
    const { user } = useAuth0();
    const { email } = user;
    const[dataTeam, setDataTeam ] = useState([]);

    useEffect(() => {

        axios.get(`/api/getPlayerByEmail/${email}`).then((res) => axios.get(`/api/allTeamOfPlayer/${(res.data.id)}`).then((res) => setDataTeam(res.data)));
    }, []);

    return(
        
        <div class="div-home-0">
            <div class="div-home-1">
                <div class="div-home-2-form">
            <MatchForm dataTeam={dataTeam}/>
        </div>
        </div>
        </div>
    );
}

export default CreateMatch;