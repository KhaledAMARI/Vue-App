import router from '../../router'
import UserService from '../../services/UserService'

export default {
  data () {
    return {
      showPassword: false,
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async registerUser () {
      const newUSer = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      await UserService.register(newUSer)
      router.push('/login')
    }
  }
}
