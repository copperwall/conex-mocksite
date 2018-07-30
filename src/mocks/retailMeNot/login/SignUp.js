import React from 'react';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

const SignUp = () => (
    <Paper style={style}>
        Don't have an account? <a href="/retailmenot/signup"> Sign Up </a>
    </Paper>
)

const style = {
    padding: '5%',
    textAlign: 'center',
}

export default SignUp;