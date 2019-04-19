import React, { Component, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//High Order Components
import { withAuthentication } from '../highOrderComponents/Session'

//Containers
import App from '../containers/App'

//Views
const Home   = React.lazy(() => import('./Home'))
const Orders = React.lazy(() => import('./Orders'))
const SignIn = React.lazy(() => import('./SignIn'))
const SignUp = React.lazy(() => import('./SignUp'))

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
              <Route exact path="/" component={Home}/>
              <Route path="/orders" component={Orders}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/signin" component={SignIn}/>
              <Route component={NoMatch}/>
            </Switch>
          </BrowserRouter>
        </Suspense>
      </App>
    )
  }
}

export default withAuthentication(Views)