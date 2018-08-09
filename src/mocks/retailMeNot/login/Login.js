import React from 'react';
import {
    Paper,
    Grid,
    Button,
    Divider,
    TextField,
} from '@material-ui/core';
import LoginPP from './LoginPP';

const Login = () => (
    <Paper>
        <Grid container spacing={0}>
            <Grid item xs={12} style={{ padding: '2.5%', paddingTop: '5%' }}>
                <LoginPP />
            </Grid>
            <Grid item xs={12} style={{ padding: '2.5%', paddingTop: '5%' }}>
                <Button fullWidth style={{ padding: '5%' }} variant='raised' color='primary'> Log In with Facebook </Button>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12} style={{ padding: '2.5%' }}>
                <TextField label="Username" fullWidth />
            </Grid>
            <Grid item xs={12} style={{ padding: '2.5%' }}>
                <TextField label="Password" fullWidth />
            </Grid>
            <Grid item xs={12} style={{ padding: '2.5%' }}>
                <Button fullWidth style={{padding: '5%'}} variant='raised' color='secondary'> Login </Button>
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

export default Login