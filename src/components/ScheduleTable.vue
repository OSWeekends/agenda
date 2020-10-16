<template>
  <div class="mb-5">
    <div v-for="(content, idx) in track.content" :key="`content-${idx}`">
      <b-row>
        <!-- TIME LINE (1ST COL) -->
        <b-col cols="auto">
          <div class="time-line d-flex mt-2 py-2">
            <div class="start-time font-weight-bold mr-1">
              {{content.startTime.h}}:{{content.startTime.m}}
            </div>
            <div>
              <div class="time-line__circle"></div>
              <div class="time-line__line mx-auto my-2"></div>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="content-box bg-white rounded-lg px-5 py-4 mt-2 mb-3 shadow-sm">
            <!-- Charla -->
            <div>
              <header>
                <h4>{{ content.title }}</h4>
              </header>
              <div class="content-description">
                <p v-for="(desc, index) in content.description" class="mt-0 mb-1" :key="`description-${index}`">
                  {{ desc }}
                </p>
              </div>
            </div>
            <!-- Speakers -->
            <template v-if="content.speakers">
              <SpeakersInfo :speakers="content.speakers"/>
            </template>
          </div>
        </b-col>
      </b-row>
    </div>
    <pre> {{ track.content[0] }} </pre>
    <!-- <b-table :items="track.content" :fields="fields" outlined hover> -->
      <!-- Columna Hora -->
      <!-- <template v-slot:cell(startTime)="data">
        <ScheduleTableColTime :data="data"/>
      </template> -->

      <!-- Columna Contenido -->
      <!-- <template v-slot:cell(title)="data">
        <TalkTitle :title="data.item.title" />
        <TalkDescription v-if="data.item.description" :data="data.item.description" />
        <TalkTags v-if="data.item.tags" :tags="data.item.tags" />
        <TalkAuthors v-if="data.item.authors" :data="data.item.authors" />
      </template>

    </b-table> -->
  </div>
</template>

<script>
// import ScheduleTableColTime from './ScheduleTableColTime'
// import TalkTitle from './ScheduleTable/TalkTitle'
// import TalkDescription from './ScheduleTable/TalkDescription'
// import TalkTags from './ScheduleTable/TalkTags'
// import TalkAuthors from './ScheduleTable/TalkAuthors'

import SpeakersInfo from '@/components/SpeakersInfo'

export default {
  name: 'ScheduleTable',
  components: {
    SpeakersInfo
    // ScheduleTableColTime,
    // TalkTitle,
    // TalkDescription,
    // TalkTags,
    // TalkAuthors
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
  }
}
</script>

<style lang="stylus">
.time-line
  position relative
  width 70px

  .start-time
    color #003DA5

  &__circle
    position relative
    top 4px
    width 14px
    height 14px
    background blue
    border-radius 50%
    border 3.5px solid #C7D4EB

  &__line
    width 4px
    height 100%
    background-color #E1EAFC
    border-radius 2px

.content-description > p
  color #8C8D95
</style>
