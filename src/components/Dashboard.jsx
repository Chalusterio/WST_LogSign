import React, { useState } from 'react';
import { Container, Typography, Paper, Tabs, Tab, Button, Dialog, DialogTitle, DialogContent, DialogActions, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ExitToApp as ExitToAppIcon, Dashboard as DashboardIcon, Person as PersonIcon, Report as ReportIcon, Settings as SettingsIcon } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
        marginTop: theme.spacing(4),
        borderRadius: 10,
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: theme.palette.background.default,
    },
    title: {
        marginBottom: theme.spacing(4),
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
    content: {
        marginTop: theme.spacing(2),
    },
    logoutButton: {
        marginTop: theme.spacing(2),
    },
    tabIcon: {
        marginRight: theme.spacing(1),
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
        setLogoutDialogOpen(true);
    };

    const confirmLogout = () => {
        setLogoutDialogOpen(false);
        window.location.href = '/login';
    };

    const cancelLogout = () => {
        setLogoutDialogOpen(false);
    };

    const menuItems = [
        { label: 'Dashboard', icon: <DashboardIcon className={classes.tabIcon} />, content: 'Content for Dashboard' },
        { label: 'Users', icon: <PersonIcon className={classes.tabIcon} />, content: 'Content for Users' },
        { label: 'Reports', icon: <ReportIcon className={classes.tabIcon} />, content: 'Content for Reports' },
        { label: 'Settings', icon: <SettingsIcon className={classes.tabIcon} />, content: 'Content for Settings' },
    ];

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
                    {menuItems.map((item, index) => (
                        <Tab key={index} label={item.label} icon={item.icon} />
                    ))}
                </Tabs>
                <div className={classes.content}>
                    <Typography variant="body1">
                        {menuItems[selectedTab].content}
                    </Typography>
                    <Grid container justifyContent="flex-end">
                        <Button variant="contained" color="primary" className={classes.logoutButton} onClick={handleLogout}>
                            <ExitToAppIcon />
                            Log Out
                        </Button>
                    </Grid>
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
