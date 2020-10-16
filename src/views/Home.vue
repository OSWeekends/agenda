<template>
  <div class="home">
    <BaseHeader :headerData="headerData" />
    <ScheduleList :tracks="data.tracks"/>
    <div class="text-center mb-5 d-flex flex-column">
      <p  v-if="data.eventType === 'Online'">Síguenos en</p>
      <div>
        <a v-if="data.eventType === 'Online'" class="twitch-icon mb-3" href="https://www.twitch.tv/osweekends">
          <font-awesome-icon :icon="['fab', 'twitch']" size="5x" />
        </a>
        <a  v-else class="twitch-icon mb-3" href="https://www.google.com/search?sxsrf=ALeKk01W0wUmU-ubU9z2pfgRFZY50MntHw:1602887276901&q=google+campus&npsic=0&rflfq=1&rlha=0&rllag=40412472,-3718242,10&tbm=lcl&ved=2ahUKEwigpYS2lLrsAhWPA2MBHf6JCucQtgN6BAgGEAc&rldoc=1#rlfi=hd:;si:18186252069890377247,l,Cg1nb29nbGUgY2FtcHVzIgOIAQFaHgoNZ29vZ2xlIGNhbXB1cyINZ29vZ2xlIGNhbXB1cw;mv:[[40.4382547,-3.6678058],[40.4109177,-3.7211292]]">
          <font-awesome-icon :icon="['fab', 'twitch']" size="5x" />
        </a>
      </div>
      <a v-if="data.eventType === 'Online'" class="twitch-link" href="https://www.twitch.tv/osweekends">
        twitch.tv/osweekends
      </a>
      <a  v-else class="twitch-link" href="https://www.google.com/search?sxsrf=ALeKk01W0wUmU-ubU9z2pfgRFZY50MntHw:1602887276901&q=google+campus&npsic=0&rflfq=1&rlha=0&rllag=40412472,-3718242,10&tbm=lcl&ved=2ahUKEwigpYS2lLrsAhWPA2MBHf6JCucQtgN6BAgGEAc&rldoc=1#rlfi=hd:;si:18186252069890377247,l,Cg1nb29nbGUgY2FtcHVzIgOIAQFaHgoNZ29vZ2xlIGNhbXB1cyINZ29vZ2xlIGNhbXB1cw;mv:[[40.4382547,-3.6678058],[40.4109177,-3.7211292]]">
        C. de Moreno Nieto, 2, 28005 Madrid
      </a>
    </div>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import ScheduleList from '@/components/ScheduleList.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import data from '@/data/index'

export default {
  name: 'home',
  components: {
    BaseHeader,
    ScheduleList,
    BaseFooter
  },
  data () {
    return {
      data
    }
  },
  computed: {
    headerData () {
      const { title, eventType, date, meetupLink, description, eventLink } = data
      return {
        title,
        eventType,
        date,
        meetupLink,
        description,
        eventLink
      }
    }
  }
}
</script>

<style lang="stylus">
.twitch-icon
  color #3F414E
  background-color white
  padding 35px 40px
  border-radius 50%
  align-items center
  display inline-block
.twitch-link
  color #3F414E
  font-size 24px
  font-weight bolder
  text-decoration none
</style>
