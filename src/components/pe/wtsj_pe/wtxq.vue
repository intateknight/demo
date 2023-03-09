<template>
  <div>
   <div style="height: 150vh;background-color: #EBEBEB;width: 100%;">
     <div class="top">
         <van-nav-bar
           left-arrow
           :border="false"
           @click-left="goback()"
         />
         <div class="circular1"></div>
         <div class="circular2"></div>
         <div class="circular3"></div>
         <div class="circular4"></div>
     </div>

     <div style="height: 400px;background-color: #fff;padding: 16px 20px;box-sizing: border-box;">
      <div style="font-weight: 700;font-size: 20px;">数据详情</div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">门店名称</div>
        <div style="margin-top: 6px;">某某某门店</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">巡店次数</div>
        <div style="margin-top: 6px;">5</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">现场巡店数</div>
        <div style="margin-top: 6px;">2</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">远程巡店数</div>
        <div style="margin-top: 6px;">3</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">视频巡店数</div>
        <div style="margin-top: 6px;">0</div>
      </div>
     </div>

     <div style="background-color: #fff;padding: 16px 20px;box-sizing: border-box;margin-top: 12px;">
      <div style="font-size: 16px;">
        <div style="font-weight: 700;">巡店人数</div>
        <div style="margin-top: 6px;">1</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">总问题数</div>
        <div style="margin-top: 6px;">0</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">逾期问题数</div>
        <div style="margin-top: 6px;">0</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">待整改问题数</div>
        <div style="margin-top: 6px;">0</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">待复检问题数</div>
        <div style="margin-top: 6px;">0</div>
      </div>
     </div>

     <div style="background-color: #fff;padding: 16px 20px;box-sizing: border-box;margin-top: 12px;">
      <div style="font-size: 16px;">
        <div style="font-weight: 700;">已整改问题数</div>
        <div style="margin-top: 6px;">0</div>
      </div>
      <div style="font-size: 16px;margin-top: 20px;">
        <div style="font-weight: 700;">整改完成率</div>
        <div style="margin-top: 6px;">0</div>
      </div>
      <div style="font-size: 16px;margin-top: 20px;">
        <div style="font-weight: 700;">逾期律</div>
        <div style="margin-top: 6px;">0%</div>
      </div>
     </div>
     <div style="height: 20vh;background-color: #EBEBEB;width: 100%;"></div>

   <van-tabbar></van-tabbar>
   </div>
  </div>
</template>

<script>
export default {
name:'rwxq',
data() {
 return {
   
 }
},
methods: {
 goback(){
   this.$router.go(-1)
 },
 push(x){
  this.$router.push(x)
 }
},
}
</script>

<style scoped>
  .van-nav-bar{
    background-color: #fff0;
  }
  .top{
    position: relative;
    width: 100%;
    height: 160px;
    background:linear-gradient(180deg, #A580F5 0%, #5E2DC7 100%);;
    padding-top: 50px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .circular1{
    width: 200px;
    height: 200px;
    border-radius: 100px;
    position: absolute;
    left: -65px;
    top: -115px;
    background: rgba(255, 255, 255, 0.1);
  }
  .circular2{
    width: 240px;
    height: 240px;
    border-radius: 120px;
    position: absolute;
    left: -40px;
    top: -127px;
    background: rgba(255, 255, 255, 0.1);
  }
  .circular3{
    width: 240px;
    height: 240px;
    border-radius: 120px;
    position: absolute;
    left: 180px;
    top: 63px;
    background: rgba(255, 255, 255, 0.1);
  }
  .circular4{
    width: 120px;
    height: 120px;
    border-radius: 60px;
    position: absolute;
    left: 280px;
    top: 43px;
    background: rgba(255, 255, 255, 0.1);
  }
  div /deep/.van-icon-arrow-left{
    color: #000;
    font-size: 20px;
  }
</style>