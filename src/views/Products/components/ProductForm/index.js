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
    error: null
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

  handleSubmit = () => {
    let {
      name,
      price,
      amount,
      unit
    } = this.state

    let data = {
      name,
      price,
      amount,
      unit
    }
    let isValidFields = this.handleValidateFields(data)

    if(isValidFields) {
      this.productsRef.add(data)
        .then(() => {
          this.props.history.push('/products')
        })
        .catch(error => {
          this.setState({
            error: error.message
          })
        })

      this.props.onCreate()
    }
  }

  handleInitialState = (productId) => {
    let query = this.productsRef.where('uid', '==', productId).limit(1)
    query.get()
      .then((documentSnapshots) => {
        console.log(documentSnapshots, 'documentSnapshots')
      })
  }

  componentDidMount() {
    let { productId } = this.props

    if(productId) {
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
