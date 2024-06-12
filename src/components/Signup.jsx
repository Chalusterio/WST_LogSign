import React, { useState } from 'react';
import { Container, Paper, TextField, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
    marginTop: theme.spacing(2),
    borderRadius: 20, // Add border radius
  },
  title: {
    marginBottom: theme.spacing(4),
    color: theme.palette.primary.main, // Use primary theme color for title
    fontWeight: 'bold', // Make title text bold
  }
}));

export default function Signup() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

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

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && confirmPassword && !Boolean(emailError) && !Boolean(passwordError) && !Boolean(confirmPasswordError)) {
      alert("Account created Successfully");
      // Here you can add code to handle the form submission, like sending data to the server.
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper} elevation={3} style={{ padding: '16px' }}>
        <Typography variant='h4' align='center' gutterBottom className={classes.title}>
          Signup
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
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
          <TextField 
            label='Confirm Password' 
            variant='outlined' 
            type='password' 
            fullWidth 
            value={confirmPassword} 
            onChange={handleConfirmPasswordChange} 
            error={Boolean(confirmPasswordError)} 
            helperText={confirmPasswordError} 
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth className={classes.submit}>
            Signup
          </Button>
        </form>        
      </Paper>
    </Container>
  );
}
