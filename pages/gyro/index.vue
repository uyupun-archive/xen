<template>
  <div>
    <div>alpha: {{ alpha }}</div>
    <div>beta: {{ beta }}</div>
    <div>gamma: {{ gamma }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alpha: 0,
      beta: 0,
      gamma: 0
    }
  },
  mounted() {
    window.addEventListener("deviceorientation", dat => {
      this.alpha = dat.alpha;
      this.beta = dat.beta;
      this.gamma = dat.gamma;
    });
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
