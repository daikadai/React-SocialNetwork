import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import LinkIcon from '@material-ui/icons/Link';
import MuiLink from '@material-ui/icons/Link';
import { withStyles, Paper, Typography } from '@material-ui/core';
import { CalendarToday, LocationOn } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const styles = (theme) => ({
  ...theme.spreadThis
})
const StaticProfile = (props) => {
  const { classes, profile: { handle, createdAt, imageUrl, bio, website, location }} = props;
  return (
    <Paper className={classes.paper}>
        <div className={classes.profile}>
          <div className="image-wrapper">
            <img src={imageUrl} alt="profile" className="profile-image"/>
          </div>
          <hr/>
          <div className="profile-details">
            <MuiLink component={Link} to={`/users/${handle}`} color="primary" variant="h5">
              @{handle}
            </MuiLink>
            <hr/>
            {bio && <Typography variant="body2">{bio}</Typography>}
            <hr/>
            {location && (
              <Fragment>
                <LocationOn color="primary"/> <span>{location}</span>
              <hr/>
              </Fragment>
            )}
            {website && (
              <Fragment>
                <LinkIcon color="primary"/>
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {' '}{website}
                </a>
                <hr/>
              </Fragment>
            )}
            <CalendarToday color="primary" />{' '}
            <span>
              Joined {dayjs(createdAt).format('MMM YYYY')}
            </span>
          </div>
        </div>
      </Paper>
  )
}

StaticProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(StaticProfile)
