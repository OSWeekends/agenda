<template>
  <b-col>
    <div class="content-box bg-white rounded-lg shadow-sm">
      <!-- Charla -->
      <div>
        <header>
          <h4 class="font-weight-bold">{{ content.title }}</h4>
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
      <CBadge v-for="(tag, index) in content.tags" :key="`description-${index}`" class="mr-2 ml-md-2">{{ tag }}</CBadge>
    </div>
  </b-col>
</template>
<script>
import SpeakersInfo from '@/components/SpeakersInfo'
import CBadge from '@/components/CustomBadge'

export default {
  name: 'ScheduleContentBox',
  components: { SpeakersInfo, CBadge },
  props: {
    content: {}
  }
}
</script>
<style lang="stylus" scoped>
.content-box
  padding 40px
</style>
