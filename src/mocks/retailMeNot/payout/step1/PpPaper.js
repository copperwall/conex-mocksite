import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const PpPaper = () => (
    <Paper style={{padding: '5%', textAlign: 'center', height: '100%'}} >
        <Grid container spacing={24} alignItems='stretch'>
            <Grid item xs={12}>
                <Typography variant="title"> Get cash via PayPal </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="caption"> Payment will be sent to: </Typography>
                <Typography variant="caption"> roylichtenstein@gmail.com </Typography>
            </Grid>
        </Grid>
    </Paper>
)

export default PpPaper;