<template>
  <div class="container">
    <div>{{ min + ':' + sec }}</div>
    <router-link to="/">
      <button type="button" class="btn btn-danger mt-3">やめる</button>
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
          this.$router.push('/shock');
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
