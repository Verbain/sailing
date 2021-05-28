import React from 'react';

function MatchCard(props) {
    const { match } = props;

    return (
        <div>
            <div class="div-game-info"> "{match.game_name}" | Mise : {match.mise} SC</div>
            <div class="div-match-0">
                <div class="div-match-1"> 
                {match.team_1}
                
                </div>
                <div class="div-match-2">
                    VS
                </div>
                <div class="div-match-3">
                {match.team_2}
                </div> 
            </div>
        </div>
        
        
        
    );
}

export default MatchCard;
