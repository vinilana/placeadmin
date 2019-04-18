import React, { Component, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Containers
const App = React.lazy(() => import('../containers/App'))

//Views
const Home   = React.lazy(() => import('./Home'))
const Orders = React.lazy(() => import('./Orders'))
const SignIn = React.lazy(() => import('./SignIn'))
const SignUp = React.lazy(() => import('./SignUp'))

const NoMatch = () => {
  return (
    <div>
      Página não encontrada
    </div>
  )
}

class Views extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <App>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/orders" component={Orders}/>
              <Route path="/signin" component={SignIn}/>
              <Route path="/signup" component={SignUp}/>
              <Route component={NoMatch}/>
            </Switch>
          </BrowserRouter>
        </App>
      </Suspense>
    )
  }
}

export default Views