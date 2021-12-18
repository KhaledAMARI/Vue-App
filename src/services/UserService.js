import axios from 'axios'
const serverUrl = 'http://localhost:3000/api/'

export default {
  async userHome (token) {
    return await axios({
      headers: {
        authorization: `Bearer ${token}`
      },
      method: 'get',
      url: `${serverUrl}v1/users`
    })
  }
}
