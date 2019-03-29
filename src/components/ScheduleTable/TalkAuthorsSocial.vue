<template>
  <ul class="list-inline">
    <li v-for="(item, i) in social" class="list-inline-item" :key="i">
      <a :href="item" class="ico-link" :class="`ico-${i}`">
        <font-awesome-icon :icon="getIcon(i)" />
      </a>
    </li>
  </ul>
</template>

<script>
const socialIco = {
  twitch: ['fab', 'twitch'],
  github: ['fab', 'github'],
  twitter: ['fab', 'twitter-square'],
  youtube: ['fab', 'youtube-square'],
  facebook: ['fab', 'facebook-square'],
  linkedin: ['fab', 'linkedin'],
  instagram: ['fab', 'instagram'],
  meetup: ['fab', 'meetup'],
  url: 'link'
}

export default {
  name: 'AuthorsSocial',
  props: {
    social: {
      type: Object
    }
  },
  methods: {
    getIcon (val) {
      return socialIco[val]
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
  &.ico-meetup
    color #f63f60
  &.ico-linkedin
    color #0282bd
  &.ico-instagram
    color #cc3c9a
  &.ico-youtube
    color #ff0400

</style>
