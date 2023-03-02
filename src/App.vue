<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name:'app',
<<<<<<< HEAD
=======
mounted() {
  var isMobile = !!navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|WebOS|Windows Phone|Phone)/i);
  if(isMobile){
    this.$router.push('/loginpe')
  }else{
    this.$router.push('/loginpc')
  }
},
>>>>>>> e90c7b4 (暂存)
}
</script>

<style>

</style>