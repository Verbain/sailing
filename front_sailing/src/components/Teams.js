import React from 'react';
import TeamCard from './TeamCard';
import add from '../assets/add.png';

function CreateTeam() {
    return(
        <div class="teams">
            <div class="div-team-0">
                <div class="div-team-1">
                    <button class="add-team">
                        <img
                            src={add}
                            alt="+"
                            class="add-team-img"
                        />
                    </button>
                    <div className="div-team-description">
                        <h5>Créer une équipe</h5>
                    </div>
                </div>
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
            <div class="team">
                <TeamCard/>
            </div>
        </div>
    );
}

export default CreateTeam;