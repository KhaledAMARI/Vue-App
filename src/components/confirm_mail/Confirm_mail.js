import router from '../../router/index.js'
import AuthService from '../../services/AuthService'
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
  },
  methods: {
    async getTokenMessage () {
      const response = await MessageService.getMessage(localStorage.getItem('token'))
      return response.data.message
    },
    async confirmUser () {
      const isValidToken = (this.message.code === this.code) && ((new Date(this.message.expiresIn)).getTime() >= (new Date()).getTime())
      if (isValidToken) {
        await AuthService.confirmUserMail()
        router.push('/login')
      } else {
        alert('Invalid or expired Token')
      }
    }
  }
}
