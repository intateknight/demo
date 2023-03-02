<<<<<<< HEAD
<template>
  <div>
    <van-tabbar>
      <van-tabbar-item >
        <div class="tabbarbox" @click="tabbar1">
          <div :class= bgi1 ></div>
          <span :class=ft1 >巡查</span>
        </div>
      </van-tabbar-item>

      <van-tabbar-item>
        <div class="tabbarbox" @click="tabbar2">
          <div :class=bgi2 ></div>
          <span :class=ft2 >审批</span>
        </div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name:'tabbar2',
  data() {
    return {
      bgi1 :'icon11',
      bgi2:'icon22',
      ft1:'ft2',
      ft2:'ft1',
      mb4:'mb4',
    };
  },
  methods: {
    tabbar1(){
      this.$router.push('/indexpe')

    },
    tabbar2(){
      this.$router.push('/indexpe/approval')
    }
  },
};
</script>

<style scoped>
.icon1{
  width: 20px;
  height: 20px;
  background-image: url('@/assets/patrol/index/icon/Frame3.png');
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: 4px;
}
.icon11{
  width: 20px;
  height: 20px;
  background-image: url('@/assets/patrol/index/icon/Frame2.png');
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: 4px;
}
.icon2{
  width: 20px;
  height: 20px;
  background-image: url('@/assets/patrol/index/icon/Frame.png');
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: 4px;
}
.icon22{
  width: 20px;
  height: 20px;
  background-image: url('@/assets/patrol/index/icon/Frame4.png');
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: 4px;
}
.tabbarbox{
  display:flex;
  align-items:center;
  flex-direction:column;
  color: rgba(11, 81, 147, 1);
}
.ft1{
 color: rgba(11, 81, 147, 1);
}
.ft2{
  color: rgba(191, 191, 191, 1);
}
.van-tabbar--fixed{
  z-index: 9999;
}
=======
<template>
  <div>
    <van-tabbar>
      <van-tabbar-item >
        <div class="tabbarbox" @click="tabbar1">
          <div :class= bgi1 ></div>
          <span :class=ft1 >巡查</span>
        </div>
      </van-tabbar-item>

      <van-tabbar-item>
        <div class="tabbarbox" @click="tabbar2">
          <div :class=bgi2 ></div>
          <span :class=ft2 >审批</span>
        </div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name:'tabbar2',
  data() {
    return {
      bgi1 :'icon11',
      bgi2:'icon22',
      ft1:'ft2',
      ft2:'ft1',
      mb4:'mb4',
    };
  },
  methods: {
    tabbar1(){
      this.$router.push('/indexpe')

    },
    tabbar2(){
      this.$router.push('/indexpe/approval')
    }
  },
};
</script>

<style scoped>
.icon1{
  width: 20px;
  height: 20px;
  background-image: url('@/assets/patrol/index/icon/Frame3.png');
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: 4px;
}
.icon11{
  width: 20px;
  height: 20px;
  background-image: url('@/assets/patrol/index/icon/Frame2.png');
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: 4px;
}
.icon2{
  width: 20px;
  height: 20px;
  background-image: url('@/assets/patrol/index/icon/Frame.png');
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: 4px;
}
.icon22{
  width: 20px;
  height: 20px;
  background-image: url('@/assets/patrol/index/icon/Frame4.png');
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: 4px;
}
.tabbarbox{
  display:flex;
  align-items:center;
  flex-direction:column;
  color: rgba(11, 81, 147, 1);
}
.ft1{
 color: rgba(11, 81, 147, 1);
}
.ft2{
  color: rgba(191, 191, 191, 1);
}
.van-tabbar--fixed{
  z-index: 9999;
}
>>>>>>> e90c7b4 (暂存)
</style>