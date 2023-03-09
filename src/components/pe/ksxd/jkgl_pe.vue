<template>
  <div>
    <div class="blank"></div>
    <div class="bg">
      <div class="bgc">
        <div class="list" >
          <div v-if="this.show3"></div>
          <div style="width: 90%;padding: 0 12px;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);min-height: 30px;">
            <span style="font-size: 16px;font-weight: 700;color: #333333;margin-right: 4px;">监控管理</span>
          </div>
          <div style="margin-top: 16px;display: flex;justify-content: space-between;flex-wrap: wrap;">
            <div v-for="(item,index) in list" :key="index">
              <van-badge>
                <van-button icon="eye-o" :type=item.type  style="border: 0;min-width: 154px;min-height: 36px;margin-bottom: 24px;"  @click="changetype(index)">监控:{{ item.Name }}</van-button>
                <template #content>
                  <van-icon name="cross" class="badge-icon" @click="showdialog1()"/>
                </template>
              </van-badge>
              <van-dialog v-model="show2" title="是否确定删除" show-cancel-button  @cancel="cancel1" @confirm="confirm1(item.ID)">
                <div style="width: 100%;text-align: center;">
                 <h3>监控:{{ item.Name }}</h3>
                </div> 
              </van-dialog>
            </div>
            <van-button icon="plus" type="info"  style="color: #333333;background: rgba(0, 0, 0, 0.1);;border: 0;min-width: 154px;min-height: 36px;margin-bottom: 24px;" @click="showdialog()">添加监控</van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="blank2"></div>
    <div class="bottom">
      <van-button type="info" round style="color: #fff;background: #0B5193;border: 0;width: 100%;" @click="goback('this.org_id')">确定</van-button>
    </div>
    <van-dialog v-model="show" title="新增监控" show-cancel-button @cancel="cancel" @confirm="confirm">
      <van-field
        v-model="device.name"
        name="名称"
        label="设备名称:"
        placeholder="请输入设备名称"
      />
      <van-field
        v-model="device.ip"
        name="ip号"
        label="设备ip号:"
        placeholder="请输入序列号"
      />
      <van-field
        v-model="device.password"
        type="password"
        name="密码"
        label="设备密码:"
        placeholder="请输入密码"
      />
      <van-field
        v-model="device.type"
        type="number"
        name="类型"
        label="设备类型:"
        placeholder="请输入类型"
      />
    </van-dialog>

  </div>
</template>

<script>
import { getDeviceList,deviceAdd,deviceDel, query } from '@/api/api' 
import eventBus from '@/eventBus/eventBus.js';
export default {
  name:'jkgl_pe',
  data() {
    return {
      show: false,
      show2:false,
      show3:false,
      org_id:5009,
      n0_device:0,
      device:{
        name:'',
        ip:'1',
        password:'1',
        type:1
      },
      list:[]
    }
  },
  mounted() {
    this.devicelist()
  },
  methods: {
    goback(){
      eventBus.$emit('addressInfo',this.n0_device);
      this.$router.go(-1)
    },
    push(x){
    this.$router.push(x)
    },
    changetype(x){
      for(var i=0;i<this.list.length;i++){
        this.list[i].type = 'info'
      }
      this.list[x].type = 'primary'
      this.show3 =!this.show3
    },
    showdialog(){
      this.show = true
    },
    showdialog1(){
      this.show2 = true
    },
    cancel1(){
      console.log('取消删除');
    },
    // 删除监控
    confirm1(x){
      var url = `http://49.232.216.15:${this.org_id}/supervision/device/del`
      var a = {id:x}
      deviceDel(url,a).then((res) =>{
        console.log(res);
        this.devicelist()
      })
      console.log('确定删除');
    },
    cancel(){
      console.log('取消');
    },
    // 新增监控
    confirm(){
      var url = `http://49.232.216.15:${this.org_id}/supervision/device/add`
      const params = this.device
      deviceAdd(url,params).then((req)=>{
        this.devicelist()
      })
    },
    //获取监控列表
    devicelist(){
      var url = `http://49.232.216.15:${this.org_id}/supervision/device/query`
      getDeviceList(url).then((res)=>{
        this.list = res.data
        for(var i=0;i<this.list.length;i++){
        var a = { type:'info'}
        this.list[i]={
          ...a,
          ...this.list[i]
         }
        }
        this.list[0].type = 'primary'
      })
    }

  },
}
</script>

<style scoped>
.bg{
    background-color: #edededb0;
    /* background-color: #050505; */
    /* min-height: 80vh; */
    overflow:hidden;
    padding: 0 12px;
  }
  .bgc{
    margin-top: 10px;
    background-color: #fafbfb;
    padding: 12px 14px 0 14px;
  }
  .list{
    box-sizing: border-box;
    /* width: 90%; */
    background-color: #fafbfb;
    margin-bottom: 12px;
  }
  
  .mt52{
    margin-top: 52px;
  }
  .blank{
  width: 100%;
  height: 420px;
  background-color: #edededb0;
  }
  .blank2{
  width: 100%;
  height: 180px;
  background-color: #edededb0;
 }
 .bottom{
  box-sizing: border-box;
  height: 72px;
  width: 100%;
  padding: 12px 20px;
  background-color: #fff;
  border: 1px solid #fff;
  position: fixed;
  left: 0;
  bottom: 50px;
 }
 div /deep/ .van-nav-bar__title{
  font-weight: 700;
 }
 div /deep/ .van-button--info{
  color: #333333;
  background: #FFFFFF;
 } 
 div /deep/ .van-button--primary{
  color: #fff;
  background: #0B5193;
 }
 .badge-icon {
  display: block;
  font-size: 10px;
  line-height: 18px;
}
div /deep/.van-badge{
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #8e8e8e;
  /* line-height: 10px; */
}
</style>