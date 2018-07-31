'use strict'
import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Nav from './Nav'

const RetailMeNot = () => {
    return (
        <div>
            <Nav />
            <Grid container spacing={24} alignItems="stretch" justify="center">
                <Grid item xs={12}> <Paper style={bannerStyle}> <img src="/conex/js/client/static/images/rmn_banner.png" alt="" /> </Paper> </Grid>

                <Grid item xs={12} lg={4}> <Paper style={paperStyle}> OFFER 1 </Paper> </Grid>
                <Grid item xs={12} lg={4}> <Paper style={paperStyle}> OFFER 2 </Paper> </Grid>
                <Grid item xs={12} lg={4}> <Paper style={paperStyle}> OFFER 3 </Paper> </Grid>

                <Grid item xs={6} lg={1}> <Paper style={paperStyle}> DEAL 4 </Paper> </Grid>
                <Grid item xs={6} lg={1}><Paper style={paperStyle}> DEAL 5 </Paper> </Grid>
                <Grid item xs={6} lg={1}><Paper style={paperStyle}> DEAL 6 </Paper> </Grid>
                <Grid item xs={6} lg={1}><Paper style={paperStyle}> DEAL 7 </Paper> </Grid>
                <Grid item xs={6} lg={1}><Paper style={paperStyle}> DEAL 8 </Paper> </Grid>
                <Grid item xs={6} lg={1}><Paper style={paperStyle}> DEAL 9 </Paper> </Grid>
            </Grid>
        </div>
    )
}

const bannerStyle = {
    paddingTop: '10%',
    textAlign: 'center'
}

const paperStyle = {
    padding: '30%',
    textAlign: 'center'
}

export default RetailMeNot
