import React from 'react';
import {
    Paper,
    Grid,
    Button,
    Divider,
    TextField,
} from '@material-ui/core';
import SignupPP from './SignupPP';

const Signup = () => (
    <Paper>
        <Grid container spacing={0}>
            <Grid item xs={12} style={{ paddingLeft: '1%', paddingTop: '5%' }}>
                <SignupPP />
            </Grid>
            <Grid item xs={12} style={{ padding: '5%', paddingTop: '5%', paddingBottom: '5%' }}>
                <Button fullWidth style={{ padding: '5%' }} variant='raised' color='primary'> Continue with Facebook </Button>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12} style={{ padding: '5%' }}>
                <TextField label="Username" fullWidth />
            </Grid>
            <Grid item xs={12} style={{ padding: '5%' }}>
                <TextField label="Password" fullWidth />
            </Grid>
            <Grid item xs={12} style={{ padding: '5%' }}>
                <Button fullWidth style={{padding: '5%'}} variant='raised' color='secondary'> Sign Up </Button>
            </Grid>
        </Grid>
    </Paper>
)

const paperStyle = {
    height: '100%',
    padding: '5%',
    paddingBottom: 0,
    textAlign: 'center'
}

export default Signup