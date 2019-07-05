<template>
  <div class="web">
    <div class="column">
      <slot></slot>
    </div>
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
.column {
  display: flex;
  flex-flow: column;
  margin: 0px;
}
</style>
