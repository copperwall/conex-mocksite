import React from 'react';
import ReactDOM from 'react-dom';

class LoginPP extends React.Component {
    render() {
        const RmnReactZoid = window.AdvConnectZoid.driver('react', {
            React,
            ReactDOM
        });
        return (
            <RmnReactZoid
                clientId="AbGEld_rV8YPIC1pMieTvZqrXfx8vMLuit71kDwCEy7ypeAJMc29--Asg2vjXh_fXz8HWeY_znOGwDPf"
                deviceType="mobile"
                pageType="login"
                merchantId="abc123"
                onLogin={() => window.location.href = `${window.location.origin}/retailmenot/payout`}
            />
        )
    }
}

export default LoginPP;
