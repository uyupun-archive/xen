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
      alpha: 0,
      beta: 0,
      gamma: 0,
      count: 0
    }
  },
  mounted() {
    window.addEventListener("deviceorientation", dat => {
      let alpha = Math.round(dat.alpha);
      let beta = Math.round(dat.beta);
      let gamma = Math.round(dat.gamma);
      this.compareGyro(alpha, beta, gamma);
    });
    this.countDown();
  },
  beforeDestroy() {
    this.clearTimer();
  },
  methods: {
    compareGyro(alpha, beta, gamma) {
      this.count += 1;
      if (this.count === 1) {
        this.alpha = alpha;
        this.beta = beta;
        this.gamma = gamma;
        console.log(this.alpha, this.beta, this.gamma);
      }

      if (this.alpha > 10 && this.alpha < 350) {
        if (this.alpha - 10 > alpha || this.alpha + 10 < alpha) this.$router.push('/shock');
      }
      else if (this.alpha <= 10) {
        if (this.alpha + 10 < alpha) {
          if (this.alpha + 350 > alpha) this.$router.push('/shock');
        }
      }
      else {
        if (this.alpha - 10 > alpha) {
          if (this.alpha - 350 < alpha) this.$router.push('/shock');
        }
      }

      if (this.beta > -170 && this.beta < 170) {
        if (this.beta - 10 > beta || this.beta + 10 < beta) this.$router.push('/shock');
      }
      else if (this.beta >= 170 && this.beta <= 180) {
        if (this.beta - 10 < beta) {
          if (-this.beta < beta) this.$router.push('/shock');
        }
      }
      else {
        if (this.beta + 10 < beta) {
          if (-this.beta > beta) this.$router.push('/shock');
        }
      }

      if (this.gamma > -80 && this.gamma < 80) {
        if (this.gamma - 80 > gamma || this.gamma + 10 < gamma) this.$router.push('/shock');
      }
      else if (this.gamma <= 90 && this.gamma >= 80) {
        if (this.gamma - 10 > gamma) {
          if (-this.gamma < gamma) this.$router.push('/shock');
        }
      }
      else {
        if (this.gamma + 10 < gamma) {
          if (-this.gamma < gamma) this.$router.push('/shock');
        }
      }
    },
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
