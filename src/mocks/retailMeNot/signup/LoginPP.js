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
                clientId="AW_b4NdVcHRh2GfD-2k-nwxLHtNgFfCX0UbyEABReKuuVpBiBC4SzCDyCMvYvhHhDl11BGCVwmV97oWA"
                deviceType="mobile"
                pageType="signup"
                onLogin={()=>console.log('loggedin')}
            />
        )
    }
}

export default LoginPP;