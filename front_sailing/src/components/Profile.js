import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
    const { user } = useAuth0();
    const { name, picture, email } = user;
    return(
        <div class="profile-container">
            <div class="div-profile-0">
                <div class="div-profile-1">
                    <img
                        src={picture}
                        alt="image"
                        class="profile-img"
                    />
                </div>
                <div class="div-profile-2">
                    <div class="div-profile-info">
                        <h2>Pseudo : {name}</h2>
                    </div>
                    <div class="div-profile-info">
                        <h2>Adresse e-mail : {email}</h2>
                    </div>
                    <div class="div-profile-info">
                        <h2> Autres </h2>
                    </div>
                </div>
            </div>
        
        </div>
    );
    
}

export default Profile;
