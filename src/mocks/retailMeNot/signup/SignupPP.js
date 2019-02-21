import React from 'react';
import ReactDOM from 'react-dom';

class SignupPP extends React.Component {
    render() {
        const PayoutsAAC = window.paypal.PayoutsAAC.driver('react', {
            React,
            ReactDOM
        });
        return (
            <PayoutsAAC
                clientId={{
                    production: "AbGEld_rV8YPIC1pMieTvZqrXfx8vMLuit71kDwCEy7ypeAJMc29--Asg2vjXh_fXz8HWeY_znOGwDPf",
                    sandbox: "AbGEld_rV8YPIC1pMieTvZqrXfx8vMLuit71kDwCEy7ypeAJMc29--Asg2vjXh_fXz8HWeY_znOGwDPf",
                    staging: "AUfKX2mdsxU8RmnSRUvz5PaLGS7hDeLe1jmgORBV2Ar4mJjvaczl-TNZaazvcsqnkIhk69IYia3PBQsH"
                }}
                env="staging"
                pageType="signup"
                merchantId="abc123"
                onLogin={() => window.location.href = `${window.location.origin}/retailmenot/payout`}
            />
        )
    }
}

export default SignupPP;
