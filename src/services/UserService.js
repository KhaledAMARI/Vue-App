import axios from 'axios'
const serverUrl = 'http://localhost:3000/api/'

export default {
  async userHome () {
    return await axios({
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'get',
      url: `${serverUrl}v1/users`
    })
  }
}
