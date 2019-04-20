import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import ProductForm from './components/ProductForm'
import ProductsList from './components/ProductsList'

class Products extends Component {

  state = {
    productId: null,
    showProductForm: false
  }

  handleChange = (type, value) => {
    this.setState({
      [type]: value
    })
  }

  handleEditProduct = (id) => {
    this.handleChange('productId', id)
  }

  handleShowProductForm = () => {
    this.handleChange('showProductForm', !this.state.showProductForm)
  }

  render() {
    let { productId, showProductForm } = this.state

    return (
      <div>
        Products
        <button onClick={this.handleShowProductForm}>
          Cadastrar novo Produto {showProductForm}
        </button>

        <ProductsList
          onEdit={this.handleEditProduct}
        />

        <ProductForm
          productId={productId}
          show={showProductForm}
          onCreate={this.handleShowProductForm}
          onClose={this.handleShowProductForm} />
      </div>
    )
  }
}

export default withRouter(Products)