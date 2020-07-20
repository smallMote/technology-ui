<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TeButton>Button</TeButton>
  </div>
</template>

<script>
import TeButton from './components/Button'

export default {
  name: 'App',
  components: {
    TeButton
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
