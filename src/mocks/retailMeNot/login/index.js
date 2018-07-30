import React from 'react';
import Nav from '../Nav';
import { Grid, Typography } from '@material-ui/core';
import SignUp from './SignUp';
import Login from './Login';

const RetailMeNotLogin = () => (
    <div>
        <Grid container style={{ height: 75 }}>
            <Nav />
        </Grid>
        <Grid container spacing={24} style={{ paddingTop: '3%', paddingLeft: '10%', paddingRight: '10%' }} alignContent="center" alignItems="center" justify="center">
            <Grid item lg={4}>
            </Grid>
            <Grid item lg={4} style={{ paddingLeft: '3%', paddingRight: '3%' }}>
                <Grid item lg={12} style={{ textAlign: 'center' }} >
                    <Typography variant='title'> Log In </Typography>
                </Grid>
                <Grid item lg={12} style={{ paddingTop: '4%', paddingBottom: '4%' }}>
                    <SignUp />
                </Grid>
                <Grid item lg={12}>
                    <Login />
                </Grid>
            </Grid>
            <Grid item lg={4}>
            </Grid>
        </Grid>
    </div>
)

export default RetailMeNotLogin;