import React, { Component } from 'react'
import { Dashboard } from '../../containers/Templates'

// Components
import { Box } from '../../components/Box'

class HomePage extends Component {
  render() {
    return (
      <Dashboard>
        <Box>
          <Box.body>
            Olá {this.props.authUser && this.props.authUser.email}
          </Box.body>
        </Box>
        <Box>
          <Box.body>
            Olá {this.props.authUser && this.props.authUser.email}
          </Box.body>
        </Box>
      </Dashboard>
    )
  }
}

export default HomePage
