import React from 'react';
import ReactDOM from 'react-dom';

import { StyleContext } from '../../../index';

class SignupPP extends React.Component {
    render() {
        const PayoutsAAC = window.paypal.PayoutsAAC.driver('react', {
            React,
            ReactDOM
        });
        return (
            <StyleContext.Consumer>
                {style => (
                    <PayoutsAAC
                        clientId={{
                            production: "AbGEld_rV8YPIC1pMieTvZqrXfx8vMLuit71kDwCEy7ypeAJMc29--Asg2vjXh_fXz8HWeY_znOGwDPf",
                            sandbox: "AbGEld_rV8YPIC1pMieTvZqrXfx8vMLuit71kDwCEy7ypeAJMc29--Asg2vjXh_fXz8HWeY_znOGwDPf"
                        }}
                        env="sandbox"
                        pageType="signup"
                        merchantId="abc123"
                        style={style}
                        onLogin={() => window.location.href = `${window.location.origin}/retailmenot/payout`}
                    />
                )}
            </StyleContext.Consumer>
        )
    }
}

export default SignupPP;
