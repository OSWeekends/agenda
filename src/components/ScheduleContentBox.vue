<template>
  <b-col>
    <div class="content-box bg-white rounded-lg shadow-sm">
      <div v-if="content.description && content.speakers">
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
      <template>
        <SpeakersInfo :speakers="content.speakers"/>
      </template>
      </div>

      <div v-else class="text-center">
        <header>
          <h4 class="font-weight-bold">{{ content.title }}</h4>
        </header>
      </div>
    </div>
  </b-col>
</template>
<script>
import SpeakersInfo from '@/components/SpeakersInfo'

export default {
  name: 'ScheduleContentBox',
  components: { SpeakersInfo },
  props: {
    content: {}
  }
}
</script>
<style lang="stylus" scoped>
.content-box
  padding 40px
</style>
