import React from 'react';
import ReactDOM from 'react-dom';

class SignupPP extends React.Component {
    render() {
        const PayoutsConnect = window.paypal.PayoutsConnect.driver('react', {
            React,
            ReactDOM
        });
        return (
            <PayoutsConnect
                clientId={{
                    production: "AbGEld_rV8YPIC1pMieTvZqrXfx8vMLuit71kDwCEy7ypeAJMc29--Asg2vjXh_fXz8HWeY_znOGwDPf",
                    sandbox: "AbGEld_rV8YPIC1pMieTvZqrXfx8vMLuit71kDwCEy7ypeAJMc29--Asg2vjXh_fXz8HWeY_znOGwDPf"
                }}
                env="sandbox"
                pageType="signup"
                merchantId="abc123"
                onLogin={() => window.location.href = `${window.location.origin}/retailmenot/payout`}
            />
        )
    }
}

export default SignupPP;
