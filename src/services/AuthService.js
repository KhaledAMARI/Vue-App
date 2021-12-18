import axios from 'axios'
const serverUrl = 'http://localhost:3000/api/'

export default {
  async register (newUser) {
    return await axios({
      method: 'post',
      url: `${serverUrl}v1/auth/register`,
      data: newUser
    })
  },
  async login (user) {
    return await axios({
      method: 'post',
      url: `${serverUrl}v1/auth/login`,
      data: user
    })
  },
  async confirmUserMail (email) {
    return await axios({
      method: 'post',
      url: `${serverUrl}v1/auth/confirm_email`,
      data: { email: email }
    })
  }
}
