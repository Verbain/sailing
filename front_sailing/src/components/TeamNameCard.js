import React from 'react';

function TeamNameCard(props) {
    const { teamName } = props;

    return (
        
        <div>

                <div class="div-match-1">
                    ÉQUIPE : {teamName.team_name.toLocaleUpperCase()}
                </div>

        </div>
        
        
        
    );
}

export default TeamNameCard;