<template>
  <div>
   <div style="background-color: #EBEBEB;width: 100%;">
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

     <div style="background-color: #fff;padding: 16px 20px;box-sizing: border-box;">
      <div style="font-weight: 700;font-size: 20px;">模板详情</div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">模板名称</div>
        <div style="margin-top: 6px;">202211040001</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">版本</div>
        <div style="margin-top: 6px;">某某部</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">创建人</div>
        <div style="margin-top: 6px;">某某某</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">可见门店</div>
        <div style="display: flex;justify-content: space-between;margin-top: 6px;">
          <div>某门店等共x家</div>
          <div style="color: rgba(11, 81, 147, 1);" @click="changetype()">{{ btn }}</div>
        </div>
      </div>
      <div style="margin-top: 4px;" v-if="type == 1">
        <div>门店1</div>
        <div>门店2</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">等级评判</div>
        <div style="margin-top: 6px;">按百分制得分</div>
      </div>
     </div>

     <div style="height: 400px;background-color: #fff;padding: 16px 20px;box-sizing: border-box;margin-top: 12px;">
      <div style="font-size: 16px;">
        <div style="font-weight: 700;">所属组别</div>
        <div style="margin-top: 6px;">某组</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">检查项类型</div>
        <div style="margin-top: 6px;">日检</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">检查项</div>
        <div style="margin-top: 6px;">员工礼仪</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">总分</div>
        <div style="margin-top: 6px;">100分</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">可见门店</div>
        <div style="display: flex;justify-content: space-between;margin-top: 6px;">
          <div>优秀/合格</div>
          <div>奖 50-100元</div>
        </div>
        <div style="display: flex;justify-content: space-between;margin-top: 6px;">
          <div>不合格</div>
          <div>罚 50-100元</div>
        </div>
      </div>
     </div>

     <div style="height: 170px;background-color: #fff;padding: 16px 20px;box-sizing: border-box;margin-top: 12px;">
      <div style="font-size: 16px;">
        <div style="font-weight: 700;">标准描述</div>
        <div style="margin-top: 6px;">预设文本预设文本预设文本预设文本预设文本预设文本预设文本预设文本</div>
      </div>
      <div style="margin-top: 20px;font-size: 16px;">
        <div style="font-weight: 700;">SOP</div>
        <div style="margin-top: 6px;color: rgba(11, 81, 147, 1);">查看标准</div>
      </div>
     </div>
     <div style="height: 20vh;background-color: #EBEBEB;width: 100%;"></div>

   <van-tabbar></van-tabbar>
   </div>
  </div>
</template>

<script>
export default {
name:'mdxq',
data() {
 return {
   type:0,
   btn:'展开'
 }
},
methods: {
 goback(){
   this.$router.go(-1)
 },
 push(x){
  this.$router.push(x)
 },
 changetype(){
  if(this.type == 0){
    this.type =1
    this.btn = '收起'
  }else{
    this.type =0
    this.btn = '展开'
  }
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
    background:linear-gradient(180deg, #FFC773 0%, #F2CB40 100%);
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