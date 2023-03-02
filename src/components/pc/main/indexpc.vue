<template>
  <div class="indexpc">
    <Left></Left>
    <div class="right" style="height:100vh;overflow:auto">
      <Top></Top>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Left from '@/components/pc/comm/left/left.vue';
import Top from '@/components/pc/comm/top/top.vue'
export default {
  name:'indexpc',
  components:{
    Left,Top
  }
}
</script>

<style scoped>
  .indexpc{
    display: flex;
    background-color: #F5F5F5;
  }
  .right{
    flex: 1;
  }
</style>