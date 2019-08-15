import React, { PureComponent } from 'react'
import Drawer from '../../components/SideMenu'
import TopBar from '../../components/TopBar'

// HOC
import { withFirebase } from '../../highOrderComponents/Firebase'

import './index.scss'

class Dashboard extends PureComponent {

  render() {

    const currentUser = this.props.firebase.auth.currentUser
    const doSignOut = this.props.firebase.doSignOut

    return (
      <div className={'dashboard'}>
        <div className={'dashboard__sidebar'}>
          <Drawer />
        </div>

        <div className={'dashboard__container'}>
          <div className={'dashboard__panelbar'}>
            <TopBar user={currentUser}  doSignOut={doSignOut} />
          </div>

          <div className={`dashboard__container__canvas`}>
            {this.props.children}
          </div>

        </div>
      </div>
    )
  }
}

export default withFirebase(Dashboard)
