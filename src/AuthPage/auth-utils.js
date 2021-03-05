import request from 'superagent'

const URL = 'https://lab-14-favorites-be.herokuapp.com'
const USER = 'USER'

export async function getNewUserToken(email, password) {
    try {
        const user = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })
        return user.body.token
    } catch (e) {
        return `oops...${e.response.body.error}`
    }
}

export async function getLoginToken(email, password) {
    try {
        const user = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })
        return user.body.token
    } catch (e) {
        return `oops...${e.response.body.error}`
    }
}

export function setToken(token) {
    token
        ? localStorage.setItem(USER, JSON.stringify(token))
        : localStorage.setItem(USER, '')
}

export function getToken() {
    if (localStorage.getItem(USER))
        return JSON.parse(localStorage.getItem(USER))
    return ''
}
