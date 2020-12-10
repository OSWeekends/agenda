<template>
  <div class="text-center mb-5">
    <div v-if="eventType === 'Online'">
      <p>Síguenos en</p>
      <a class="link mb-3" href="https://www.twitch.tv/osweekends">
        <div class="icon rounded-circle d-flex justify-content-center align-items-center mb-3">
          <font-awesome-icon :icon="['fab', 'twitch']" size="5x"/>
        </div>
        <span class="address">twitch.tv/osweekends</span>
      </a>
    </div>

    <div v-else>
      <a class="link mb-3"
         href="https://www.google.com/search?sxsrf=ALeKk01W0wUmU-ubU9z2pfgRFZY50MntHw:1602887276901&q=google+campus&npsic=0&rflfq=1&rlha=0&rllag=40412472,-3718242,10&tbm=lcl&ved=2ahUKEwigpYS2lLrsAhWPA2MBHf6JCucQtgN6BAgGEAc&rldoc=1#rlfi=hd:;si:18186252069890377247,l,Cg1nb29nbGUgY2FtcHVzIgOIAQFaHgoNZ29vZ2xlIGNhbXB1cyINZ29vZ2xlIGNhbXB1cw;mv:[[40.4382547,-3.6678058],[40.4109177,-3.7211292]]">
        <div class="icon rounded-circle d-flex justify-content-center align-items-center mb-3">
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
  }
}
</script>

<style lang="stylus">
.link
  display inline-block

  .icon
    color var(--color-icon)
    width 200px
    height 200px
    margin auto

  .address
    color var(--color-icon)
    font-size 24px
    font-weight bolder
    text-decoration none

  &:hover
    color var(--color-main)
    text-decoration none

.icon
  background var(--color-background-light) !important
</style>
