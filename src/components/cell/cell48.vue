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
  width: 48px;
  height: 48px;
  overflow: hidden;
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
  width: 48px;
  height: 48px;
  border: 0px solid #888;
  border-radius: 50%;
  background-color: #fff;
}
.inner .top {
  margin-top: -24px;
}
.inner .bottom {
  margin-top: -24px;
  margin-bottom: -24px;
}
.inner .left {
  float: left;
  margin-left: -24px;
}
.inner .right {
  float: right;
  margin-right: -24px;
}
.content {
  min-height: 50px;
}
</style>
