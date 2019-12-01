<template>
  <ul class="list-inline">
    <li v-for="(item, i) in social" class="list-inline-item" :key="i" :title="item">
      <template v-if="isString(item)">
        <a :href="item" class="ico-link" :class="`ico-${i}`">
          <font-awesome-icon :icon="getIcon(i)" />
        </a>
      </template>
      <template v-else>
        <a v-for="(el, index) in item" :href="el" class="ico-link multiple" :class="`ico-${i}`" :key="index" :title="el">
          <font-awesome-icon :icon="getIcon(i)" />
        </a>
      </template>
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
  dev: ['fab', 'dev'],
  medium: ['fab', 'medium'],
  url: 'link',
  gamepad: 'gamepad'
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
    },
    isString (element) {
      return typeof element === 'string'
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
  &.ico-dev
    color #0a0a0a
  &.ico-medium
    color #2f2f2f
  &.ico-gamepad
    color orange

a.multiple:not(:last-child) {
  margin-right: 0.5rem;
}

</style>
