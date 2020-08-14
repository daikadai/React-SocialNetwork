import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Paper } from '@material-ui/core'
import NoImg from '../images/no-img.png';
import { LocationOn, CalendarToday } from '@material-ui/icons';
import LinkIcon from '@material-ui/icons/Link'

const styles = theme => ({
  ...theme.spreadThis,
  handle: {
    height: 20,
    backgroundColor: theme.palette.primary.main,
    width: 60,
    margin: '0 auto 7px auto',
  },
  fullLine: {
    height: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    marginBottom: 10,
  },
  halfLine: {
    height: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '50%',
    marginBottom: 10,
  }
})

const ProfileSkeleton = (props) => {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img src={NoImg} alt="profile" className="profile-image"/>
        </div>
        <hr/>
        <div className="profile-details">
          <div className={classes.handle}></div>
          <hr/>
          <div className={classes.fullLine}></div>
          <div className={classes.fullLine}></div>
          <hr/>
          <LocationOn color="primary"  /> <span>Location</span>
          <hr/>
          <LinkIcon color="primary" /> https://website.com
          <hr/>
          <CalendarToday color="primary" /> Joined date
        </div>
      </div>
    </Paper>
  )
}

ProfileSkeleton.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProfileSkeleton);
