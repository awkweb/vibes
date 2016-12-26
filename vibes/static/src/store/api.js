import axios from 'axios'

const BASE_URL = '/api/v1'

function get (endpoint) {
    const url = BASE_URL + endpoint
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
    })
}

function post (endpoint, data) {
    const url = BASE_URL + endpoint
    return new Promise((resolve, reject) => {
      axios.post(url, data)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
    })
}

export function postToken (email, password) {
    const data = {
        email: email,
        password: password
    }
    return post('/token/', data)
}
