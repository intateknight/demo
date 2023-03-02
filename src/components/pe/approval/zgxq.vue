<<<<<<< HEAD
<template>
  <div>
    <div class="fixed">
      <div style="margin-top: 50px;">
        <van-nav-bar
          title="整改详情"
          left-arrow
          :border="false"
          @click-left="goback()"
        />
      </div>
    </div> 

    <div class="blank"></div>
    <div class="bg">
      <div class="list">
          <div style="padding: 0 12px;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);min-height: 30px;">
            <span style="font-size: 16px;font-weight: 700;color: #333333;margin-right: 4px;">基本信息</span>
          </div>
          <div style="font-size: 20px;font-weight: 700;margin-top: 20px;">
            某某门店
          </div>
          <div style="font-size: 14px;margin-top: 10px;font-size: 14px;">
            <span style="margin-right: 50px;">巡店员：某某某</span>
            <span>处理人：某某</span>
          </div>
          <div style="font-size: 14px;margin-top: 10px;font-size: 14px;">
            <span>巡店时间：2022-11-24 14：42</span>
            <span style="color: #0B5193;margin-left: 10px;">巡店报告</span>
          </div>
          <div style="box-sizing: border-box; width: 100%;height: 56px;background: #EE6767;margin-top: 12px;padding: 8px 12px;font-size: 14px;font-weight: 700;color: #fff;">
            <div>不合格项</div>
            <div style="margin-top: 2px;">
              <span>最迟整改时间:</span>
              <span style="margin-left: 4px;">2022-11-25</span>
            </div>
          </div>
          <div style="padding: 0 12px;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);min-height: 30px;margin-top: 24px;">
            <span style="font-size: 16px;font-weight: 700;color: #333333;margin-right: 4px;">3.某某规范</span>
            <span style="font-size: 12px;font-weight: 700;color: #666666;">20分</span>
            <span style="font-size: 14px;font-weight: 700;color: #0B5193;float: right;">查看SOP标准</span>
          </div>
          <div style="margin-top: 16px;">
            <img src="@/assets/patrol/jcmb/Frame 2351.png" alt="">
            <div style="font-size: 14px;color: #666666;margin-top: 16px;">备注说明文本</div>
          </div>
          <div style="padding: 0 12px;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);min-height: 30px;margin-top: 24px;">
            <span style="font-size: 16px;font-weight: 700;color: #333333;margin-right: 4px;">整改项目</span>
          </div>
          <div style="color: #000000B2;font-size: 14px;margin-top: 16px;margin-left: 10px;">是否同意整改</div>
          <div style="margin-top: 16px;display: flex;">
            <van-button :type=type1 round style="border: 0;min-width: 112px;height: 36px;margin-right: 12px;" @click="changebtntype(1)">同意整改</van-button>
            <van-button :type=type2 round style="border: 0;min-width: 112px;height: 36px;" @click="changebtntype(2)">拒绝整改</van-button>
          </div>
          <div style="color: #000000B2;font-size: 14px;margin-top: 16px;margin-left: 10px;">整改凭证</div>
          <div style="margin-top: 16px;">
            <van-uploader v-model="fileList" multiple />
          </div>
          <div>
            <div style="margin-top: 16px;margin-bottom: 16px; margin-left: 10px;font-size: 14px;color: #000000B2;">说明</div>
            <van-field
              v-model="message"
              rows="2"
              autosize
              type="textarea"
              maxlength="200"
              placeholder="请输入留言"
              show-word-limit
            />
          </div>
      </div>
    </div>
    
    <div class="blank2"></div>

    <div class="bottom">
      <van-button type="info" round style="color: #fff;background: #0B5193;border: 0;width: 100%; min-height: 36px;" @click="push('/indexpe/approval')">确定</van-button>
    </div>
    <van-tabbar></van-tabbar>
  </div>
</template>

<script>      
export default {
 name:'mdlb',
 data() {
  return {
    value: '',
    show:false,
    type1:'info',
    type2:'info',
    message:'',
    fileList: [
        // { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
      ],
  }
 },
 methods: {
  goback(){
    this.$router.go(-1)
  },
  push(x){
    this.$router.push(x)
  },
  changebtntype(x){
      this.type1 = 'info'
      this.type2 = 'info'
      if(x == 1){
        this.type1 = 'default'
      }else{
        this.type2 = 'default'
      }
  }
 },
}
</script>

