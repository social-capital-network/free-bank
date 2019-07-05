<template>
  <div class="brain">
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.right {
  display: flex;
  flex-flow: row;
  width: 100%;
  margin: 0px;
}
</style>
