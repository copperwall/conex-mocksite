import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Nav = () => (
    <AppBar color="inherit" style={navStyle}>
    <Toolbar>
        <Grid container spacing={0}>
            <Grid item xs={10} md={7} style={{textAlign: 'right', paddingRight: '3%'}}>
                <a href="/" style={{textDecoration: 'none', color: 'white'}}> <Typography style={typeStyle} variant='title' color='inherit'> RetailMeNePas </Typography> </a>
            </Grid>
            <Grid item xs={2} md={5} style={{textAlign: 'right', width: '100%'}}>
                <a href="/retailmenot/signup"> <Button style={{ color: 'white'}}> Login / Signup </Button> </a>
            </Grid>
        </Grid>
    </Toolbar>
</AppBar>
)

const navStyle = {
    height: 70,
    backgroundColor: '#602d6c',
    color: 'white',
    boxShadow: 'none',
    // display: 'flex',
    // alignItems: 'center'
}

const typeStyle = {
    fontFamily: 'Snell Roundhand, cursive',
    fontSize: '32px',
    textDecoration: 'none'
}



export default Nav;