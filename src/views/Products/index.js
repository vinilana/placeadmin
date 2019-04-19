import React, { Component } from 'react'

import ProductForm from './components/ProductForm'
import ProductsList from './components/ProductsList'

class Products extends Component {
  render() {
    return (
      <div>
        Products
        <ProductsList />
        <ProductForm />
      </div>
    )
  }
}

export default Products