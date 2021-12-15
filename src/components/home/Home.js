export default {
  data () {
    return {
      state: {}
    }
  },
  mounted () {
    this.state = this.$store.getters.getState
  }
}
