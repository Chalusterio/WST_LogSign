import React, { useState } from 'react';
import { Container, Typography, Paper, Tabs, Tab, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
        marginTop: theme.spacing(4),
        borderRadius: 10,
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    },
    title: {
        marginBottom: theme.spacing(4),
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
    content: {
        marginTop: theme.spacing(2),
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);
    const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleLogout = () => {
        // Perform logout actions here
        // For demonstration purposes, let's just redirect to the login page
        setLogoutDialogOpen(true);
    };

    const confirmLogout = () => {
        // Perform logout actions here, e.g., clear session, reset state, etc.
        setLogoutDialogOpen(false);
        // Redirect to the login page
        window.location.href = '/login'; // Replace '/login' with the actual path to your login page
    };

    const cancelLogout = () => {
        setLogoutDialogOpen(false);
    };

    return (
        <Container maxWidth="md">
            <Paper className={classes.paper} elevation={3}>
                <Typography variant='h4' align='center' className={classes.title}>
                    Dashboard
                </Typography>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Dashboard" />
                    <Tab label="Users" />
                    <Tab label="Reports" />
                    <Tab label="Settings" />
                </Tabs>
                <div className={classes.content}>
                    {selectedTab === 0 && (
                        <Typography variant="body1">
                            Content for Dashboard
                        </Typography>
                    )}
                    {selectedTab === 1 && (
                        <Typography variant="body1">
                            Content for Users
                        </Typography>
                    )}
                    {selectedTab === 2 && (
                        <Typography variant="body1">
                            Content for Reports
                        </Typography>
                    )}
                    {selectedTab === 3 && (
                        <Typography variant="body1">
                            Content for Settings
                        </Typography>
                    )}
                    <Button variant="contained" color="primary" onClick={handleLogout}>
                        Log Out
                    </Button>
                </div>
            </Paper>
            <Dialog open={logoutDialogOpen} onClose={cancelLogout}>
                <DialogTitle>Confirm Log Out</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">Are you sure you want to log out?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={confirmLogout} color="primary">Yes</Button>
                    <Button onClick={cancelLogout} color="primary" autoFocus>No</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}
