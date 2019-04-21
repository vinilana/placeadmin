import React, { Component, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//constants
import ROUTES from '../constants/routes'

//High Order Components
import { withAuthentication } from '../highOrderComponents/Session'

//Containers
import App from '../containers/App'

import Products from './Products'
//Views
const Home   = React.lazy(() => import('./Home'))
//const Products = React.lazy(() => import('./Products'))
const Orders = React.lazy(() => import('./Orders'))
const SignIn = React.lazy(() => import('./SignIn'))
const SignUp = React.lazy(() => import('./SignUp'))
const ResetPassword = React.lazy(() => import('./ResetPassword'))

const NoMatch = () => {
  return (
    <div>
      Página não encontrada ou você não tem permissões para vê-la
    </div>
  )
}

class Views extends Component {
  render() {
    console.log(this.props)
    return (
      <App>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home}/>
            <Route path={ROUTES.PRODUCTS} component={Products}/>
            <Route path={ROUTES.ORDERS} component={Orders}/>
            <Route path={ROUTES.SIGN_UP} component={SignUp}/>
            <Route path={ROUTES.SIGN_IN} component={SignIn}/>
            <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
            <Route component={NoMatch}/>
          </Switch>
        </Suspense>
      </App>
    )
  }
}

export default withAuthentication(Views)