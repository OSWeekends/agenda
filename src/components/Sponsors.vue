<template>
  <div class="sponsors-section">
    <p>Evento patrocinado por:</p>
    <b-row class="sponsors">
      <b-col v-for="sponsor in sponsors" :key="sponsor.name">
        <a :href="sponsor.link" class="text-center">
          <img :src="require(`../assets/sponsors/${sponsor.img}`)" :alt="sponsor.name" width="200px">
        </a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Sponsors',
  props: {
    sponsors: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus">
.sponsors-section
  color #898B94

  .sponsors
    text-align center
    max-width 620px
    margin 50px auto 80px auto
</style>
