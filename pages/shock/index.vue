<template>
  <div class="container">
    <h3>ビリビリ</h3>
    <div class="text-center">{{message}}</div>
    <router-link to="/result">
      <button type="button" class="btn btn-primary mt-3">次へ</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data: {
    message: ['良い','普通','悪い']
  }
};
</script>

<style lang="scss" scoped>
</style>
