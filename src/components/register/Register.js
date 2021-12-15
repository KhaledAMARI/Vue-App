import router from '../../router'
import UserService from '../../services/UserService'
import MessageService from '../../services/MessageService'

export default {
  data () {
    return {
      showPassword: false,
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async registerUser () {
      const newUSer = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      try {
        const registerResponse = await UserService.register(newUSer)
        await this.$store.dispatch('setConfirmationToken', registerResponse.data.confirmation_Token)
        await this.$store.dispatch('setRegistredUserEmail', newUSer.email)
        await MessageService.addMessage({
          email: newUSer.email,
          code: this.$store.getters.getConfirmationToken,
          delay: 30
        })
        router.push('/confirm_mail')
      } catch ({ error }) {
        throw error
      }
    }
  }
}
