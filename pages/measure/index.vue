<template>
  <div class="mt-4">
    <h1 class="h1 measure">{{ min + ':' + sec }}</h1>
    <router-link to="/">
      <button type="button" class="btn btn-danger mt-3">座禅をやめる</button>
    </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      timer: null,
      min: 0,
      sec: 30,
    }
  },
  created() {
    this.countDown();
  },
  beforeDestroy() {
    this.clearTimer();
  },
  methods: {
    countDown() {
      this.timer = setInterval(() => {
        this.sec -= 1;
        if (this.sec <= 0) {
          this.$router.push('/complete');
          this.sec = 30;
        }
      }, 1000)
    },
    clearTimer() {
      clearInterval(this.timer);
    }
  }
};
</script>

<style lang="scss" scoped>
.measure {
  font-size: 120px;
}
</style>
