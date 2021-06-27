import React from 'react';

function Wallet(props){
    const {wallet}=props;
    
    return(
        
        <div>
            {wallet.wallet}
        </div>
    );
}

export default Wallet;