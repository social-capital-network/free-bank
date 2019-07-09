<template>
  <div>
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
