import React, { PureComponent } from 'react'

import { withRouter } from 'react-router-dom'
import { withFirebase } from '../../../../highOrderComponents/Firebase'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class SignInForm extends PureComponent {
  state = {
    email: null,
    error: null,
    password: null,
    passwordConfirm: null
  }

  handleChange = (type, event) => {
    this.setState({
      [type]: event.target.value
    })
  }

  handleValidateFields = (email, password, passwordConfirm) => {

    let isPasswordValid = (password !== null && password !== '' && password === passwordConfirm)
    let isEmailValid = (email !== null && email !== '')

    return (isPasswordValid && isEmailValid)
  }

  handleSubmit = () => {
    let { email, password, passwordConfirm } = this.state

    let isValidFields = this.handleValidateFields(email, password, passwordConfirm)

    if(isValidFields) {
      this.props.firebase.doCreateUserWithEmailAndPassword(email, password)
        .then(() => {
          this.props.history.push('/signin')
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
      <form noValidate>
        {this.state.error && this.state.error}

        <TextField
          id="email"
          label="Email"
          margin="normal"
          variant="outlined"
          onChange={(e) => this.handleChange('email', e)}
        />

        <TextField
          id="password"
          label="Senha"
          type='password'
          placeholder="*****"
          margin="normal"
          variant="outlined"
          onChange={(e) => this.handleChange('password', e)}
        />

        <TextField
          id="password"
          label="Confirmar Senha"
          type='password'
          placeholder="*****"
          margin="normal"
          variant="outlined"
          onChange={(e) => this.handleChange('passwordConfirm', e)}
        />

        <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
          Sign Up
        </Button>
      </form>
    )
  }
}

export default withFirebase(withRouter(SignInForm))