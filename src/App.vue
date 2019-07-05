<template>
  <div id="app">
    <app-header />
    <div class="brain">
      <app-left-brain >
        <app-column v-for="cols in 48" v-bind:key="cols">
          <app-cell v-for="cells in 3" v-bind:key="cells"></app-cell>
        </app-column>
      </app-left-brain>
      <app-right-brain >
        <app-column v-for="cols in 48" v-bind:key="cols">
          <app-cell v-for="cells in 3" v-bind:key="cells"></app-cell>
        </app-column>
      </app-right-brain>
    </div>
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
import Header from './components/header/header.vue'
import LeftBrain from './components/brain/left-brain.vue'
import RightBrain from './components/brain/right-brain.vue'
import Column from './components/column/column.vue'
import Cell from './components/cell/cell.vue'
import Footer from './components/footer/footer.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-left-brain': LeftBrain,
    'app-right-brain': RightBrain,
    'app-column': Column,
    'app-cell': Cell,
    'app-footer': Footer
  },
  created () {
    this.$store.dispatch('tryAutoLogin')
  }
}
</script>

<style>
  body, html {
    position: relative;
    min-height: 100vh;
    margin-bottom: 56px;
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  #app {
    padding-bottom: 84px;
  }

  .brain {
    display: flex;
    flex-flow: row;
    overflow: hidden;
    justify-content: center;
  }
</style>
