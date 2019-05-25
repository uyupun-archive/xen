<template>
  <div class="container">
    <h3>ダミー</h3>
    <div class="text-center">{{ count }}</div>
    <router-link to="/">
      <button type="button" class="btn btn-danger mt-3">やめる</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 10,
    }
  },
  created() {
    this.countDown();
  },
  methods: {
    countDown() {
      setInterval(() => {
        this.count -= 1;
        if (this.count <= 0) {
          this.$router.push('/measure');
          this.count = 10;
        }
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
