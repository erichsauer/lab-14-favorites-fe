import React, { Component } from 'react'
import ResultItem from './ResultItem'

export default class ResultsList extends Component {
    render() {
        const plants = this.props.plants.map(
            ({
                common_name,
                scientific_name,
                year,
                family_common_name,
                image_url,
                genus,
                family,
                id
            }) => {
                return <ResultItem
                    handleFavorite={this.props.handleFavorite}
                    common_name={common_name}
                    scientific_name={scientific_name}
                    year={year}
                    family_common_name={family_common_name}
                    image_url={image_url}
                    genus={genus}
                    family={family}
                    id={id}
                />
            })
        return (
            <div className='plants'>
                {plants}
            </div>
        )
    }
}
