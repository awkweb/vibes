import axios from 'axios'

const BASE_URL = '/api/v1'

function get (endpoint) {
    return new Promise((resolve, reject) => {
      axios.get(endpoint)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
    })
}

function post (endpoint, data) {
    return new Promise((resolve, reject) => {
      axios.post(endpoint, data)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
    })
}

export function postToken (email, password) {
    const url = BASE_URL + '/token/'
    const data = {
        email: email,
        password: password
    }
    return post(url, data)
}
