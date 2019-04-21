import React, { Component } from 'react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

//Components
import Navbar from '../../components/Navbar'

//High Order Components
import { AuthUserContext } from '../../highOrderComponents/Session'

//Assets
import './index.scss'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
})

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