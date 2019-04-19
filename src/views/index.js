import React, { Component, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//constants
import Routes from '../contants/routes'

//High Order Components
import { withAuthentication } from '../highOrderComponents/Session'

//Containers
import App from '../containers/App'

//Views
const Home   = React.lazy(() => import('./Home'))
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
          <BrowserRouter>
            <Switch>
              <Route exact path={Routes.HOME} component={Home}/>
              <Route path={Routes.ORDERS} component={Orders}/>
              <Route path={Routes.SIGN_UP} component={SignUp}/>
              <Route path={Routes.SIGN_IN} component={SignIn}/>
              <Route path={Routes.RESET_PASSWORD} component={ResetPassword} />
              <Route component={NoMatch}/>
            </Switch>
          </BrowserRouter>
        </Suspense>
      </App>
    )
  }
}

export default withAuthentication(Views)