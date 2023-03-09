<template>
  <div>
    <div class="blank"></div>
    <div class="bg">
      <div class="bgc">
        <div class="list" >
          <div style="width: 90%;padding: 0 12px;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);min-height: 30px;">
            <span style="font-size: 16px;font-weight: 700;color: #333333;margin-right: 4px;" @click="showPicker = true">{{ value }} ▼</span>
          </div>
          <div style="margin-top: 16px;display: flex;justify-content: space-between;flex-wrap: wrap;" >
            <van-button  :type=item.type  style="border: 0;min-width: 72px;height: 36px;margin-bottom: 24px;" v-for="item in list" :key="item.id" @click="changetype(item.id)">{{ item.name }}</van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="blank2"></div>
    <div class="bottom">
      <van-button type="info" round style="color: #fff;background: #0B5193;border: 0;width: 100%; min-height: 36px;" @click="push2()">抓拍创建问题</van-button>
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name:'ckhf',
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      value:'2022-11-24 ',
      showPicker: false,
      list:[
        {
         id:1,
         name:'3:00',
         type:'info'
        },
        {
         id:2,
         name:'3:20',
         type:'info'
        },
        {
         id:3,
         name:'3:40',
         type:'info'
        },
        {
         id:4,
         type:'info',
         name:'4:00',
        },
        {
         id:5,
         type:'info',
         name:'4:20'
        },
        {
         id:6,
         type:'info',
         name:'4:40'
        },
        {
         id:7,
         type:'info',
         name:'5:00'
        },
        {
         id:8,
         type:'info',
         name:'5:20'
        },
        {
         id:9,
         type:'info',
         name:'5:40'
        },
        {
         id:10,
         type:'info',
         name:'6:00'
        },
        {
         id:11,
         type:'info',
         name:'6:20'
        },
        {
         id:12,
         type:'info',
         name:'6:40'
        },
        {
         id:13,
         type:'info',
         name:'6:40'
        },
        {
         id:14,
         type:'info',
         name:'7:00'
        },
        {
         id:15,
         type:'info',
         name:'7:20'
        },
        {
         id:16,
         type:'info',
         name:'7:40'
        },
        {
         id:17,
         type:'info',
         name:'8:00'
        },
        {
         id:18,
         type:'info',
         name:'8:20'
        },
        {
         id:19,
         type:'info',
         name:'8:40'
        },
        {
         id:20,
         type:'info',
         name:'9:00'
        },
        {
         id:21,
         type:'info',
         name:'9:20'
        },
        {
         id:22,
         type:'info',
         name:'9:40'
        },
        {
         id:23,
         type:'info',
         name:'10:00'
        },
        {
         id:24,
         type:'info',
         name:'10:20'
        },

        {
         id:25,
         type:'info',
         name:'10:40'
        },
        {
         id:26,
         type:'info',
         name:'11:00'
        },
        {
         id:27,
         type:'info',
         name:'11:20'
        },
        {
         id:28,
         type:'info',
         name:'11:40'
        },
        {
         id:29,
         type:'info',
         name:'12:00'
        },
        {
         id:30,
         type:'info',
         name:'12:20'
        },
        {
         id:31,
         type:'info',
         name:'12:40'
        },
        {
         id:32,
         type:'info',
         name:'13:00'
        },
        {
         id:33,
         type:'info',
         name:'13:20'
        },
        {
         id:34,
         type:'info',
         name:'13:40'
        },
        {
         id:35,
         type:'info',
         name:'14:00'
        },
        {
         id:36,
         type:'info',
         name:'14:20'
        },
        {
         id:37,
         type:'info',
         name:'14:40'
        },
        {
         id:38,
         type:'info',
         name:'15:00'
        },
        {
         id:39,
         type:'info',
         name:'15:20'
        },
        {
         id:40,
         type:'info',
         name:'15:40'
        },
        {
         id:41,
         type:'info',
         name:'16:00'
        },
        {
         id:42,
         type:'info',
         name:'16:20'
        },
        {
         id:43,
         type:'info',
         name:'16:40'
        },
        {
         id:44,
         type:'info',
         name:'17:00'
        },
        {
         id:45,
         type:'info',
         name:'17:20'
        },
        {
         id:46,
         type:'info',
         name:'17:40'
        },
        {
         id:47,
         type:'info',
         name:'18:00'
        },
        {
         id:48,
         type:'info',
         name:'18:20'
        },
        {
         id:49,
         type:'info',
         name:'18:40'
        },
        {
         id:50,
         type:'info',
         name:'19:00'
        },
        {
         id:51,
         type:'info',
         name:'19:20'
        },
        {
         id:52,
         type:'info',
         name:'19:40'
        },
        {
         id:53,
         type:'info',
         name:'20:00'
        },
        {
         id:54,
         type:'info',
         name:'20:20'
        },
        {
         id:55,
         type:'info',
         name:'20:40'
        },
        {
         id:56,
         type:'info',
         name:'21:00'
        },
        {
         id:57,
         type:'info',
         name:'21:20'
        },
        {
         id:58,
         type:'info',
         name:'21:40'
        },
        {
         id:59,
         type:'info',
         name:'22:00'
        },
        {
         id:60,
         type:'info',
         name:'22:20'
        },
        {
         id:61,
         type:'info',
         name:'22:40'
        },

        {
         id:62,
         type:'info',
         name:'23:00'
        },
        {
         id:63,
         type:'info',
         name:'23:20'
        },
        {
         id:64,
         type:'info',
         name:'23:40'
        },
        {
         id:65,
         type:'info',
         name:'00:00'
        },
        {
         id:66,
         type:'info',
         name:'00:20'
        },
        {
         id:67,
         type:'info',
         name:'00:40'
        },
        {
         id:68,
         type:'info',
         name:'01:00'
        },
        {
         id:69,
         type:'info',
         name:'01:20'
        },
        {
         id:70,
         type:'info',
         name:'01:40'
        },
        {
         id:71,
         type:'info',
         name:'02:00'
        },
        {
         id:72,
         type:'info',
         name:'02:20'
        },
        {
         id:73,
         type:'info',
         name:'02:40'
        },
      ]
    }
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    // 控制父组件的直播隐藏
    // children(){
		// var data = 2  //要传的值
		// this.$emit('childClick',data)
	  // },
    // 控制父组件的直播显示
    onConfirm(value) {
      this.value = value.getFullYear() + "-"+ (value.getMonth() + 1) + "-" +  value.getDate();
      this.showPicker = false;
    },
    goback(){
      this.$router.go(-1)
    },
    push(x){
    this.$router.push(x)
    },
    push2(){
    this.$router.push({path:'/indexpe/ksxd/cjwt',query:{flag:1}})
    },
    changetype(x){
      for(var i =0;i<this.list.length;i++){
        this.list[i].type = 'info'
      }
      this.list[x-1].type = 'default'
    },
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
  position: fixed;
  left: 0;
  bottom: 50px;
  border: 1px solid #fff;
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
</style>