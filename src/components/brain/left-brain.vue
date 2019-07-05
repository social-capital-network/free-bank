<template>
  <div class="brain">
    <div class="left">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.left {
  display: flex;
  flex-flow: row;
  width: 100%;
  margin: 0px;
}
</style>
