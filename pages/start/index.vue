<template>
  <div class="mt-4">
    <img src="~/static/zen.png" class="mb-4 icon" />
    <p class="mb-4">
      座禅は「開始」ボタンを押して10秒後に開始されます。<br />
      それまでにあなたのデバイスを頭の上に乗せてバランスを取ってください。<br />
      バランスを崩したり、デバイスを落としたりすると手につけたデバイスに電流が流れるので気をつけてください。
    </p>
    <div class="mb-2">
      <router-link to ="/countDown">
        <button type="button" class="btn btn-primary">開始</button>
      </router-link>
    </div>
    <div>
      <router-link to ="/">
        <button type="button" class="btn btn-danger">戻る</button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  width: 80%;
  max-width: 200px;
}
</style>
