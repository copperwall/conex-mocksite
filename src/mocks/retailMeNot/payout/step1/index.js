import React from 'react';
import { Grid, LinearProgress, Typography } from '@material-ui/core';
import PpPaper from './PpPaper';
import GiftPaper from './GiftPaper';

const Step1 = () => (
    <Grid container spacing={24} style={{paddingTop:'3%', paddingLeft:'5%', paddingRight: '5%', }} alignItems='stretch' justify='center'>
        <Grid item xs={12}>
            <Typography variant='title'> Step 1: Choose Method </Typography> 
        </Grid>
        <Grid item xs={12}>
            <LinearProgress variant="determinate" value={33} />
        </Grid>
        <Grid item xs={12} sm={6}>
            <PpPaper />
        </Grid>
        <Grid item xs={12} sm={6}>
            <GiftPaper />
        </Grid>
    </Grid>
)

export default Step1;