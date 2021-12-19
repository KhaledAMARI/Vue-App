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
  async confirmUserMail () {
    return await axios({
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'post',
      url: `${serverUrl}v1/auth/confirm_email`
    })
  }
}
