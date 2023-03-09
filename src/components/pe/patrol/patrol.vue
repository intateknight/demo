<template>
  <div>
    <div class="contain">
      <!-- 顶部 -->
      <div class="top">
        <div >
          <span class="mdmc">门店名称</span>
        </div>
        <div style="display:flex;height: 30px;align-items: center;" @click="login()">
          <span class="jksb">登出</span>
          <img src="@/assets/patrol/index/icon/1GEGOMkcod.jpg" alt="" style="width: 18px;height: 18px;" >
        </div>
      </div>
      <!-- 巡查人 -->
      <div class="person">
        <div class="box">
          <div class="per-left">
            <p class="per-p">{{ job }}</p>
            <p class="per-p">{{ name }}</p>
          </div>
          <img src="@/assets/patrol/index/img/Frame 842.png" alt="" class="pic">
        </div>
      </div>
      <!-- 内容 -->
      <div class="content">
        <div class="conbox" @click="push('/indexpe/jcmbpe')">
          <img src="@/assets/patrol/index/icon/Frame5.png" alt="">
          <div style="display: flex; justify-content: space-between;margin-top: 20px;">
            <span class="fsz16" style="color: rgba(51, 51, 51, 1);">检查模板</span>
            <span class="fsz16" style="color: rgba(11, 81, 147, 1);">5</span>
          </div>
        </div>
        <div class="conbox" @click="push('/indexpe/xdrwpe')">
          <img src="@/assets/patrol/index/icon/Frame6.png" alt="">
          <div style="display: flex; justify-content: space-between;margin-top: 20px;">
            <span class="fsz16" style="color: rgba(51, 51, 51, 1);">巡店任务</span>
            <span class="fsz16" style="color: rgba(11, 81, 147, 1);">4</span>
          </div>
        </div>
        <div class="conbox" @click="push('/indexpe/tjbbpe')">
          <img src="@/assets/patrol/index/icon/Frame7.png" alt="">
          <div style="display: flex; justify-content: space-between;margin-top: 20px;">
            <span class="fsz16" style="color: rgba(51, 51, 51, 1);">统计报表</span>
            <span class="fsz16" style="color: rgba(11, 81, 147, 1);">4</span>
          </div>
        </div>
        <div class="conbox" @click="push('/indexpe/wtsjpe')">
          <img src="@/assets/patrol/index/icon/Frame8.png" alt="">
          <div style="display: flex; justify-content: space-between;margin-top: 20px;">
            <span class="fsz16" style="color: rgba(51, 51, 51, 1);">问题数据</span>
            <span class="fsz16" style="color: rgba(11, 81, 147, 1);">5</span>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="foot">
        <div class="foot-text">
          当前有一份巡店任务
          要记得按时完成哦~
        </div>
        <van-button type="info" round color="rgba(11, 81, 147, 1)" plain class="btn" @click="push('/indexpe/mdlb')">
          <div style="display: flex;align-items: center;">
            <img src="@/assets/patrol/index/icon/arrow-right.png" alt="" class="arrwo-right">
            <div>开始巡店</div>
          </div>
       </van-button> 
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/pe/comm/tab/Tabbar.vue';
import {userinfo,query} from '@/api/api.js'
import { Dialog } from 'vant';
export default {
  name:'patrol',
  data() {
    return {
      checked: true,
      name:'',
      job:'',
    }
  },
  components:{
    Tabbar
  },
  methods: {
    push(x){
      this.$router.push(x)
    },
    login(){
      Dialog.confirm({
      title: '登出',
      message: '确认是否登出？',
    })
      .then(() => {
        localStorage.removeItem('token')
        location.reload()
      })
      .catch(() => {
        // on cancel
      });
        }
  },
  mounted() {
    userinfo().then((res)=>{
      this.name = res.userAuthentication.principal.user.name
      var term ={
          auth: 2,
          project: "微督导",
          table: "biz_store_user_info",
          conditions: {
              pagination: {
                  page: 1,
                  pageSize: 5
              },
              fields: ['role'],
              query: {
                  and: [
                    {match:{'realname':this.name} }
                  ]
              }
          }
      }
      query(term).then((res)=>{
        this.job = res.data[0].role
      })
    })
  },
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.contain{
  margin: 30px 20px 50px 20px;
}
.top{
  height: 28px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 58px;
}
.mdmc{
  font-size: 20px;
  font-weight: 700;
  float: left;
}
.jksb{
  font-size: 16px;
  font-weight: 700;
  margin: 3px 8px 3px;
}
.switch{
  margin-top: 6px;
}
.person{
  /* margin-top: 58px; */
  /* width: 335px; */
  height: 90px;
  background: #0B5293;
  border-radius: 20px;
}
.per-left{
  margin-left: 32px;
  margin-right: 0;
  width: 128px;
  height: 44px;
  font-weight: 700;
  color: #fff;
  text-align: center;
}
.per-p{
  font-size: 16px;
}
.box{
  position: relative;
  padding-top: 23px;
  width: 100%;
  height: 100%;
}
.pic{
  width: 133px;
  height: 144px;
  display: block;
  position: absolute;
  right: 0;
  bottom: 18px;
}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  padding: 20px 0px 8px;
  /* width: 335px; */
  height: 372px;
  background: rgba(11, 81, 147, 0.03);
  border-radius: 30px;
}
.conbox{
  margin-bottom: 12px;
  width: 296px;
  height: 76px;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
}
.conbox:last-child{
  border-bottom: 0;
  margin-bottom: 0;
}
.fsz16{
  font-size: 16px;
  font-weight: 700;
}
.foot{
  margin-top: 14px;
  padding-top: 22px;
  margin-bottom: 10px;
  height: 80px;
  background: #3F709E;
  box-shadow: 0px 8px 64px rgba(15, 34, 67, 0.06), 0px 0px 1px rgba(15, 34, 67, 0.08);
  border-radius: 8px;
}
.foot-text{
  display: inline-block;
  margin-left: 40px;
  width: 144px;
  height: 44px;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
}
.arrwo-right{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.btn{
  margin-top: 1px;
  float: right;
  margin-top: 12px;
  margin-right: 32px;
  width: 92px;
  height: 36px;
  font-size: 12px;
  font-weight: 700;
  padding: 8px 10px;
}
</style>