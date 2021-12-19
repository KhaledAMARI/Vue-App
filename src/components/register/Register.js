import router from '../../router'
import AuthService from '../../services/AuthService'
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
    async registerUser (event) {
      const newUser = Object.fromEntries(new FormData(event.target))
      try {
        const registerResponse = await AuthService.register(newUser)
        localStorage.setItem('token', registerResponse.data.token)
        const confirmationToken = registerResponse.data.confirmation_Token
        await MessageService.createMessage({
          code: confirmationToken,
          delay: 30
        })
        router.push('/confirm_mail')
      } catch ({ error }) {
        throw error
      }
    }
  }
}
