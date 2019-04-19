import React, { PureComponent } from 'react'

import { withFirebase } from '../../../../highOrderComponents/Firebase'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class SignInForm extends PureComponent {
  state = {
    email: null,
    password: null
  }

  handleChange = (type, event) => {
    console.log(event)
    this.setState({
      [type]: event.target.value
    })
  }

  handleSubmit = () => {
    let { email, password } = this.state

    this.props.firebase.doCreateUserWithEmailAndPassword(email, password)
  }

  render() {
    return (
      <form noValidate>
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

        <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
          Cadastrar
        </Button>
      </form>
    )
  }
}

export default withFirebase(SignInForm)