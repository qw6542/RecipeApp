/* eslint-disable */
export default function (Vue) {
  let authenticatedUser = {}
  let header = {}
  Vue.auth = {
    setToken: (token, expiration) => {
      localStorage.setItem('token', token)
      localStorage.setItem('expiration', expiration)
    },
    getToken () {
      let token = localStorage.getItem('token')
      let expiration = localStorage.getItem('expiration')

      if (!token || !expiration) {
        return null
      }
      if (Date.now() > parseInt(expiration)) {
        this.destroy()
        return null
      } else {
        return token
      }
    },
    destroy () {
      localStorage.removeItem('token')
      localStorage.removeItem('expiration')
    },
    isAuthenticated () {
      if (this.getToken()) {
        return true
      } else {
        return false
      }
    },
    setAuthenticatedUser (data) {
      authenticatedUser = data

    },
    getAuthenticatedUser () {
      return authenticatedUser
    },
    setHeader() {
      header= {
        headers: {
          'Authorization': 'Bearer ' + this.getToken(),
          'Accept': 'application/json'}
      }
    },
    getHeader () {
      return header
    }
  }

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => {
        return Vue.auth
      }
    }
  })
}
