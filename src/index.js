import React from 'react';
import ReactDOM from 'react-dom';
import RetailMeNotLogin from './mocks/retailMeNot/login/index';
import RetailMeNotSignUp from './mocks/retailMeNot/signup/index';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <MuiThemeProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={RetailMeNotSignUp} />
                <Route exact path='/retailmenot/signup' component={RetailMeNotSignUp} />
                <Route exact path='/retailmenot/login' component={RetailMeNotLogin} />
            </Switch>
        </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('root')
);
