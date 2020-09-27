import React from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';
import theme from '../../theme';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Helmet from 'react-helmet';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  bg: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.main
  }
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet>
          <style>{'body { background-color: #212121; }'}</style>
        </Helmet>
        <div className={classes.bg} />
        <CssBaseline />
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
