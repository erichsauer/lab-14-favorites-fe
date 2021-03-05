import React, { Component } from 'react'
import logo from '../logo.svg';
import '../App.css';

import { NavLink } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <main>
                <img src={logo} className="App-logo" alt="logo" />
                <NavLink to="/auth">
                    Login/Sign Up
                </NavLink>
            </main>
        )
    }
}
