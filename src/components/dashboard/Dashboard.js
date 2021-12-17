import UserService from '../../services/UserService'
export default {
  data () {
    return {
      user: {}
    }
  },
  async created () {
    this.user = await this.getLoggedUserInfo()
  },
  methods: {
    async getLoggedUserInfo () {
      const response = await UserService.userHome(this.$store.getters.getLoginToken)
      return response.data.user
    }
  }
}
