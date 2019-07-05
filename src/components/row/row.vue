<template>
  <div class="web">
    <div class="row">Row: {{ status }}</div>
    <button @click="changeStatus">Change</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      status: 'Critical'
    }
  },
  methods: {
    changeStatus () {
      this.status = 'Normal'
    }
  }
}
</script>

<style scoped>
.row {
  flex-flow: row;
}
</style>
