import React from 'react';
import {
    Grid,
} from '@material-ui/core';
import Description from './Description';
import Nav from '../Nav';
import Signin from './Signin';
import Signup from './Signup';

const RetailMeNotSignUp = () => (
    <div>
        <Grid container style={{ height: 75 }}>
            <Nav />
        </Grid>
        <Grid container spacing={24} style={{ paddingTop: '5%', paddingLeft: '10%', paddingRight: '10%' }} alignItems="stretch" justify="center">
            <Grid item sm={12} md={6} lg={4} style={{maxWidth: 300}}> <Description /> </Grid>
            <Grid item sm={12} md={6} lg={4} style={{maxWidth: 300}}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Signin />
                    </Grid>
                    <Grid item xs={12}>
                        <Signup />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
)

export default RetailMeNotSignUp;