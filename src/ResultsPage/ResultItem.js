import React, { Component } from 'react'

export default class ResultItem extends Component {
    render() {
        const {
            id,
            common_name,
            scientific_name,
            year,
            family_common_name,
            image_url,
            family,
            handleFavorite
        } = this.props

        return (
            <div className='plant' onClick={() => handleFavorite(id)}>
                <p className="name">{common_name}</p>
                <p className="latin">{scientific_name}</p>
                {image_url
                    && <img className='image' src={image_url} alt="plant"/>
                }
                <p className="stats">Named in {year}</p>
                <p className="stats">{family_common_name} ({family})</p>
            </div>
        )
    }
}
