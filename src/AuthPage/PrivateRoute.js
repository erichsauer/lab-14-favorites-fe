import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ render: Component, ...rest }) => {
    return (
      // this route will only render if a token is present 
    <Route
      {...rest}
      render={props => (rest.token ? <Component {...props} {...rest} /> : <Redirect to="/" />)}
    />
  )
}

export default PrivateRoute