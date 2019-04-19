import React from 'react'

import { AuthUserContext } from '.'

export const withAuthenticatedRoute = Component => props => (
  <AuthUserContext.Consumer>
    {authUser =>  <Component {...props} authUser={authUser} />}
  </AuthUserContext.Consumer>
)

export default withAuthenticatedRoute