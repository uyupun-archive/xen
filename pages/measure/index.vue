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
      min: 2,
      sec: 0,
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
        }else{
          return true;
        }
      }, 1000)
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

