import React, { useState, useEffect } from 'react';
// import * as React from "react"
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import axios from 'axios';

// const queryCache = new QueryCache();

const Main = () => {
    
    const [stats, setStats] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        let name = 'MCH_MrMangou';
        // setUser(user)
        // console.log(user)
    let plat = 'psn';
        let url = `https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/${name}/${plat}`;
    const headers = {
        "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    };
        const fetchData = async () => {
          try{
            const result = await axios
            .get(url, {
              headers: headers,
            })
            setStats(result.data.lifetime.all);
            // console.log(stats)

          }  catch(e) {
            console.log(e)
          }
        };
     
        fetchData();
      }, []);

        
        //   if (isLoading) return "Loading...";

        //   if (error) return "An error has occurred: " + error.message;
      console.log(stats)

      return (
        <>
      {stats ? 
        <>
        <h1>MCH_MrMangou</h1>
        <p>{}</p>
        <strong>Kills: {stats.properties.kills}</strong>{" "}<br />
        <strong>Assists: {stats.properties.assists}</strong>{" "}<br />
        <strong>Best Killstreak: {stats.properties.bestKillStreak}</strong><br />
        <strong>Deaths: {stats.properties.deaths}</strong><br />
        <strong>Headshots: {stats.properties.headshots}</strong><br />
        <strong>KD Ratio: {stats.properties.kdRatio}</strong><br />
        <strong>Suicides: {stats.properties.suicides}</strong><br />
        <strong>Total Games: {stats.properties.totalGamesPlayed}</strong><br />
        <strong>Wins: {stats.properties.wins}</strong><br />
        <strong>Losses: {stats.properties.losses}</strong><br />
  </>
    
      : null}  
      </>  
      
      );
}

export default Main;