import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import AuthPage from './AuthPage/AuthPage'
import HomePage from './HomePage/HomePage'
import ResultsPage from './ResultsPage/ResultsPage'
import PrivateRoute from './AuthPage/PrivateRoute'

import { getToken, setToken } from './AuthPage/auth-utils'

export default class App extends Component {
  state = { token: getToken() }

  handleToken = (token) => {
    this.setState({ token })
    setToken(token)
  }

  render() {
    console.log(this.state);
    const { token } = this.state
      return (
        <div className='App'>
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) =>
                  <HomePage {...routerProps}
                    token={token}
                  />}
              />
              <Route
                path="/auth"
                exact
                render={(routerProps) =>
                  <AuthPage {...routerProps}
                    handleToken={this.handleToken}
                  />}
              />
              <PrivateRoute
                path="/search"
                token={token}
                exact
                render={(routerProps) =>
                  <ResultsPage
                    logOut={this.handleToken}
                    {...routerProps}
                  />}
                />
              <PrivateRoute
                path="/faves"
                token={token}
                exact
                render={(routerProps) =>
                  <ResultsPage
                    logOut={this.handleToken}
                    {...routerProps}
                  />}
                />
            </Switch>
          </Router>
        </div>
      )
    }
}
  