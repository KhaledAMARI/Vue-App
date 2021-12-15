import UserService from '../../services/UserService'
export default {
  data () {
    return {
      user: ''
    }
  },
  async mounted () {
    const response = await UserService.userHome()
    this.user = response.data
  }
}
