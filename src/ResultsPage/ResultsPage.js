import React, { Component } from 'react'
import ResultsList from './ResultsList'
import { postFavorite, searchPlants, getFavorites, noDupes } from './api-utils'

export default class ResultsPage extends Component {
    state = {
        plants: [],
        search: '',
        favorites: []
    }

    componentDidMount = async () => {
        const favorites = await getFavorites(this.props.token)
        favorites.length > 0
            && this.setState({ favorites })
        this.props.history.location.pathname === '/faves'
            && this.setState({ plants: favorites })
    }

    handleSearch = e =>
        this.setState({ search: e.target.value })
    
    handleSubmit = async e => {
        e.preventDefault()
        const plants = await searchPlants(this.state.search, this.props.token)
        this.setState({ plants })
    }

    handleFavorite = async (id) => {
        const plant = this.state.plants.find(plant => plant.id === id)
        noDupes(this.state.favorites, plant)
        && await postFavorite(plant, this.props.token)
        this.setState({favorites: true})
    }

    displayFavorites = async (id) => {
        const plants = await getFavorites(this.props.token)
        await this.setState({ plants })
        this.props.history.push('/faves')
    }

    logOut = () => {
        this.props.logOut('')
        this.props.history.push('/')
    }

    render() {
        const { search, favorites } = this.state
        return (
            <main>
                <form
                    onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder='search for a plant!'
                        onChange={this.handleSearch}
                        value={search}
                    />
                </form>
                <div>
                    {favorites.length > 0
                        && this.props.history.location.pathname === '/search'
                        && <button onClick={this.displayFavorites}>
                        View Favorites
                        </button>}
                    {this.props.history.location.pathname === '/faves'
                        && <button onClick={this.backToSearch}>
                        Back To Search
                        </button>}
                    <button onClick={this.logOut}>Log Out</button>
                </div>
                <ResultsList
                    plants={this.state.plants}
                    handleFavorite={this.handleFavorite}
                />
            </main>
        )
    }
}
