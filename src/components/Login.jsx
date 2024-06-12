import React, { useState } from 'react';
import { Container, Paper, TextField, Typography, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    borderRadius: 10, // Add border radius
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', // Add box shadow
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2)
  },
  submit: {
    marginTop: theme.spacing(3),
    borderRadius: 20, // Add border radius
    fontWeight: 'bold', // Make button text bold
    letterSpacing: '1px', // Add letter spacing
    fontSize: '1rem', // Increase font size
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main, // Use primary theme color for link
    fontWeight: 'bold', // Make link text bold
    '&:hover': {
      textDecoration: 'underline', // Underline on hover
    }
  },
  title: {
    marginBottom: theme.spacing(4),
    color: theme.palette.primary.main, // Use primary theme color for title
  },
}));

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {
    if (email && password && !emailError && !passwordError) {
      // Simulate successful login
      navigate('/dashboard'); // Navigate to dashboard after successful login
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper} elevation={3} style={{ padding: '16px' }}>
        <Typography variant='h4' align='center' gutterBottom className={classes.title}>
          Login
        </Typography>
        <form className={classes.form}>
          <TextField
            label='Email'
            variant='outlined'
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={Boolean(emailError)}
            helperText={emailError}
            margin="normal"
          />
          <TextField
            label='Password'
            variant='outlined'
            type='password'
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            error={Boolean(passwordError)}
            helperText={passwordError}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
            onClick={handleLogin} // Handle login button click
          >
            Login
          </Button>
        </form>
        <Grid container justifyContent="center">
          <Grid item>
            <Link to='/signup' className={classes.link}>
              Don't have an Account? Signup
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
