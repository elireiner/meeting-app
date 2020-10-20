import config from '../config'
//import TokenService from './token-service'

const UsersApiService = {
    getAllUsers() {
        return fetch(`${config.API_ENDPOINT}/users`, {
            headers: {
                'authorization': `Bearer ${config.API_KEY}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getUser(userId) {
        return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
            headers: {
                'authorization': `Bearer ${config.API_KEY}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    /*postUser(userData) {
      return fetch(`${config.API_ENDPOINT}/users`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${config.API_KEY}`,
        },
        body: JSON.stringify(userData),
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    }*/
}

export default UsersApiService
