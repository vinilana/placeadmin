import React, { PureComponent } from 'react'

import { withFirebase } from '../../../../highOrderComponents/Firebase'

class ProductsList extends PureComponent {

  productsRef = this.props.firebase.doGetReferenceOfDocumentsFromCollection('products')

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

    this.listener = this.productsRef.orderBy("name").limit(3).onSnapshot(querySnapshot => {
      this.handleMountList(querySnapshot)
    })

    this.productsRef.orderBy("name").limit(3).get()
      .then((querySnapshot) => {
        this.handleMountList(querySnapshot)
      })
  }

  componentWillUnmount() {
    this.productsRef.onSnapshot(function () {});
    this.listener = null
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
