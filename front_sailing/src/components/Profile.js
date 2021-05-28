import React, { useState, useEffect, setText } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

function Profile() {
    const { user } = useAuth0();
    const { nickname, picture, email } = user;

    const[data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('/api').then((res) => setData(res.data));
    }, []);

    function handleChange(event) {
        setText(event.target.value)
    }
    
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
                        <h2>Pseudo : {nickname}</h2>
                    </div>
                    <div class="div-profile-info">
                        <h2>Adresse e-mail : {email}</h2>
                    </div>
                    <div class="div-profile-info">
                        <label>op.gg : </label>
                        <input type="text" value={data.op_gg} onChange={handleChange} />
                            {data.op_gg}
                            {console.log(data.op_gg)}
                    </div>
                </div>
            </div>
        
        </div>
    );
    
}

export default Profile;
