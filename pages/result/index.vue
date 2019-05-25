<template>
  <div class="container">
    <h3>あなたのタイム</h3>
    <!-- {{yourtime}} -->
    <h3 class="dummy">10:00</h3>

    <!-- ここ確認する -->
    <div class="mb-3">
      <router-link to="ツイート">
        <button type="button" class="btn btn-primary" >ツイート</button>
      </router-link>
    </div>
    <div>
      <router-link to="/">
        <button type="button" class="btn btn-danger">トップへ戻る</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

</style>
