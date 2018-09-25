import React from 'react';
import ReactDOM from 'react-dom';

class SignupPP extends React.Component {
    render() {
        let RmnReactZoid = window.AdvConnectZoid.driver('react', {
            React,
            ReactDOM
        });
        return (
            <RmnReactZoid
                clientId="AXgFMu3u6vdatxW4Yfl9R5A8QBa_Wm-H4ijwUnOFruS60g55Jqaj1L91LDyneyIuScZpMqLo2ciBcvd3"
                deviceType="mobile"
                pageType="signup"
                onLogin={() => window.location.href = `${window.location.origin}/retailmenot/payout`}
            />
        )
    }
}

export default SignupPP;
