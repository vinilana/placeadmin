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
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/iqt4-cJExWE"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
          </Box.body>
        </Box>
      </Dashboard>
    )
  }
}

export default HomePage
