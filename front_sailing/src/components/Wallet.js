import React from 'react';

function Wallet(props){
    const {wallet}=props;
    
    return(
        
        <div>
            {wallet.wallet} SC
        </div>
    );
}

export default Wallet;