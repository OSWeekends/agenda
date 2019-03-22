<template>
  <div class="mb-5">
    <b-table :items="track.content" :fields="fields" outlined hover>
      <template slot="startTime" slot-scope="data">
        <ScheduleTableColTime :data="data"/>
      </template>
      <template slot="title" slot-scope="data">
        <h4>
          <b-badge v-if="data.item.type" :variant="badgeVariant(data.item.type)"> · </b-badge>
          {{ data.item.title }}
        </h4>

        <div v-if="data.item.description">
          <template v-for="(desc, idx) in data.item.description">
            <p class="lead" :key="`desc_${idx}`" >
              {{ desc }}
            </p>
          </template>
        </div>

        <div v-if="data.item.authors" >
          <template v-for="(auth, idx) in data.item.authors" >
            <div :key="`auth_${idx}`">
              <h5>
                {{ auth.name }}
              </h5>
              <p class="lead">
                {{ auth.bio }}
              </p>
              <p> {{ auth.social }}</p>
            </div>
          </template>
        </div>

      </template>
    </b-table>
  </div>
</template>

<script>
import ScheduleTableColTime from './ScheduleTableColTime'

const variants = [
  'primary',
  'success',
  'danger'
]

const social = {
  twitch: ['fab', 'twitch-square'],
  github: ['fab', 'github-square'],
  twitter: ['fab', 'twitter-square'],
  youtube: ['fab', 'youtube-square'],
  facebook: ['fab', 'facebook-square'],
  linkedin: ['fab', 'linkedin-square']
}

export default {
  name: 'ScheduleTable',
  components: {
    ScheduleTableColTime
  },
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      fields: [
        {
          key: 'startTime',
          label: 'Hora',
          class: 'time-column'
        },
        {
          key: 'title',
          label: this.track.name
        }
      ]
    }
  },
  methods: {
    badgeVariant (type) {
      return variants[type - 1]
    },
    getIcon (val) {
      return social[val]
    }
  }
}
</script>

<style lang="stylus">
.time
  font-family monospace
  .time--h
    font-weight bold
    font-size 1.7rem

  .time--m
    font-size 1.3rem

  .colon
    position relative
    margin 0 1px
    font-size 1.1rem

.time-column
  width 96px
  background-color: #fafafa

</style>
