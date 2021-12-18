import axios from 'axios'
const serverUrl = 'http://localhost:3000/api/'

export default {
  async getMessage () {
    return await axios({
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'get',
      url: `${serverUrl}v1/messages`
    })
  },
  async createMessage (message) {
    return await axios({
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'post',
      url: `${serverUrl}v1/messages/new_message`,
      data: message
    })
  }
}
