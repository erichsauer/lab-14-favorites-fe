import React, { Component } from 'react'
import { getNewUserToken, getLoginToken } from './auth-utils'

export default class AuthPage extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    setErrorOrPassToken = result => {
        result.includes('oops...')
            ? this.setState({ error: result })
            : this.props.handleToken(result)
            && this.props.history.push('/search')
    }

    handleEmail = e => this.setState({ email: e.target.value })

    handlePassword = e => this.setState({ password: e.target.value })

    handleSigUp = async e => {
        const { email, password } = this.state
        e.preventDefault()
        const result = await getNewUserToken(email, password)

        this.setErrorOrPassToken(result)
    }

    handleLogin = async e => {
        const { email, password } = this.state
        e.preventDefault()
        const result = await getLoginToken(email, password)

        this.setErrorOrPassToken(result)
    }

    render() {
        const { email, password, error } = this.state
        return (
            <main>
                <span className="error">
                    {error}
                </span>
                <form>
                    <input
                        value={email}
                        onChange={this.handleEmail}
                        placeholder='email'
                        type='email'
                    />
                    <input
                        value={password}
                        onChange={this.handlePassword}
                        placeholder='password'
                        type='password'
                    />
                    <button
                        onClick={this.handleSigUp}
                    >
                        Sign Up
                    </button>
                    <button
                        onClick={this.handleLogin}
                    >
                        Log In
                    </button>
                </form>
            </main>
        )
    }
}
