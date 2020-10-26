<template>
  <div class="sponsors-section">
    <p>Patrocinado por:</p>
    <b-row class="sponsors">
      <b-col v-for="sponsor in sponsors" :key="sponsor.name">
        <a :href="sponsor.link" class="text-center">
          <img src="../assets/sponsors/spotify.svg" :alt="sponsor.name">
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
