import AuthService from '../../services/AuthService.js'
import router from '../../router/index.js'

export default {
  data () {
    return {
      showPassword: false,
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const user = {
        email: this.email,
        password: this.password
      }
      try {
        const response = await AuthService.login(user)
        await this.$store.dispatch('setLoginToken', response.data.loginToken)
        router.push('/dashboard')
      } catch (error) {
        alert(error)
      }
    }
  }
}
