import React, { Component } from 'react'

import { FirebaseContext } from '../../containers/Firebase'

class Home extends Component {
  render() {
    return (
      <FirebaseContext.Consumer>
        {firebase => (
          <div>
            Home
          </div>
        )}
      </FirebaseContext.Consumer>
    )
  }
}

export default Home