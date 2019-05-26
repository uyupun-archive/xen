<template>
  <div>
    <h1 class="h1 count">{{ count }}</h1>
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
      count: 10,
    }
  },
  mounted() {
    this.countDown();
  },
  beforeDestroy() {
    this.clearTimer();
  },
  methods: {
    countDown() {
      this.timer = setInterval(() => {
        this.count -= 1;
        if (this.count <= 0) {
          this.$router.push('/measure');
        }
      }, 1000);
    },
    clearTimer() {
      clearInterval(this.timer);
    }
  }
};
</script>

<style lang="scss" scoped>
.count {
  font-size: 200px;
}
</style>
