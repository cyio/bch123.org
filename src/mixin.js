import MobileDetect from 'mobile-detect'
let md = new MobileDetect(window.navigator.userAgent)
export default {
  methods: {
    debug (msg) {
      console.log('debug', msg)
    },
    go (path) {
      this.$router.push(path)
    },
    goBack () {
      this.$router.go(-1)
    },
    goHome() {
      window.location.assign(window.location.origin)
    }
  },
  computed: {
    isMobile () {
      return md.mobile()
    },
    isSupportWebShare () {
      return md.is('AndroidOS') && md.version('Chrome') >= 61
    }
  }
}
