import React, { Component } from 'react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Containers
import { Dashboard } from '../Dashboard'

//High Order Components
import { AuthUserContext } from '../../highOrderComponents/Session'

//Assets
import './index.scss'

const theme = createMuiTheme()

class App extends Component {
  render(){
    return (
      <MuiThemeProvider theme={theme}>
        <AuthUserContext.Consumer>
          {authUser => authUser && <Dashboard {...this.props} />}
        </AuthUserContext.Consumer>
      </MuiThemeProvider>
    )
  }
}

export default App
