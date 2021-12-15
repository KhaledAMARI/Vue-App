import axios from 'axios'
const serverUrl = 'http://localhost:3000/api/'

export default {
  async register (newUser) {
    return await axios({
      method: 'post',
      url: `${serverUrl}v1/users/register`,
      data: newUser
    })
  },
  async login (user, token) {
    return await axios({
      method: 'post',
      url: `${serverUrl}v1/users/login`,
      data: user
    })
  },
  async userHome () {
    return await axios({
      headers: {
        authorization: `Bearer ${this.$store.getters.getConfirmationToken}}`
      },
      method: 'get',
      url: `${serverUrl}v1/users`
    })
  },
  async confirmUserMail (email) {
    console.log(email)
    return await axios({
      method: 'post',
      url: `${serverUrl}v1/users/confirm_email`,
      data: { email: email }
    })
  }
}
