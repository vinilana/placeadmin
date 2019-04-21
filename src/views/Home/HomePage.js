import React, { Component } from 'react'

class HomePage extends Component {
  render() {
    return (
      <div>
        Olá {this.props.authUser && this.props.authUser.email}
      </div>
    )
  }
}

export default HomePage