import React, { useState, useEffect } from 'react';
// import * as React from "react"
// import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query-devtools";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import PlayerCard from '../PlayerCard/PlayerCard';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    color: theme.palette.text.main
  }
}));

// const queryCache = new QueryCache();

const Main = () => {
  const [stats, setStats] = useState();
  // const [user, setUser] = useState();

  useEffect(() => {
    console.log('passing by useEffect');
    let name = 'MCH_MrMangou';
    // setUser(user)
    // console.log(user)
    let plat = 'psn';
    let url = `https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/${name}/${plat}`;
    const headers = {
      'x-rapidapi-host': 'call-of-duty-modern-warfare.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY
    };
    const fetchData = async () => {
      //   try{
      const result = await axios.get(url, {
        headers: headers
      });
      setStats(result.data.lifetime.all);
      // console.log(stats)

      //   }  catch(e) {
      // console.log(e)
      //   }
    };

    fetchData();
  }, []);

  //   if (isLoading) return "Loading...";

  //   if (error) return "An error has occurred: " + error.message;
  //   console.log(stats)
  const classes = useStyles();
  return (
    <>
      {stats ? (
        <>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs>
              <PlayerCard stats={stats} />
            </Grid>
            <Grid item xs>
              <PlayerCard stats={stats} />
            </Grid>
            <Grid item xs>
              <PlayerCard stats={stats} />
            </Grid>
            <Grid item xs>
              <PlayerCard stats={stats} />
            </Grid>
          </Grid>
        </>
      ) : (
        <p className={classes.title}>No data</p>
      )}
    </>
  );
};

export default Main;
