import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 50,
    maxWidth: 350,
    backgroundColor: theme.palette.primary.main,
    marginTop: '20px',
    marginLeft: '10px'
  },
  title: {
    // fontSize: 14,
    color: theme.palette.text.main
  },
  pos: {
    marginBottom: 12
  }
}));

function PlayerCard({ stats }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" className={classes.title} gutterBottom>
          MCH_MrMangou
        </Typography>
        <Typography variant="h6" className={classes.title} gutterBottom>
          Kills: {stats.properties.kills}
        </Typography>
        <Typography variant="h6" className={classes.title} gutterBottom>
          Assists: {stats.properties.assists}
        </Typography>
        <Typography variant="h6" className={classes.title} gutterBottom>
          Best Killstreak: {stats.properties.bestKillStreak}
        </Typography>
        <Typography variant="h6" className={classes.title} gutterBottom>
          Deaths: {stats.properties.deaths}
        </Typography>
        <Typography variant="h6" className={classes.title} gutterBottom>
          Headshots: {stats.properties.headshots}
        </Typography>
        <Typography variant="h6" className={classes.title} gutterBottom>
          KD Ratio: {stats.properties.kdRatio}
        </Typography>
        <Typography variant="h6" className={classes.title} gutterBottom>
          Suicides: {stats.properties.suicides}
        </Typography>
        <Typography variant="h6" className={classes.title} gutterBottom>
          Total Games: {stats.properties.totalGamesPlayed}
        </Typography>
        <Typography variant="h6" className={classes.title} gutterBottom>
          Wins: {stats.properties.wins}
        </Typography>
        <Typography variant="h6" className={classes.title} gutterBottom>
          Losses: {stats.properties.losses}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

PlayerCard.propTypes = {
  stats: PropTypes.object
};

export default PlayerCard;
