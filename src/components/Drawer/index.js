import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

import './index.scss'

class Sidebar extends React.Component {
  render() {
    return (
      <div className={'drawer__container'}>
        <ul className={'drawer__container__list'}>
          <Link to={'/'}>
            <li className={'drawer__container__list__item'}>
                Início
            </li>
          </Link>
          <Link to={'/products'}>
            <li className={'drawer__container__list__item'}>
                Produtos
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default Sidebar
