<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=Open+Sans:wght@400;600;700&display=swap');
twitch-loader = #772ce8

:root
  --color-blue #003da5
  --color-blue-dark #0c2251
  --color-white #ffffff
  --color-main: var(--color-blue)
  --color-secondary #4875c0
  --color-border #e1eafc
  --color-background #f9fafc
  --color-background-highlight #f1f6ff
  --color-background-shadow #f4f4f4
  --color-background-light var(--color-white)
  --color-text #212529
  --color-text-light #66676f
  --color-text-secondary #3f414e
  --color-text-action #4c77c0
  --color-icon #c4c4c4
  --color-twitch-loader twitch-loader

[data-theme="dark"]
  --color-main #f4f4f4
  --color-secondary #4875C0
  --color-border #052154
  --color-background #000E2D
  --color-background-highlight #052154
  --color-background-shadow #0c2a73
  --color-background-light #021740
  --color-text #c4c4c4
  --color-text-light #66676f
  --color-text-secondary #c4c4c4
  --color-text-action #4c77c0
  --color-icon #052154
  --color-twitch-loader lighten(twitch-loader, 30%)

html
  scroll-behavior: smooth

body
  margin 0
  background-color var(--color-background) !important
  color var(--color-text) !important

#app
   font-family 'Open Sans', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

</style>
