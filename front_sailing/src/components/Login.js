import React from 'react';


function Login() {
    return(
        <div>
            <div className="login">
                <h1>Connexion</h1>
                <label>Nom de compte</label>
                <input type="text"/>
                <label>Mot de passe</label>
                <input type="text"/>
                <button>Se connecter</button>
            </div>
            <div className="sign-in">
                <h1>Inscription</h1>
                <label>Nom de compte</label>
                <input type="text"/>
                <label>Mot de passe</label>
                <input type="text"/>
                <button>S'enregistrer</button>

            </div>
        </div>

    );
}

export default Login;