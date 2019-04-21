import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class SwipeableTemporaryDrawer extends React.Component {

  handleShow = () => {
    this.props.onShow()
  }

  handleHide = () => {
    this.props.onHide()
  }

  render() {
    let { show } = this.props

    return (
      <SwipeableDrawer
        open={show}
        onClose={this.handleHide}
        onOpen={this.handleShow}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={this.handleHide}
          onKeyDown={this.handleHide}
        >
          <List>
            <ListItem button>
              <Link to={'/'}>
                <ListItemText primary={'Início'} />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to={'/products'}>
                <ListItemText primary={'Produtos'} />
              </Link>
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SwipeableTemporaryDrawer)