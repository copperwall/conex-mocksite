import React from 'react';
import ReactDOM from 'react-dom';

class LoginPP extends React.Component {
    render() {
        const PayoutsConnect = window.paypal.PayoutsConnect.driver('react', {
            React,
            ReactDOM
        });
        return (
            <PayoutsConnect
                clientId={{
                    production: "",
                    sandbox: "AUfKX2mdsxU8RmnSRUvz5PaLGS7hDeLe1jmgORBV2Ar4mJjvaczl-TNZaazvcsqnkIhk69IYia3PBQsH",
                    staging: "AUfKX2mdsxU8RmnSRUvz5PaLGS7hDeLe1jmgORBV2Ar4mJjvaczl-TNZaazvcsqnkIhk69IYia3PBQsH",
                    development: "AfgGldN685CHEoiv6MJ3McDJ8KC-tDJ3YCXW5jjQTdv6ibrSqy8kwTCuuaCUbNN0fWrxPbTun5rh4KmP",
                }}
                pageType="login"
                merchantId="abc123"
                env="staging"
                onLogin={() => window.location.href = `${window.location.origin}/retailmenot/payout`}
            />
        )
    }
}

export default LoginPP;
