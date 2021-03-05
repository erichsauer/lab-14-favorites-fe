import request from 'superagent'

const URL = 'https://lab-14-favorites-be.herokuapp.com/api'

export async function searchPlants(search, token) {
    const response = await request
        .get(URL + '/plants?search=' + search)
        .set('Authorization', token)
    return response.body;
}
    
export async function postFavorite(plant, token) {
    const response = await request
        .post(URL + '/faves')
        .set('Authorization', token)
        .send(plant)
    return response.body
}

export async function getFavorites(token) {
    const response = await request
        .get(URL + '/faves')
        .set('Authorization', token)
    return response.body
}
    
export function noDupes(favorites, plant) {
    favorites.find(({ id }) => id === plant.id)
}