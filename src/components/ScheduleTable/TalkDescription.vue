<template>
  <div>
    <p v-for="(desc, index) in data" class="lead" :key="index" >
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
