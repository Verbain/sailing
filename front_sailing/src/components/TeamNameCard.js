import React from 'react';

function TeamNameCard(props) {
    const { teamName } = props;

    return (
        
        <div>

                <div class="div-match-1">
                    {teamName.team_name}
                </div>

        </div>
        
        
        
    );
}

export default TeamNameCard;