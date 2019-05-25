<template>
  <div>
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
      alpha: 0,
      beta: 0,
      gamma: 0
    }
  },
  mounted() {
    window.addEventListener("deviceorientation", dat => {
      // alpha値=z軸
      this.alpha = Math.round(dat.alpha);
      // beta値=x軸
      this.beta = Math.round(dat.beta);
      // gamma値=y軸
      this.gamma = Math.round(dat.gamma);
    });
    this.countDown();
  },
  beforeDestroy() {
    this.clearTimer();
  },
  methods: {
    countDown() {
      const alpha = this.alpha;
      const beta = this.beta;
      const gamma = this.gamma;
      console.log(alpha, beta, gamma);
      this.timer = setInterval(() => {
        this.sec -= 1;
        if (this.sec <= 0) {
          this.$router.push('/complete');
          this.sec = 30;
        }

        if (alpha > 10 && alpha < 350) {
          if (alpha - 10 > this.alpha || alpha + 10 < this.alpha) this.$router.push('/shock');
        }
        else if (alpha <= 10) {
          if (alpha + 10 < this.alpha) {
            if (alpha + 350 > this.alpha) this.$router.push('/shock');
          }
        }
        else {
          if (alpha - 10 > this.alpha) {
            if (alpha - 350 < this.alpha) this.$router.push('/shock');
          }
        }

        if (beta > -170 && beta < 170) {
          if (beta - 10 > this.beta || beta + 10 < this.beta) this.$router.push('/shock');
        }
        else if (beta >= 170 && beta <= 180) {
          if (beta - 10 < this.alpha) {
            if (-beta < this.alpha) this.$router.push('/shock');
          }
        }
        else {
          if (beta + 10 < this.alpha) {
            if (-beta > this.alpha) this.$router.push('/shock');
          }
        }

        if (gamma > -80 && gamma < 80) {
          if (gamma - 80 > this.gamma || gamma + 10 < this.gamma) this.$router.push('/shock');
        }
        else if (gamma <= 90 && gamma >= 80) {
          if (gamma - 10 > this.alpha) {
            if (-gamma < this.alpha) this.$router.push('/shock');
          }
        }
        else {
          if (gamma + 10 < this.alpha) {
            if (-gamma < this.alpha) this.$router.push('/shock');
          }
        }
      }, 1000)
    },
    clearTimer() {
      clearInterval(this.timer);
    }
  }
};
</script>
