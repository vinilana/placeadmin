import React, { PureComponent } from 'react'

import { withFirebase } from '../../../../highOrderComponents/Firebase'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class ProductForm extends PureComponent {
  state = {
    name: null,
    price: null,
    amount: null,
    unit: null
  }

  handleChange = (type, event) => {
    this.setState({
      [type]: event.target.value
    })
  }

  handleValidateFields = () => {
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
    let isValidFields = this.handleValidateFields()

    if(isValidFields) {
      this.props.firebase.doAddDocumentToCollection('products', data)
        .then(() => {
          this.props.history.push('/products')
        })
        .catch(error => {
          this.setState({
            error: error.message
          })
        })
    } else {
      this.setState({
        error: 'Campos inválidos'
      })
    }
  }

  render() {
    return (
      <div>
        Formulário de produto

        <form noValidate>

          <TextField
            id="name"
            label="Nome"
            margin="normal"
            variant="outlined"
            onChange={(e) => this.handleChange('name', e)}
          />

          <TextField
            id="price"
            label="Preço"
            margin="normal"
            variant="outlined"
            onChange={(e) => this.handleChange('price', e)}
          />

          <TextField
            id="amount"
            label="Quantidade"
            margin="normal"
            variant="outlined"
            onChange={(e) => this.handleChange('amount', e)}
          />

          <TextField
            id="unit"
            label="Unidade de medida"
            margin="normal"
            variant="outlined"
            onChange={(e) => this.handleChange('unit', e)}
          />

          <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
            Cadastrar produto
          </Button>
        </form>
      </div>
    )
  }
}

export default withFirebase(ProductForm)
