<template>
  <div>
    <div class="container text-center">
      <nuxt />
    </div>
  </div>
</template>

<style lang="scss">
.container {
  position: relative;
  height: 100vh;
  overflow: hidden
}
.btn {
  width: 250px;
  padding: 10px 0;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
