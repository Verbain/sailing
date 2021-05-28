import React from 'react';

function TeamCard(props) {
    const { team } = props;

    return(
        <div class="team">
            <div class="teamcard">
                <div class="teamcard-info">
                    <p> {team.team_name} </p>
                </div>
                <div class="teamcard-list">
                    <li>
                        {data.map((team) =>(
                        <AddPlayer team={team} key={team.id} />
                    ))}
                    </li>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;