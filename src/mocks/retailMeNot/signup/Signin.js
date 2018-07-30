import React from 'react';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Signin = () => (
    <Paper style={style}>
        Already have an account? <a href="/retailmenot/login"> Log In </a>
    </Paper>
)

const style = {
    padding: '5%',
    textAlign: 'center',
}

export default Signin;