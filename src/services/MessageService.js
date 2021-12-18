import axios from 'axios'
const serverUrl = 'http://localhost:3000/api/'

export default {
  async getMessage (email) {
    return await axios({
      method: 'post',
      url: `${serverUrl}v1/messages`,
      data: { email }
    })
  },
  async createMessage (message) {
    return await axios({
      method: 'post',
      url: `${serverUrl}v1/messages/new_message`,
      data: message
    })
  }
}
