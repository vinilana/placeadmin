import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Button from '@material-ui/core/Button'

import ProductForm from './components/ProductForm'
import ProductsList from './components/ProductsList'

import './index.scss'

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

  handleShowProductForm = () => {
    this.handleChange('showProductForm', !this.state.showProductForm)
  }

  handleCreateNewProduct = () => {
    this.handleChange('productId', null)
    this.handleShowProductForm()
  }

  handleEditProduct = (id) => {
    this.handleChange('productId', id)
    this.handleShowProductForm()
  }

  render() {
    let { productId, showProductForm } = this.state

    return (
      <div className={'products-page__content'}>
        <div className={'products-page__button--create-product'}>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleCreateNewProduct}>
            Cadastrar novo Produto
          </Button>
        </div>

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