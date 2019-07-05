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
  flex-direction: row-reverse;
  width: 100%;
  overflow: hidden;
  margin: 0px;
}
</style>
