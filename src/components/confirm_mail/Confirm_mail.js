import router from '../../router/index.js'
import UserService from '../../services/UserService'
import MessageService from '../../services/MessageService'

export default {
  data () {
    return {
      code: '',
      message: {}
    }
  },
  watch: {
    message: function (val) {
      this.message = val
    }
  },
  async created () {
    this.message = await this.getTokenMessage()
    console.log(typeof this.message.expiresIn)
  },
  methods: {
    async getTokenMessage () {
      const response = await MessageService.getMessage(this.$store.getters.getRegistredUserEmail)
      return response.data.message
    },
    async confirmUser () {
      const isValidToken = (this.message.code === this.code) && ((new Date(this.message.expiresIn)).getTime() >= (new Date()).getTime())
      if (isValidToken) {
        await this.$store.dispatch('setConfirmationToken', null)
        await UserService.confirmUserMail(this.$store.getters.getRegistredUserEmail)
        await this.$store.dispatch('setRegistredUserEmail', null)
        router.push('/login')
      } else {
        alert('Invalid or expired Token')
      }
    }
  }
}
