<template>
  <div class="home">
    <BaseHeader :headerData="headerData" />
    <ScheduleList :tracks="data.tracks"/>
    <div class="text-center mb-5 d-flex flex-column">
      <p>Síguenos en</p>
      <div>
        <a class="twitch-icon mb-3" href="https://www.twitch.tv/osweekends">
          <font-awesome-icon :icon="['fab', 'twitch']" size="5x" />
        </a>
      </div>
      <a class="twitch-link" href="https://www.twitch.tv/osweekends">
        twitch.tv/osweekends
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
