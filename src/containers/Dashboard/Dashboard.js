import React, { PureComponent } from 'react'
import Drawer from '../../components/Drawer'
import Navbar from '../../components/Navbar'

import './index.scss'

class Dashboard extends PureComponent {
  render() {
    return (
      <div className={'dashboard'}>
        <div className={'dashboard__panelbar'}>
          <Navbar />
        </div>
        <div className={'dashboard__sidebar'}>
          <Drawer />
        </div>
        <div className={'dashboard__container'}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Dashboard
