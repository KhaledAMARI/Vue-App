import router from '../../router'

export default {
  data () {
    return {
      showPassword: false
    }
  },
  methods: {
    goToLogin () {
      router.push('/login')
    }
  }
}
