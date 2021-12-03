// import router from '../../router'
import UserService from '../../services/UserService'

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
      const response = await UserService.register(newUSer)
      localStorage.setItem('token', response.data.token)
      // router.push('/login')
    }
  }
}
