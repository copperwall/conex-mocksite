import React from 'react';
import ReactDOM from 'react-dom';
import zoid from 'zoid';

class LoginPP extends React.Component {
    constructor() {
        super()
    }
    render() {
        const RmnReactZoid = zoid.create({
            tag: 'rmn-pp-signup-component',
            url: 'https://www.conexnodeweb18071848.qa.paypal.com/conex/advantage-connect/RETAILMENOT',
            autoResize: {
                height: true,
                element: 'html',
            },
            prerenderTemplae: () => null,
        }).driver('react', {
            React: React,
            ReactDOM: ReactDOM,
        });
        return (
            <RmnReactZoid
                clientId="AfN2xQ5wdIZw3c4-IBbh3YkzOZUJorjbjcUS6DMVz3Ggtx9Vyc2hTgKQzHHBK19V6A2igMgyzzgrBhRx"
                deviceType="mobile"
                pageType="login"
                onLogin={() => window.location.href = `${window.location.origin}/retailmenot/payout`}
            />
        )
    }
}

export default LoginPP;