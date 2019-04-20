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
      list.push({...doc.data(), id: doc.id})
    })

    this.setState({
      list
    })
  }

  componentDidMount() {
    this.listener = this.productsRef.orderBy("name").limit(3).onSnapshot(querySnapshot => {
      this.handleMountList(querySnapshot)
    })

    this.productsRef.orderBy("name").limit(100).get()
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
        {this.state.list && this.state.list.map((item, key) => {
          return (
            <li key={key}>
              {item.name} <button onClick={this.props.onEdit()}> Editar </button>
            </li>
          )
        })}
      </ul>
    )
  }

}

export default withFirebase(ProductsList)
