<<<<<<< HEAD
<template>
  <div>
   <div style="background-color: #EBEBEB;">
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
        <div style="font-weight: 700;font-size: 20px;">报告详情</div>
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">门店名称</div>
          <div style="margin-top: 6px;">某某门店</div>
        </div>
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">使用模板</div>
          <div style="margin-top: 6px;">店员-日检</div>
        </div>
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">实际得分</div>
          <div style="margin-top: 6px;">80</div>
        </div>
    
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">结果</div>
          <div style="margin-top: 6px; color: #3E9C2E;">优秀</div>
        </div>
      </div>

      <div style="background-color: #fff;padding: 16px 20px;box-sizing: border-box;margin-top: 12px;">
        <div style="font-size: 16px;">
          <div style="font-weight: 700;">巡店员</div>
          <div style="margin-top: 6px;">某某</div>
        </div>
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">巡店方式</div>
          <div style="margin-top: 6px;">远程巡店</div>
        </div>
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">巡店时间</div>
          <div style="margin-top: 6px;">2022-11-24 14:32</div>
        </div>
        
      </div>

      <div style="background-color: #fff;padding: 16px 20px;box-sizing: border-box;margin-top: 12px;">
        <div style="font-size: 16px;">
          <div style="font-weight: 700;">总问题数</div>
          <div style="display: flex;justify-content: space-between;margin-top: 6px;">
            <div style="color: #0B5193;">2</div>
            <div style="color: #0B5193" ref="flag" @click="changeflag()" >{{ type }}</div>
          </div>
        </div>
        <div style="font-size: 16px;margin-top: 10px;" v-if="this.flag == 1">
          <div >问题一：某某检查不合格</div>
          <div style="margin-top: 6px;">
            <img src="@/assets/patrol/jcmb/Frame 2371.png" alt="">
          </div>
        </div>
        <div style="font-size: 16px;margin-top: 10px;" v-if="this.flag == 1">
          <div >问题二：某某检查不合格</div>
          <div style="margin-top: 6px;">
            <img src="@/assets/patrol/jcmb/Frame 2372.png" alt="">
          </div>
        </div>
        <div style="font-size: 16px;margin-top: 20px;">
          <div style="font-weight: 700;">待整改数</div>
          <div style="margin-top: 6px;">2</div>
        </div>
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">待审核数</div>
          <div style="margin-top: 6px;">0</div>
        </div>
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">已整改数</div>
          <div style="margin-top: 6px;">0</div>
        </div>
      </div>

    <van-tabbar></van-tabbar>
    </div>
    <div style="width: 100%;height: 50px;margin-top: 80px;"></div>
    </div>
  </div>
</template>

<script>
export default {
name:'tjxq',
data() {
 return {
  type:'收起',
  flag : 1,
 }
},
methods: {
 goback(){
   this.$router.go(-1)
 },
 push(x){
  this.$router.push(x)
 },
 changeflag(){
  if(this.flag == 1){
    this.type = '展开'
    this.flag = 0
  }else{
    this.type = '收起'
    this.flag = 1
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
    background: linear-gradient(180deg, #8DE3FE 0%, #3BC4CD 100%);
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
=======
<template>
  <div>
   <div style="background-color: #EBEBEB;">
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
        <div style="font-weight: 700;font-size: 20px;">报告详情</div>
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">门店名称</div>
          <div style="margin-top: 6px;">某某门店</div>
        </div>
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">使用模板</div>
          <div style="margin-top: 6px;">店员-日检</div>
        </div>
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">实际得分</div>
          <div style="margin-top: 6px;">80</div>
        </div>
    
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">结果</div>
          <div style="margin-top: 6px; color: #3E9C2E;">优秀</div>
        </div>
      </div>

      <div style="background-color: #fff;padding: 16px 20px;box-sizing: border-box;margin-top: 12px;">
        <div style="font-size: 16px;">
          <div style="font-weight: 700;">巡店员</div>
          <div style="margin-top: 6px;">某某</div>
        </div>
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">巡店方式</div>
          <div style="margin-top: 6px;">远程巡店</div>
        </div>
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">巡店时间</div>
          <div style="margin-top: 6px;">2022-11-24 14:32</div>
        </div>
        
      </div>

      <div style="background-color: #fff;padding: 16px 20px;box-sizing: border-box;margin-top: 12px;">
        <div style="font-size: 16px;">
          <div style="font-weight: 700;">总问题数</div>
          <div style="display: flex;justify-content: space-between;margin-top: 6px;">
            <div style="color: #0B5193;">2</div>
            <div style="color: #0B5193" ref="flag" @click="changeflag()" >{{ type }}</div>
          </div>
        </div>
        <div style="font-size: 16px;margin-top: 10px;" v-if="this.flag == 1">
          <div >问题一：某某检查不合格</div>
          <div style="margin-top: 6px;">
            <img src="@/assets/patrol/jcmb/Frame 2371.png" alt="">
          </div>
        </div>
        <div style="font-size: 16px;margin-top: 10px;" v-if="this.flag == 1">
          <div >问题二：某某检查不合格</div>
          <div style="margin-top: 6px;">
            <img src="@/assets/patrol/jcmb/Frame 2372.png" alt="">
          </div>
        </div>
        <div style="font-size: 16px;margin-top: 20px;">
          <div style="font-weight: 700;">待整改数</div>
          <div style="margin-top: 6px;">2</div>
        </div>
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">待审核数</div>
          <div style="margin-top: 6px;">0</div>
        </div>
        <div style="margin-top: 20px;font-size: 16px;">
          <div style="font-weight: 700;">已整改数</div>
          <div style="margin-top: 6px;">0</div>
        </div>
      </div>

    <van-tabbar></van-tabbar>
    </div>
    <div style="width: 100%;height: 50px;margin-top: 80px;"></div>
    </div>
  </div>
</template>

<script>
export default {
name:'tjxq',
data() {
 return {
  type:'收起',
  flag : 1,
 }
},
methods: {
 goback(){
   this.$router.go(-1)
 },
 push(x){
  this.$router.push(x)
 },
 changeflag(){
  if(this.flag == 1){
    this.type = '展开'
    this.flag = 0
  }else{
    this.type = '收起'
    this.flag = 1
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
    background: linear-gradient(180deg, #8DE3FE 0%, #3BC4CD 100%);
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
>>>>>>> e90c7b4 (暂存)
</style>