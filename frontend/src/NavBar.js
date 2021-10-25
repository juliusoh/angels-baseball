import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  image: {
    width: '29px',
    height: '40px',
    cursor: 'pointer',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar: {
    backgroundColor: '#041E42',
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ backgroundColor: '##041E42' }}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <img
            className={classes.image}
            src="https://www.mlbstatic.com/team-logos/team-cap-on-dark/108.svg"
          ></img>{' '}
        </IconButton>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ color: '#fff' }}
        >
          Angels Baseball System
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
