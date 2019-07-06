<template>
  <div id="welcome">
    <h2>realtime bit &#162;oins</h2>
    <p>for fast & fair social progress</p>
    <div class="cta">
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Sign In</router-link>
    </div>
    <p>bank on your live social capital</p>
    <div id="wallet">realtime hour balance: {{ balance }} r&#162;</div>
    <div id="rate">realtime spend/save rate: {{ rate }} r&#162;/s</div>
    <h2>
      <span id="time" v-html="time"></span>
    </h2>
    <h2>live jobs demand</h2>
    <h2>matching</h2>
    <h2>realtime skills offer</h2>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      balance: 3600,
      rate: 1.0,
      state: 'started',
      startTime: Date.now(),
      currentTime: Date.now(),
      interval: null
    }
  },
  mounted: function() {
    this.interval = setInterval(this.updateCurrentTime, 1000)
  },
  destroyed: function() {
    clearInterval(this.interval)
  },
  computed: {
    time: function() {
      return this.hours + ':' + this.minutes + ':' + this.seconds
    },
    milliseconds: function() {
      return this.currentTime - this.$data.startTime
    },
    hours: function() {
      var lapsed = this.milliseconds
      var hrs = Math.floor(lapsed / 1000 / 60 / 60)
      return hrs >= 10 ? hrs : '0' + hrs
    },
    minutes: function() {
      var lapsed = this.milliseconds
      var min = Math.floor((lapsed / 1000 / 60) % 60)
      return min >= 10 ? min : '0' + min
    },
    seconds: function() {
      var lapsed = this.milliseconds
      var sec = Math.ceil((lapsed / 1000) % 60)
      return sec >= 10 ? sec : '0' + sec
    }
  },
  methods: {
    reset: function() {
      this.$data.state = 'started'
      this.$data.startTime = Date.now()
      this.$data.currentTime = Date.now()
    },
    pause: function() {
      this.$data.state = 'paused'
    },
    resume: function() {
      this.$data.state = 'started'
    },
    updateCurrentTime: function() {
      if (this.$data.state == 'started') {
        this.currentTime = Date.now()
      }
    }
  }
}
</script>

<style scoped>
div {
  margin: 0px;
}

#welcome {
  width: 100%;
  margin: auto;
}

h2 {
  text-align: center;
  margin-top: 12px;
}

p {
  text-align: center;
}

#wallet,
#rate {
  text-align: center;
}

.cta {
  width: 100%;
  margin: 0px 0px 12px;
  text-align: center;
}

.cta a {
  margin: 10px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid #6aa84f;
  border-radius: 3px;
  width: 100px;
  padding: 10px;
  box-sizing: border-box;
  color: #6aa84f;
}

.cta a:hover,
.cta a:active {
  background-color: #6aa84f;
  color: white;
}
</style>
