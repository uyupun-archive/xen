<template>
  <div class="container">
    <div>{{min + ':' + sec }}</div>
    <router-link to="/">
      <button type="button" class="btn btn-danger mt-3">やめる</button>
    </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      min: 0,
      sec: 30,
      //time: 30
    }
  },
  created() {
    this.countDown();
  },
  methods: {
    countDown(){
      setInterval(() => {
        if(this.sec + this.min != 0){
          if(this.sec == 0){
            this.min--;
            this.sec = 60;
          }
          this.sec--;
          //this.time--;
        }
      }, 1000)
      //console.log(this.$store.getters.time)
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

