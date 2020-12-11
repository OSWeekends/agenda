<template>
    <label class="switch">
        <input @click="setTheme" type="checkbox" :checked="checked">
        <span class="slider round"></span>
    </label>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ThemeSwitch',
  computed: {
    ...mapState({
      theme: state => state.theme.name }),
    checked () {
      console.log('What is the theme? ', this.theme)
      return this.theme === 'dark'
    }
  },
  methods: {
    setTheme () {
      console.log('theme ', this.theme)
      const newTheme = this.theme === 'light' ? 'dark' : 'light'
      console.log(newTheme)
      this.$store.dispatch('theme/setThemeName', newTheme)
    }
  }
}
</script>

<style lang="stylus">
.switch
  position: relative
  display: inline-block
  width: 42px
  height: 28px

  & input
    opacity: 0
    width: 0
    height: 0

.slider
  position: absolute
  cursor: pointer
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: var(--color-blue-dark)
  transition: all 350ms cubic-bezier(0.8, 1.49, 1, 1)
  border-radius: 20px

  &:before
    position: absolute
    content: ""
    height: 20px
    width: 20px
    left: 4px
    bottom: 4px
    background-color: var(--color-white)
    transition: all 350ms cubic-bezier(0.8, 1.49, 1, 1)
    border-radius: 50%

    input:checked + &
      transform: translateX(15px)

</style>
