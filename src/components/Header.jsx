import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        fontWeight: 'bold',
    },
    button: {
        marginLeft: theme.spacing(2),
        borderRadius: '20px',
        textTransform: 'capitalize',
    },
}));

export default function Header() {
    const classes = useStyles();
    const location = useLocation(); // Get the current location

    // Conditionally render the header based on the current location
    if (location.pathname !== '/dashboard') {
        return (
            <AppBar position='static' color='transparent' elevation={0}>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        MUI Application
                    </Typography>
                    <Button
                        color='primary'
                        variant='outlined'
                        component={Link}
                        to='/login'
                        className={classes.button}
                    >
                        Login
                    </Button>
                    <Button
                        color='primary'
                        variant='contained'
                        component={Link}
                        to='/signup'
                        className={classes.button}
                    >
                        Signup
                    </Button>
                </Toolbar>
            </AppBar>
        );
    } else {
        return null; // Don't render anything if on the dashboard page
    }
}
