import React, { PureComponent } from 'react'

import { withFirebase } from '../../../../highOrderComponents/Firebase'

import TextField from '@material-ui/core/TextField'
import Modal from "../../../../components/Modal";

class ProductForm extends PureComponent {
  state = {
    name: '',
    price: '',
    amount: '',
    unit: '',
    error: null,
    productId: null
  }

  productsRef =  this.props.firebase.doGetReferenceOfDocumentsFromCollection('products')

  handleChange = (type, value) => {
    this.setState({
      [type]: value
    })
  }

  handleValidateFields = (data) => {
    if(data.name === '' || data.name === null) {
      this.handleChange('error', 'Preencha o campo nome')
      return false
    }

    if(data.price === '' || data.price === null){
      this.handleChange('error', 'Preencha o campo preço')
      return false
    }

    if(data.amount === '' || data.amount === null){
      this.handleChange('error', 'Preencha o campo quantidade')
      return false
    }

    if(data.unit === '' || data.unit === null){
      this.handleChange('error', 'Preencha o campo unidade de medida')
      return false
    }

    return true
  }

  handleRedirectToProductsPage = () => {
    this.props.onCreate()
  }

  handleUpdateDoc = (productId, data) => {
    let { name, price, amount, unit } = data

    this.productsRef.doc(productId).set({
      name,
      price,
      amount,
      unit
    }).then(() => {
      this.handleRedirectToProductsPage()
    })
  }

  handleCreateDoc = (data) => {
    this.productsRef.add(data)
      .then(() => {
        this.handleRedirectToProductsPage()
      })
      .catch(error => {
        this.setState({
          error: error.message
        })
      })
  }

  handleSubmit = () => {
    let {
      name,
      price,
      amount,
      unit,
      productId
    } = this.state

    let data = {
      name,
      price,
      amount,
      unit
    }

    let isValidFields = this.handleValidateFields(data)

    if(isValidFields) {
      if(productId !== null) {
        this.handleUpdateDoc(productId, data)
      } else {
        this.handleCreateDoc(data)
      }
    }
  }

  handleResetFields = async () => {
    this.setState({
      name: '',
      price: '',
      amount: '',
      unit: '',
      productId: null,
    })
  }

  handleInitialState = (productId) => {
    this.productsRef.doc(productId).get()
      .then((doc) => {
        let { name, price, amount, unit } = doc.data()

        this.setState({
          name,
          price,
          amount,
          unit,
          productId
        })
      })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.productId !== this.props.productId) {
      let productId = this.props.productId

      this.handleResetFields()

      if(productId !== null && typeof productId === 'string') {
        this.handleInitialState(productId)
      }

      this.setState({
        productId
      })
    }
  }

  componentDidMount() {
    this.handleResetFields()

    let { productId } = this.props

    if(productId !== null && typeof productId === 'string') {
      this.handleInitialState(productId)
    }
  }

  render() {
    let {
      name,
      price,
      amount,
      unit,
      error
    } = this.state

    let { show } = this.props

    return (
      <Modal
        open={show}
        title={'Cadastrar novo produto'}
        onCreate={this.handleSubmit}
        onClose={this.props.onClose}>

        <form noValidate>
          {error}

          <TextField
            id="name"
            label="Nome"
            margin="normal"
            variant="outlined"
            value={name}
            onChange={(e) => this.handleChange('name', e.target.value)}
          />

          <TextField
            id="price"
            label="Preço"
            margin="normal"
            variant="outlined"
            value={price}
            onChange={(e) => this.handleChange('price', e.target.value)}
          />

          <TextField
            id="amount"
            label="Quantidade"
            margin="normal"
            variant="outlined"
            value={amount}
            onChange={(e) => this.handleChange('amount', e.target.value)}
          />

          <TextField
            id="unit"
            label="Unidade de medida"
            margin="normal"
            variant="outlined"
            value={unit}
            onChange={(e) => this.handleChange('unit', e.target.value)}
          />
        </form>
      </Modal>
    )
  }
}

export default withFirebase(ProductForm)
