<template>
  <div id="app">
    <span>{{msg}}</span>
    <p class="test">test text</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'Welcome!'
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  color: red;
  font-size: 20px;
}
</style>
