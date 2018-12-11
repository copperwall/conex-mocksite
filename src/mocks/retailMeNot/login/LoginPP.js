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
                clientId="AUfKX2mdsxU8RmnSRUvz5PaLGS7hDeLe1jmgORBV2Ar4mJjvaczl-TNZaazvcsqnkIhk69IYia3PBQsH"
                deviceType="mobile"
                pageType="login"
                merchantId="abc123"
                onLogin={() => window.location.href = `${window.location.origin}/retailmenot/payout`}
            />
        )
    }
}

export default LoginPP;
