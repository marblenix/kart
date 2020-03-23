<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <Config></Config>
        </b-col>
        <b-col>
          <Items></Items>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Config from './components/Config.vue'
import Items from './components/Items.vue'

export default {
  name: 'App',
  components: {
    Config,
    Items
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
