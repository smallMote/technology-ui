<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="btn-group btn-type-group">
      <h1>Button Type Styles</h1>
      <TeButton>Button</TeButton>
      <TeButton type="primary">Button</TeButton>
      <TeButton type="danger">Button</TeButton>
      <TeButton type="warning">Button</TeButton>
      <TeButton type="success">Button</TeButton>
      <TeButton type="dark">Button</TeButton>
    </div>
    <div class="btn-group btn-size-group">
      <h1>Button Size Styles</h1>
      <TeButton size="lg">Button</TeButton>
      <TeButton>Button</TeButton>
      <TeButton size="sm">Button</TeButton>
      <TeButton size="xs">Button</TeButton>
    </div>
    <div class="btn-group btn-type-group">
      <h1>Button Circle Styles</h1>
      <TeButton circle size="lg">B</TeButton>
      <TeButton circle type="primary">B</TeButton>
      <TeButton circle size="sm" type="danger">B</TeButton>
      <TeButton circle size="xs" type="warning">B</TeButton>
    </div>
    <div class="btn-group btn-size-group">
      <h1>Button Disabled Styles</h1>
      <TeButton :disabled="true">Button</TeButton>
    </div>
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
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  margin-top: 60px;
}
.btn-group {
  margin-bottom: $space-base;
  /*display: flex;*/
  /*align-items: flex-end;*/
}
</style>
