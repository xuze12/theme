import EventEmitter from 'events'

// 'loggedIn' is used in other parts of application. So, Don't forget to change there also
const userlogin = 'islogged'
const loginExpiryKey = 'tokenExpiry'
const Userinfo = 'userinfo'

class Auth extends EventEmitter {
  localLogin(authResult) {
    this.tokenExpiry = new Date()
    localStorage.setItem(loginExpiryKey, this.tokenExpiry)
    localStorage.setItem('token', authResult.access_token)
    localStorage.setItem('userlogin', true)
    localStorage.setItem(Userinfo, JSON.stringify({
      displayName: authResult.nickName,
      email: authResult.email || '',
      photoURL: authResult.pic
    }))
    console.log('userlogin', localStorage.getItem('userlogin'))
  }

  Logout() {
    localStorage.removeItem(loginExpiryKey)
    localStorage.removeItem(userlogin)
    localStorage.removeItem(Userinfo)
    localStorage.removeItem('token')
    localStorage.removeItem('userlogin')
  }

  isAuthenticated() {
    return (
      new Date(Date.now()) !== new Date(localStorage.getItem(loginExpiryKey)) &&
      localStorage.getItem(userlogin) === 'true'
    )
  }
}

export default new Auth()
