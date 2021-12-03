import router from '../router'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    goToHome () {
      router.push('/')
    },
    goToRegister () {
      router.push('/register')
    },
    goToLogin () {
      router.push('/login')
    },
    goToAbout () {
      router.push('/about')
    }
  }
}
