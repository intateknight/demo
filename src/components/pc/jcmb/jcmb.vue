<template>
  <div>
    <Tabbar></Tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Tabbar from '@/components/pc/comm/tab/tabbar.vue'
export default {
  name:'jcmb',
  components:{Tabbar},
  
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.contain{
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
}
</style>