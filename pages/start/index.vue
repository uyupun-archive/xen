<template>
  <div class="container">
    <!-- とりあえず適当にassetsに置く前提で話を進めておく -->
    <img src=""/>
    <p class="text-left">
      座禅は「開始」ボタンを押して10秒後に開始されます。<br />
      それまでにあなたのデバイスを頭の上に乗せてバランスを取ってください。<br />
      バランスを崩したり、デバイスを落としたりすると手につけたデバイスに電流が流れるので気をつけてください。
    </p>
    <router-link to ="/countDown">
      <button type="button" class="btn btn-primary">開　始</button>
    </router-link>
  </div>
</template>

<script>
export default {

};
</script>
