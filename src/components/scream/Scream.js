import React, { Component } from 'react';
import { withStyles, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import  relativeTime  from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import MyButton from '../../util/MyButton';
import ChatIcon from '@material-ui/icons/Chat';
import DeleteScream from './DeleteScream';
import ScreamDialog from './ScreamDialog';
import LikeButton from './LikeButton';

const styles = {
  card: {
    display: 'flex',
    marginBottom:20,
    position: 'relative'
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: 'cover'
  }
}

class Scream extends Component {
  render() {
    dayjs.extend(relativeTime);
    const { classes, 
      scream: { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount},
      user: { authenticated, credentials: { handle } }
    } = this.props;
    
    const deleteButton = authenticated && userHandle === handle ? (
      <DeleteScream screamId={screamId} />
    ) : null
    return (
      <Card className={classes.card}>
        <CardMedia image={userImage ? userImage : ''} title="Profile Image" className={classes.image}/>
        <CardContent className={classes.content}>
          <Typography variant="h5" component={Link} to={`/users/${userHandle}`} color="primary">{userHandle}</Typography>
          {deleteButton}
          <Typography variant="body2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
          <Typography variant="body1">{body}</Typography>
          <LikeButton screamId={screamId} />
          <span>{likeCount} Likes</span>
          <MyButton tip="comments">
            <ChatIcon color="primary"/>
          </MyButton>
          <span>{commentCount} comments</span>
          <ScreamDialog screamId={screamId} userHandle={userHandle}/> 
        </CardContent>
      </Card>
    );
  }
}

Scream.propTypes = {
  user: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(withStyles(styles)(Scream));