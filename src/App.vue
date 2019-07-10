<template>
  <div id="app">
    <app-header />
    <div class="brain" @mouseover.stop="changeSelected">
      <app-left-brain class="left-brain" @mouseover.stop="changeSelected">
        <app-column
          class="columns"
          v-for="cols in 16"
          v-bind:key="cols"
          @mouseover.stop="changeSelected"
        >
          <app-cell
            v-on:mouseover="changeSelected"
            v-for="cells in 3"
            v-bind:key="cells"
            :class="['s' + cols, { cooperate: left }, { compete: right }]"
          ></app-cell>
        </app-column>
      </app-left-brain>
      <app-right-brain class="right-brain">
        <app-column v-for="cols in 16" v-bind:key="cols">
          <app-cell
            v-on:mouseover="changeSelected"
            v-for="cells in 3"
            v-bind:key="cells"
            :class="['s' + cols, { cooperate: left }, { compete: right }]"
          ></app-cell>
        </app-column>
      </app-right-brain>
    </div>
    <p>{{ server }} row {{ row }} col {{ col }} {{ brain }}</p>
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
  data: function() {
    return {
      left: false,
      right: false,
      props: ['cols'],
      brain: 'collaborate',
      row: 0,
      col: 0,
      server: 'dev server',
      online: true,
      deal: false,
      hovered: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      x: 0,
      y: 0,
      color: '#6aa84f',
      colors: [
        '#111',
        '#222',
        '#333',
        '#444',
        '#555',
        '#666',
        '#777',
        '#888',
        '#999'
      ],
      selected: false,
      hoverColor: '#yellow',
      status: 'Critical'
    }
  },
  components: {
    'app-header': Header,
    'app-left-brain': LeftBrain,
    'app-right-brain': RightBrain,
    'app-column': Column,
    'app-cell': Cell,
    'app-footer': Footer
  },
  created() {
    this.$store.dispatch('tryAutoLogin')
  },
  methods: {
    changeStatus() {
      this.status = 'Normal'
    },
    changeSelected(event) {
      this.x = event.clientX
      this.y = event.clientY
      this.selected = !this.selected
      let dx = 12 * 16 - this.x
      if (dx > 0) {
        this.left = true
        this.right = false
        this.brain = 'collaborate'
      } else {
        this.left = false
        this.right = true
        this.brain = 'innovate'
      }
      let dy = this.y - 56
      let mdx = Math.ceil(dx / 12)
      this.col = -mdx
      let mdy = Math.ceil(dy / 12)
      this.row = mdy
      this.row === 2
        ? (this.server = 'bank cortex')
        : this.row === 1
        ? (this.server = 'jobs cortex')
        : (this.server = 'skills cortex')
      if (mdx >= 0) {
        this.deal = !this.deal
        this.srv = mdx
        this.hovered[mdx] = true
      }
    },
    hoverStyle() {
      return {
        backgroundColor: this.color
      }
    }
  }
}
</script>

<style>
body,
html {
  position: relative;
  min-height: 100vh;
  margin-bottom: 56px;
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

#app {
  padding-bottom: 84px;
}

p {
  text-align: center;
}

.brain {
  display: flex;
  flex-flow: row;
  overflow: hidden;
  justify-content: center;
}

.left-brain {
  background-color: transparent;
}

.right-brain {
  background-color: transparent;
}

.columns {
  background-color: transparent;
}

.server {
  background-color: transparent;
}

.cell {
  background-color: rgba(88, 88, 88, 0.5);
}

.online {
  background-color: green;
}

.r50 {
  background-color: rgba(128, 0, 0, 0.5);
}

.g50 {
  background-color: rgba(0, 128, 0, 0.5);
}

.b50 {
  background-color: rgba(0, 0, 128, 0.5);
}

.cooperate {
  background-color: rgba(100, 200, 100, 0.5);
}

.compete {
  background-color: rgba(200, 100, 100, 0.5);
}

.interest {
  border: 1px solid #ccc;
}

/* .outer {
  background-color: rgba(200, 100, 100, 0.5);
}

.inner {
  background-color: rgba(100, 200, 100, 0.5);
} */

.s0 {
  background-color: green;
}
.s1 {
  background-color: teal;
}
.s2 {
  background-color: greenyellow;
}
.s3 {
  background-color: beige;
}
.s4 {
  background-color: rebeccapurple;
}
.s5 {
  background-color: salmon;
}
.s6 {
  background-color: navajowhite;
}
.s7 {
  background-color: yellow;
}
.s8 {
  background-color: cadetblue;
}
.s9 {
  background-color: chocolate;
}
.s10 {
  background-color: violet;
}
.s11 {
  background-color: sienna;
}
.s12 {
  background-color: skyblue;
}
.s13 {
  background-color: brown;
}
.s14 {
  background-color: darkgoldenrod;
}
.s15 {
  background-color: darkolivegreen;
}
</style>
