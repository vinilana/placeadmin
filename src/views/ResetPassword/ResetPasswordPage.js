import React, { PureComponent } from 'react'

import { withRouter } from 'react-router-dom'
import { withFirebase } from '../../highOrderComponents/Firebase'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class ResetPasswordPage extends PureComponent {
  state = {
    email: null,
    error: null
  }

  handleChange = (type, event) => {
    this.setState({
      [type]: event.target.value
    })
  }

  handleValidateFields = (email) => {

    let isEmailValid = (email !== null && email !== '')

    return isEmailValid
  }

  handleSubmit = () => {
    let { email } = this.state

    let isValidFields = this.handleValidateFields(email)

    if(isValidFields) {
      this.props.firebase.doPasswordReset(email)
        .then(() => {
          this.props.history.push('/reset-password/done')
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

        <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
          Trocar senha
        </Button>
      </form>
    )
  }
}

export default withFirebase(withRouter(ResetPasswordPage))