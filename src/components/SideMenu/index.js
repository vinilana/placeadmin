import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

import './index.scss'

class SideMenu extends React.Component {
  render() {
    return (
      <div className={'side-menu__container'}>
        <ul className={'side-menu__container__list'}>
          <Link to={'/'}>
            <li className={'side-menu__container__list__item'}>
                Início
            </li>
          </Link>
          <Link to={'/products'}>
            <li className={'side-menu__container__list__item'}>
                Produtos
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default SideMenu
