import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Grid
} from '@material-ui/core';

const Nav = () => (
    <AppBar color="inherit" style={navStyle}>
        <Toolbar>
            <Grid container spacing={0}>
                <Typography style={typeStyle} variant='title' color='inherit'> Retail Me Not </Typography>
            </Grid>
        </Toolbar>
    </AppBar>
)

const navStyle = {
    height: 70,
    backgroundColor: '#602d6c',
    color: 'white',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center'
}

const typeStyle = {
    fontFamily: 'Snell Roundhand, cursive',
    fontSize: '32px',
    textDecoration: 'none'
}



export default Nav;