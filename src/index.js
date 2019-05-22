import React from 'react';
import ReactDOM from 'react-dom';
import RetailMeNotLogin from './mocks/retailMeNot/login/index';
import RetailMeNotSignUp from './mocks/retailMeNot/signup/index';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RetailMeNot from './mocks/retailMeNot/index';
import Payout from './mocks/retailMeNot/payout/index';

const queryParams = (new URL(location.href)).searchParams;

const style = {
    layout: queryParams.get('layout') || 'vertical',
    color: queryParams.get('color') || 'silver',
    shape: queryParams.get('shape') || 'pill'
}

export const StyleContext = React.createContext();


ReactDOM.render(
    <StyleContext.Provider value={style}>
        <MuiThemeProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={RetailMeNot} />
                    <Route exact path='/retailmenot/signup' component={RetailMeNotSignUp} />
                    <Route exact path='/retailmenot/login' component={RetailMeNotLogin} />
                    <Route exact path='/retailmenot/payout' component={Payout} />
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    </StyleContext.Provider>,
    document.getElementById('root')
);
