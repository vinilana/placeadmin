import React from 'react';
import PropTypes from 'prop-types';

import { SidenavInstance } from './Sidenav'

import './index.scss'

class SideMenu extends React.Component {
  render() {
    return (
      <div className={'side-menu__container'}>
        <SidenavInstance />
      </div>
    );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default SideMenu
