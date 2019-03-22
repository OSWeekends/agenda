<template>
  <div>
    <template v-for="(auth, idx) in data" >
      <div :key="`auth_${idx}`">
        <h5>{{ auth.name }}</h5>
        <AuthorsSocial v-if="auth.social" :social="auth.social"/>
        <AuthorsBio v-if="auth.bio" :bio="auth.bio"/>
      </div>
    </template>
  </div>
</template>

<script>
import AuthorsSocial from './TalkAuthorsSocial'
import AuthorsBio from './TalkAuthorsBio'

export default {
  components: {
    AuthorsSocial,
    AuthorsBio
  },
  props: {
    data: {
      type: Array,
      reuired: true
    }
  }
}
</script>

<style lang="stylus">
.ico-link
  font-size 1.3rem
  color #aaa

  &.ico-twitter
    color #059ff6
  &.ico-twitch
    color #553d87
  &.ico-github
    color #272e33
  &.ico-facebook
    color #4b72bb
  &.ico-linkedin
    color #0282bd
  &.ico-instagram
    color #cc3c9a
  &.ico-youtube
    color #ff0400

</style>
