import React, { Component } from 'react'
import Navbar from '../../components/Navbar'

import { AuthUserContext } from '../../highOrderComponents/Session'

import './index.scss'

class App extends Component {
  render(){
    return (
      <div>
        <AuthUserContext.Consumer>
          {authUser => authUser && <Navbar />}
        </AuthUserContext.Consumer>

        {this.props.children}
      </div>
    )
  }
}

export default App