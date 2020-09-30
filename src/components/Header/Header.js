import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.main
  },
  nav: {
    color: theme.palette.primary.main
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Box fontWeight="fontWeightBold" m={1}>
              MCH Gaming
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
