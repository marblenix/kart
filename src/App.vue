<script>
import Config from './components/Config.vue';
import Items from './components/Items.vue';

export default {
  name: 'App',
  components: {
    Config,
    Items
  }
};
</script>

<template>
  <b-container id="app">
    <b-row>
      <b-col>
        <Config />
      </b-col>
      <b-col>
        <Items />
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 3.75em;
}
</style>
