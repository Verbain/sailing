import React from 'react';
import TeamCard from './TeamCard';
import "./Teams.css";

function CreateTeam() {
    return(
        <div class="teams">
            <div class="team">
                <TeamCard/>
            </div>
            <div class="team">
                <TeamCard/>
            </div>
            <div class="team">
                <TeamCard/>
            </div>
            <div class="team">
                <TeamCard/>
            </div>
        </div>
    );
}

export default CreateTeam;