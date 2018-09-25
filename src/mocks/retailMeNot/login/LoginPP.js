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
                clientId="AXgFMu3u6vdatxW4Yfl9R5A8QBa_Wm-H4ijwUnOFruS60g55Jqaj1L91LDyneyIuScZpMqLo2ciBcvd3"
                deviceType="mobile"
                pageType="login"
                onLogin={() => window.location.href = `${window.location.origin}/retailmenot/payout`}
            />
        )
    }
}

export default LoginPP;
