<template>
  <div id="welcome">
    <h2>my realtime wallet</h2>
    <p>fast & fair social progress</p>
    <div class="cta">
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Sign In</router-link>
    </div>
    <p>bank on your live social capital</p>
    <h2>live jobs demand</h2>
    <h2>matching</h2>
    <h2>realtime skills offer</h2>
  </div>
</template>

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
