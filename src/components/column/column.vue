<template>
  <div class="web">
    <div class="column">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.column {
  display: flex;
  flex-flow: column;
  margin: 0px;
}
</style>
