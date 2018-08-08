import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import Step1 from './step1/index';
import Nav from '../Nav';

const Payout = () => (
    <div>
        <Grid container style={{ height: 75 }}>
            <Nav />
        </Grid>
        <Grid container spacing={24} style={{paddingTop:'3%', paddingLeft:'5%', paddingRight: '5%', }} alignItems='stretch' justify='center'>
            <Grid item xs={6} style={{textAlign:'left'}} >
                <Typography variant="headline"> Redeem Rewards </Typography>
            </Grid>
            <Grid item xs = {6} style={{textAlign:'right'}}>
                <Typography variant="subheading"> Rewards balance: $5 </Typography>
            </Grid>
        </Grid>
        <div style={{height: '25%'}}>
            <Step1 />
        </div>
    </div>
)

export default Payout;