import React from 'react';

function SelectTeam(props) {
    const { teams } = props;

    return (    
            <option value={teams.id}>{teams.team_name}</option>          
    );
}

export default SelectTeam;