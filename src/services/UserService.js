import axios from 'axios'
export default {
  async register (newUser) {
    return await axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/users/register',
      data: newUser
    })
  }
}
