<template>
  <div class="text-center mb-5" id="TwitchIsLive">
    <div v-if="isLive && !isVisible" class="mb-5 mb-sm-2">
      <a href="#TwitchIsLive" class="text-decoration-none" title="¡OSWeekends está emitiendo!">
        <div class="p-5 d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <div class="mx-5 mt-5 mt-sm-0">
            <div class="my-3 scroll-loader d-flex justify-content-center align-items-center"/>
          </div>
        </div>
      </a>
    </div>
    <div v-if="eventType === 'Online'">
      <div>
        <p v-if="isLive">¡Estamos en vivo!</p>
        <p v-else>Síguenos en</p>
        <a class="link mb-3" href="https://www.twitch.tv/osweekends">
          <div class="icon d-flex justify-content-center align-items-center mb-3" ref="target">
              <div v-if="isLive" class="my-3 loader main-loader d-flex justify-content-center align-items-center"/>
              <font-awesome-icon :icon="['fab', 'twitch']" size="5x"/>
            </div>
          <span class="address">twitch.tv/osweekends</span>
        </a>
      </div>
    </div>

    <div v-else>
      <a class="link mb-3"
         href="https://www.google.com/search?sxsrf=ALeKk01W0wUmU-ubU9z2pfgRFZY50MntHw:1602887276901&q=google+campus&npsic=0&rflfq=1&rlha=0&rllag=40412472,-3718242,10&tbm=lcl&ved=2ahUKEwigpYS2lLrsAhWPA2MBHf6JCucQtgN6BAgGEAc&rldoc=1#rlfi=hd:;si:18186252069890377247,l,Cg1nb29nbGUgY2FtcHVzIgOIAQFaHgoNZ29vZ2xlIGNhbXB1cyINZ29vZ2xlIGNhbXB1cw;mv:[[40.4382547,-3.6678058],[40.4109177,-3.7211292]]">
        <div class="icon bg-white rounded-circle d-flex justify-content-center align-items-center mb-3">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" size="5x"/>
        </div>
        <span class="address">C. de Moreno Nieto, 2, 28005 Madrid</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeetupLink',
  props: {
    eventType: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isLive: true,
      isVisible: false
    }
  },
  created () {
    this.fetchIsLive()
  },
  mounted () {
    // Root ref - from app.vue
    const rootElement = this.$refs.root
    const targetElement = this.$refs.target
    const callback = (entries) => {
      const [target] = entries
      if (target.isIntersecting) {
        this.isVisible = true
      } else {
        this.isVisible = false
      }
    }
    const observer = new IntersectionObserver(callback, { root: rootElement })
    observer.observe(targetElement)
  },
  methods: {
    fetchIsLive () {
      const twitchApiUrl = 'https://api.twitch.tv/helix/search/channels?query=osweekends'
      fetch(twitchApiUrl, {
        method: 'get',
        headers: new Headers({
          Authorization: `Bearer ${process.env.VUE_APP_TW_ACCESS_TOKEN}`,
          'Client-ID': process.env.VUE_APP_TW_CLIENT_ID
        })
      })
        .then(function (response) {
          return response.json()
        })
        .then((data) => {
          this.isLive = data.data[0].is_live
        })
    }
  }
}
</script>

<style lang="stylus">
main-blue = #003DA5
circle-color = #772ce8

.link
  display inline-block
  position relative

  .icon
    color var(--color-text)
    width 200px
    height 200px
    margin auto

  .address
    color var(--color-text)
    font-size 24px
    font-weight bolder
    text-decoration none

  &:hover
    color var(--color-main)
    text-decoration none
 // TODO Revisar
.icon
  background var(--color-background-light) !important

.loader {
  animation pulse 2s infinite ease-out
  z-index -10
  position absolute
}

.loader::before {
  content ""
  position absolute
  width 110px
  height 110px
  border 0.25em solid circle-color
  border-radius 50%
  animation ripple1 2s infinite ease-out
}

.loader::after {
  content ""
  position absolute
  width 160px
  height 160px
  border 0.25em solid circle-color
  border-radius 50%
  opacity 0
  animation ripple2 2s infinite ease-out
}

.scroll-loader {
  position fixed
  right 70px
  bottom 40px
  width 10px
  height 10px
  background circle-color
  border-radius 50%
  animation pulse 2s infinite ease-out
}

.scroll-loader::before {
  content ""
  position absolute
  right -2px
  bottom -2px
  width 15px
  height 15px
  border 0.11em solid circle-color
  border-radius 50%
  animation ripple1 2s infinite ease-out
}

@keyframes pulse {
  0% {
    transform scale(1)
    opacity 0
  }
  15% {
    transform scale(1.3)
    opacity 1
  }
  80%, 100% {
    opacity 0
  }
}

@keyframes ripple1 {
  0%, 10% {
    opacity 0
  }
  80% {
    transform scale(2)
    opacity 1
  }
}

@keyframes ripple2 {
  0%, 25% {
    opacity 0
  }
  80% {
    transform scale(2)
    opacity 1
  }
}

</style>
