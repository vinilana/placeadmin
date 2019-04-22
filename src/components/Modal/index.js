import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import './index.scss'

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends Component {

  handleClose = () => {
    this.props.onClose()
  }

  handleCreate = () => {
    this.props.onCreate()
  }

  render() {
    const { classes, open, title, callToAction } = this.props

    return (
      <Dialog
        fullScreen
        open={open}
        onClose={this.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              {title}
            </Typography>
            <Button color="inherit" onClick={this.handleCreate}>
              {callToAction}
            </Button>
          </Toolbar>
        </AppBar>
        <div className={'modal__children'}>
          {this.props.children}
        </div>
      </Dialog>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

FullScreenDialog.defaultProps = {
  onClose: () => {},
  onCreate: () => {},
  open: false,
  title: '',
  callToAction: 'Salvar'
}

export default withStyles(styles)(FullScreenDialog);