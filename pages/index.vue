<template>
  <div class="mt-4">
    <h1 class="h1">Xen</h1>
    <div class="iconWrapper">
      <img src="~/static/icon.png" class="mb-4 icon" />
    </div>
    <router-link to="/start">
      <button type="button" class ="btn btn-primary">座禅する</button>
    </router-link>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.icon {
  width: 80%;
  max-width: 200px;
}
</style>
