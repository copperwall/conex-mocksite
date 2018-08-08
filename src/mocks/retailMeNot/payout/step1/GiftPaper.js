import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const GiftPaper = () => (
    <Paper style={{padding: '5%', textAlign: 'center', height: '100%'}} >
        <Grid container spacing={24} alignItems='stretch'>
            <Grid item xs={12}>
                <Typography variant="title"> Get cash via Electronic Giftcard </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="caption"> Coming soon </Typography>
            </Grid>
        </Grid>
    </Paper>
)

export default GiftPaper;