<template>
  <div id="dashboard">
    <h1>social-ai capital</h1>
    <p v-if="email">Your email address: {{ email }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    email () {
      return !this.$store.getters.user ? false : this.$store.getters.user.email
    }
  },
  created () {
    this.$store.dispatch('fetchUser')
  }
}
</script>

<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: #333;
}
</style>
