<template>
  <div>
    <div class="blank"></div>
    <div class="bg">
      <div class="bgc">
        <div class="list" >
          <div style="width: 90%;padding: 0 12px;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);min-height: 30px;">
            <span style="font-size: 16px;font-weight: 700;color: #333333;margin-right: 4px;">预设位管理 (3/12)</span>
          </div>
          <div style="margin-top: 16px;display: flex;justify-content: space-between;flex-wrap: wrap;">
            <van-button icon="aim" :type=item.type  style="border: 0;min-width: 154px;min-height: 36px;margin-bottom: 24px;" v-for="item in list" :key="item.id" @click="changetype(item.id)">{{ item.name }}</van-button>
            <van-button icon="plus" type="info"  style="color: #333333;background: rgba(0, 0, 0, 0.1);;border: 0;min-width: 154px;min-height: 36px;margin-bottom: 24px;" @click="showdialog()">预设位置名称</van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="blank2"></div>
    <div class="bottom">
      <van-button type="info" round style="color: #333333;background: rgba(0, 0, 0, 0.1);border: 0;min-width: 120px;min-height: 36px;" @click="push1()">查看回放</van-button>
      <van-button type="info" round style="color: #fff;background: #0B5193;border: 0;min-width: 200px;min-height: 36px;" @click="push2()" >抓拍创建问题</van-button>
    </div>
    <van-dialog v-model="show" title="新增预设位" show-cancel-button @cancel="cancel" @confirm="confirm">
      <van-field v-model="value" label="预设位名称：" />
    </van-dialog>
  </div>
</template>

<script>
export default {
  name:'ysgl',
  data() {
    return {
      show: false,
      value:'',
      list:[
        {
         id:1,
         type:'info',
         name:'预设位置名称',
        },
        {
         id:2,
         type:'info',
         name:'预设位置名称'
        },
        {
         id:3,
         type:'info',
         name:'预设位置名称'
        },
      ]
    }
  },
  methods: {
    goback(){
      this.$router.go(-1)
    },
    push1(){
    this.$router.push({path:'/indexpe/ksxd/ckhf',query:{flag:2}})
    },
    push2(){
    this.$router.push({path:'/indexpe/ksxd/cjwt',query:{flag:1}})
    },
    changetype(x){
      for(var i=0;i<this.list.length;i++){
        this.list[i].type = 'info'
      }
      this.list[x-1].type = 'primary'
    },
    showdialog(){
      this.show = true
    },
    cancel(){
      console.log('取消');
    },
    confirm(){
      console.log('确定');
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
  display: flex;
  justify-content: space-between;
  height: 72px;
  width: 100%;
  padding: 12px 20px;
  background-color: #fff;
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
</style>