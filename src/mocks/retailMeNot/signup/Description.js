import React from 'react';
import {
    Paper,
    Grid,
    Typography
} from '@material-ui/core';

const Description = () => (
    <Paper style={style}>
        <Grid container spacing={16}>
            <Grid item xs={12}>
                <Typography variant="subheading"> Create Free Account </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="title"> Access exclusive deals and earn rewards! </Typography>
            </Grid>
        </Grid>
    </Paper>
);

const style = {
    textAlign: 'center',
    padding: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

export default Description;