import React, { Component } from 'react'
import { Dashboard } from '../../containers/Templates'

class HomePage extends Component {
  render() {
    return (
      <Dashboard>
        Olá {this.props.authUser && this.props.authUser.email}
      </Dashboard>
    )
  }
}

export default HomePage