<style scoped>
  .fixed{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #fff;
  }
  .van-search__action{
    box-sizing: border-box;
    width: 68px;
    text-align: center;
    background-color: #0B5193;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #fff;
  }
  .van-search{
    width: 94%;
  }
  .van-search__content{
    border-radius: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .van-icon-plus{
    font-weight: 700;
    font-size: 16px;
    color: #0B5193;
  }
  
  .bg{
    width: 100%;
    background-color: #fcfcfc;
    /* background-color: #050505; */
    min-height: 80vh;
    overflow:hidden;
  }
  .list{
    box-sizing: border-box;
    padding: 12px;
    margin: 12px 14px;
    background-color: #fff;
  }
  
  .mt52{
    margin-top: 52px;
  }
  .blank{
  width: 100%;
  height: 100px;
  background-color: #fcfcfc;
  }
  .blank2{
  width: 100%;
  height: 160px;
  background-color: #fcfcfc;
 }
 div /deep/ .van-nav-bar__title{
  font-weight: 700;
 }
 div /deep/ .van-button--info{
  color: #333333;
  background: #0000001A;
 } 
 div /deep/ .van-button--default{
  color: #fff;
  background: #0B5193;
 }
 .bottom{
  box-sizing: border-box;
  height: 72px;
  width: 100%;
  padding: 12px 20px;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 50px;
  border: 1px solid #fff;
 }

=======
<template>
  <div>
    <div class="fixed">
      <div style="margin-top: 50px;">
        <van-nav-bar
          title="整改详情"
          left-arrow
          :border="false"
          @click-left="goback()"
        />
      </div>
    </div> 

    <div class="blank"></div>
    <div class="bg">
      <div class="list">
          <div style="padding: 0 12px;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);min-height: 30px;">
            <span style="font-size: 16px;font-weight: 700;color: #333333;margin-right: 4px;">基本信息</span>
          </div>
          <div style="font-size: 20px;font-weight: 700;margin-top: 20px;">
            某某门店
          </div>
          <div style="font-size: 14px;margin-top: 10px;font-size: 14px;">
            <span style="margin-right: 50px;">巡店员：某某某</span>
            <span>处理人：某某</span>
          </div>
          <div style="font-size: 14px;margin-top: 10px;font-size: 14px;">
            <span>巡店时间：2022-11-24 14：42</span>
            <span style="color: #0B5193;margin-left: 10px;">巡店报告</span>
          </div>
          <div style="box-sizing: border-box; width: 100%;height: 56px;background: #EE6767;margin-top: 12px;padding: 8px 12px;font-size: 14px;font-weight: 700;color: #fff;">
            <div>不合格项</div>
            <div style="margin-top: 2px;">
              <span>最迟整改时间:</span>
              <span style="margin-left: 4px;">2022-11-25</span>
            </div>
          </div>
          <div style="padding: 0 12px;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);min-height: 30px;margin-top: 24px;">
            <span style="font-size: 16px;font-weight: 700;color: #333333;margin-right: 4px;">3.某某规范</span>
            <span style="font-size: 12px;font-weight: 700;color: #666666;">20分</span>
            <span style="font-size: 14px;font-weight: 700;color: #0B5193;float: right;">查看SOP标准</span>
          </div>
          <div style="margin-top: 16px;">
            <img src="@/assets/patrol/jcmb/Frame 2351.png" alt="">
            <div style="font-size: 14px;color: #666666;margin-top: 16px;">备注说明文本</div>
          </div>
          <div style="padding: 0 12px;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);min-height: 30px;margin-top: 24px;">
            <span style="font-size: 16px;font-weight: 700;color: #333333;margin-right: 4px;">整改项目</span>
          </div>
          <div style="color: #000000B2;font-size: 14px;margin-top: 16px;margin-left: 10px;">是否同意整改</div>
          <div style="margin-top: 16px;display: flex;">
            <van-button :type=type1 round style="border: 0;min-width: 112px;height: 36px;margin-right: 12px;" @click="changebtntype(1)">同意整改</van-button>
            <van-button :type=type2 round style="border: 0;min-width: 112px;height: 36px;" @click="changebtntype(2)">拒绝整改</van-button>
          </div>
          <div style="color: #000000B2;font-size: 14px;margin-top: 16px;margin-left: 10px;">整改凭证</div>
          <div style="margin-top: 16px;">
            <van-uploader v-model="fileList" multiple />
          </div>
          <div>
            <div style="margin-top: 16px;margin-bottom: 16px; margin-left: 10px;font-size: 14px;color: #000000B2;">说明</div>
            <van-field
              v-model="message"
              rows="2"
              autosize
              type="textarea"
              maxlength="200"
              placeholder="请输入留言"
              show-word-limit
            />
          </div>
      </div>
    </div>
    
    <div class="blank2"></div>

    <div class="bottom">
      <van-button type="info" round style="color: #fff;background: #0B5193;border: 0;width: 100%; min-height: 36px;" @click="push('/indexpe/approval')">确定</van-button>
    </div>
    <van-tabbar></van-tabbar>
  </div>
</template>

<script>      
export default {
 name:'mdlb',
 data() {
  return {
    value: '',
    show:false,
    type1:'info',
    type2:'info',
    message:'',
    fileList: [
        // { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
      ],
  }
 },
 methods: {
  goback(){
    this.$router.go(-1)
  },
  push(x){
    this.$router.push(x)
  },
  changebtntype(x){
      this.type1 = 'info'
      this.type2 = 'info'
      if(x == 1){
        this.type1 = 'default'
      }else{
        this.type2 = 'default'
      }
  }
 },
}
</script>

<style scoped>
  .fixed{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #fff;
  }
  .van-search__action{
    box-sizing: border-box;
    width: 68px;
    text-align: center;
    background-color: #0B5193;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #fff;
  }
  .van-search{
    width: 94%;
  }
  .van-search__content{
    border-radius: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .van-icon-plus{
    font-weight: 700;
    font-size: 16px;
    color: #0B5193;
  }
  
  .bg{
    width: 100%;
    background-color: #fcfcfc;
    /* background-color: #050505; */
    min-height: 80vh;
    overflow:hidden;
  }
  .list{
    box-sizing: border-box;
    padding: 12px;
    margin: 12px 14px;
    background-color: #fff;
  }
  
  .mt52{
    margin-top: 52px;
  }
  .blank{
  width: 100%;
  height: 100px;
  background-color: #fcfcfc;
  }
  .blank2{
  width: 100%;
  height: 160px;
  background-color: #fcfcfc;
 }
 div /deep/ .van-nav-bar__title{
  font-weight: 700;
 }
 div /deep/ .van-button--info{
  color: #333333;
  background: #0000001A;
 } 
 div /deep/ .van-button--default{
  color: #fff;
  background: #0B5193;
 }
 .bottom{
  box-sizing: border-box;
  height: 72px;
  width: 100%;
  padding: 12px 20px;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 50px;
  border: 1px solid #fff;
 }

>>>>>>> e90c7b4 (暂存)
</style>