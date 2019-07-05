<template>
  <div class="cell">
    <div class="outer">
      <div class="inner">
        <i class="top left"></i>
        <i class="top right"></i>
        <div class="content"></div>
        <i class="bottom right"></i>
        <i class="bottom left"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cell {
  width: 12px;
  height: 12px;
  overflow: hidden;
  background-color: #ccc;
  border: 0px solid #fff;
  margin: 0px;
}

  .outer {
  overflow: hidden;
}
.inner {
  border: 0px solid #888;
}
.inner i {
  width: 12px;
  height: 12px;
  border: 0px solid #888;
  border-radius: 50%;
  background-color: #fff;
}
.inner .top {
  margin-top: -6px;
}
.inner .bottom {
  margin-top: -6px;
  margin-bottom: -6px;
}
.inner .left {
  float: left;
  margin-left: -6px;
}
.inner .right {
  float: right;
  margin-right: -6px;
}
.content {
  min-height: 14px;
}
</style>
