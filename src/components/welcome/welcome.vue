<template>
  <div id="welcome">
    <h1>coin skills</h1>
    <p>for faster social progress</p>
    <div class="cta">
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Sign In</router-link>
    </div>
    <p>bank on your live social capital</p>
  </div>
</template>

<style scoped>
  div {
    margin: 0px;
  }

  #welcome {
    width: 80%;
    margin: auto;
  }

  h1 {
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
