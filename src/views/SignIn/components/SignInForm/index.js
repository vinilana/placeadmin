import React, { PureComponent } from 'react'

import { withRouter } from 'react-router-dom'
import { withFirebase } from '../../../../highOrderComponents/Firebase'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class SignInForm extends PureComponent {
  state = {
    email: null,
    password: null
  }

  handleChange = (type, event) => {
    this.setState({
      [type]: event.target.value
    })
  }

  handleSubmit = () => {
    let { email, password } = this.state

    this.props.firebase.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.history.push('/')
      })
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
          SignIn
        </Button>
      </form>
    )
  }
}

export default withFirebase(withRouter(SignInForm))