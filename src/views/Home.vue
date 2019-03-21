<template>
  <div class="home">
    <BaseHeader :title="data.title"/>
    <BaseList></BaseList>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import BaseList from '@/components/BaseList.vue'
import data from '@/data/index'

export default {
  name: 'home',
  components: {
    BaseHeader,
    BaseList
  },
  data () {
    return {
      data
    }
  }
}
</script>
