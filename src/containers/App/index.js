import React, { Component } from 'react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Components
import Navbar from '../../components/Navbar'

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
          {authUser => authUser && <Navbar />}
        </AuthUserContext.Consumer>

        {this.props.children}
      </MuiThemeProvider>
    )
  }
}

export default App