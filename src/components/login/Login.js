import UserService from '../../services/UserService.js'
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
      const response = await UserService.login(user)
      await this.$store.dispatch('setLoginToken', response.data.loginToken)
      router.push('/dashboard')
    }
  }
}
