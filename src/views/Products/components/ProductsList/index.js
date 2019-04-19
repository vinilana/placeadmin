import React, { PureComponent } from 'react'

import { withFirebase } from '../../../../highOrderComponents/Firebase'

class ProductsList extends PureComponent {

  state = {
    list: null
  }

  handleMountList = (querySnapshot) => {
    let list = []
    querySnapshot.forEach(function(doc) {
      console.log(doc.id, " => ", doc.data())
      list.push(doc.data())
    })

    this.setState({
      list
    })
  }

  componentDidMount() {
    this.listener = this.props.firebase.doInstanceOfDocumentsFromCollection('products')
      .onSnapshot(querySnapshot => {
        this.handleMountList(querySnapshot)
      })

    this.props.firebase.doLoadDocumentsFromCollection('products')
      .then((querySnapshot) => {
        this.handleMountList(querySnapshot)
      })
  }

  render() {
    return (
      <ul>
        {this.state.list && this.state.list.map((item, key) => (
          <li key={key}>
            {item.name}
          </li>
        ))}
      </ul>
    )
  }

}

export default withFirebase(ProductsList)
