<<<<<<< HEAD
<template>
  <div>
    <Tabbar4></Tabbar4>
    <div class="title" style="height:46px;font-size:14px;padding: 0 40px;">
      <div>
        <el-checkbox v-model="checked"   @change="getallitems()"></el-checkbox>
      </div>
      <div style="width:92px"></div>
      <div style="width:84px">门店</div>
      <div style="width:70px">巡店员</div>
      <div style="width:30px">状态</div>
      <div style="width:420px">签到地址</div>
      <div style="width:420px">签退地址</div>
      <div style="width:110px"></div>
    </div>
    <div class="loop">
      <div class="contain" style="height:132px;font-size:14px;padding: 20px 40px;width: 100%;" v-for="item in list" :key="item.sign_id">
        <el-checkbox v-model=item.checked @change="getitem(item.sign_id)"></el-checkbox>
        <div class="box" style="width:92px;height:92px;">
          <img :src=item.img alt="" style="width: 100%;height: 100%;">
        </div>
        <div style="width:84px">{{ item.store_name }}</div>
        <div style="width:70px">{{ item.patrol_username }}</div>
        <div style="width:30px">{{ item.state }}</div>
        <div style="width:420px">{{ item.sign_in_address }}</div>
        <div style="width:420px">{{ item.sign_out_address }}</div>
        <button class="btn" style="width:110px;height:36px;" @click="changenoneto1(item.sign_id)" >查看报告</button>
      </div>
    </div>
    <div class="message" v-if="none == 1" style="height:444px;width: 600px;">
      <div class="top">
        <div>
          <p>签到报告</p>
        </div>
        <div @click="changenoneto0">
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="mid" style="margin-top:28px;margin-left:40px;font-size: 16px;">
        <div style="margin-bottom:18px">
          <span>门店：</span>
          <span>{{ obj.store_name}}</span>
        </div>
        <div style="margin-bottom:18px">
          <div style="margin-bottom:4px">签到图片</div>
          <img :src=obj.img alt="" style="width:200px;height:120px">
        </div>
        <div style="margin-bottom:18px">
          <span>巡店员：</span>
          <span>{{ obj.patrol_username }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>签到状态：</span>
          <span>{{ obj.state }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>签到地址：</span>
          <span>{{ obj.sign_in_address }}</span>
        </div>
        <div>
          <span>签退地址：</span>
          <span>{{ obj.sign_out_address }}</span>
        </div>
      </div>
    </div>
    <div class="foot" style="height:56px;padding: 10px 60px;">
      <div class="footleft">
        <div class="footmain" style="width:480px;font-size: 14px;">
          <div style="width:46px">共50条</div>
          <div style="width:246px;display: flex;justify-content: space-between;align-items: center;" >
            <button style="width:32px;height:32px;" class="footbtn2" ref="btn1" @click="change(),change1()">1</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn2" @click="change(),change2()">2</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn3" @click="change(),change3()">3</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn4" @click="change(),change4()">4</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn5" @click="change(),change5()">5</button>
          </div>
          <div style="width:108px;display: flex;justify-content: space-between;align-items: center;">
            <div>跳至</div>
            <input type="text" name="" id="" style="width: 40px;height: 28px;">
            <div>页</div>
          </div>
        </div>
      </div>
    </div>
    <div class="cover" v-if="none == 1"></div>
  </div>
</template>

<script>
import Tabbar4 from '@/components/pc/comm/tab/tabbar4.vue'
import { query } from '@/api/api'    
export default {
  name:'qdsj',
  components:{Tabbar4},
  data() {
    return {
      none:'0',
      checked: false,
      obj:{},
      term:{
          auth: 2,
          project: "微督导",
          table: "biz_sign",
          conditions: {
              pagination: {
                  page: 1,
                  pageSize: 5
              },
              fields: [],
              query: {
                  and: [
                    {match:{} }
                  ]
              }
          }
      },
      list:[
        // {
        //   id:'1',
        //   shopname:'预设门店名称',
        //   checked: false,
        //   naem:'巡店员姓名',
        //   state:'正常',
        //   signin:'所处位置地址所处位置地址所处位置地址所处位置地址所处位置地址',
        //   signout:'所处位置地址所处位置地址所处位置地址所处位置地址所处位置地址',
        // },
        // {
        //   id:'2',
        //   shopname:'预设门店名称',
        //   checked: false,
        //   naem:'巡店员姓名',
        //   state:'正常',
        //   signin:'所处位置地址所处位置地址所处位置地址所处位置地址所处位置地址',
        //   signout:'所处位置地址所处位置地址所处位置地址所处位置地址所处位置地址',
        // },
        // {
        //   id:'3',
        //   shopname:'预设门店名称',
        //   checked: false,
        //   naem:'巡店员姓名',
        //   state:'正常',
        //   signin:'所处位置地址所处位置地址所处位置地址所处位置地址所处位置地址',
        //   signout:'所处位置地址所处位置地址所处位置地址所处位置地址所处位置地址',
        // },
        // {
        //   id:'4',
        //   shopname:'预设门店名称',
        //   checked: false,
        //   naem:'巡店员姓名',
        //   state:'正常',
        //   signin:'所处位置地址所处位置地址所处位置地址所处位置地址所处位置地址',
        //   signout:'所处位置地址所处位置地址所处位置地址所处位置地址所处位置地址',
        // },
        // {
        //   id:'5',
        //   shopname:'预设门店名称',
        //   checked: false,
        //   naem:'巡店员姓名',
        //   state:'正常',
        //   signin:'所处位置地址所处位置地址所处位置地址所处位置地址所处位置地址',
        //   signout:'所处位置地址所处位置地址所处位置地址所处位置地址所处位置地址',
        // },
      ]
    }
  },
  methods: {
    getitem(x) {
      this.obj = this.list.find(item =>{
        return item.sign_id == x
      })
      if(this.obj.checked == true){
       console.log(x);
      }else{
        if(this.checked == true){
           this.checked = false
        }
      }
    },
   getallitems(){
      var i
      for(i=0;i<this.list.length;i++){
        this.list[i].checked = this.checked
      }
    },
    change(){
      this.$refs.btn1.className = 'footbtn'
      this.$refs.btn2.className = 'footbtn'
      this.$refs.btn3.className = 'footbtn'
      this.$refs.btn4.className = 'footbtn'
      this.$refs.btn5.className = 'footbtn'
    },
    change1(){
      this.$refs.btn1.className = 'footbtn2'
    },
    change2(){
      this.$refs.btn2.className = 'footbtn2'
    },
    change3(){
      this.$refs.btn3.className = 'footbtn2'
    },
    change4(){
      this.$refs.btn4.className = 'footbtn2'
    },
    change5(){
      this.$refs.btn5.className = 'footbtn2'
    },
    changenoneto1(x){
      this.none = 1
      this.obj = this.list.find(item =>{
        return item.sign_id == x
      })
    },
    changenoneto0(){
      this.none = 0
    },
    getSignList(){
     query(this.term).then((res)=>{
      if(res.error == ''){
        for(var i=0;i<res.data.length;i++){
          var a = {checked: false}
          res.data[i]= {
            ...a,
            ...res.data[i]
          } 
         }
        this.list = res.data
      }else{
          console.log('接口连接失败');
        }
      })
    },
    initData(){
      this.term.conditions.query.and[0].match = this.$route.query
      this.getSignList()
    }
  },
  mounted() {
    this.getSignList()
  },
  watch: {
    '$route': 'initData'
  },
}
</script>

<style scoped>
  .title{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #D9D9D9;
    font-weight: 700;
    /* padding-right: 150px; */
  }
  .contain{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.08);
  }
  .btn{
    border: 1px solid #0B5193;
    border-radius: 4px;
    color: #0B5193;
    background-color: #fff;
  }
  .box{
    /* background: #CECECE; */
    border-radius: 8px;
  }
  .foot{
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
  }
  .footmain{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footleft{
    float: right;
  }
  .footbtn{
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 8px;
  }
  .footbtn2{
    background: #0B5193;
    border: 1px solid #0B5193;
    border-radius: 8px;
    color: #fff;
  }
  .cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 200;
}
.message{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 400px;
  height: 460px;
  left: 570px;
  top: 180px;
  background-color: #fff;
  z-index: 201;
}
.top{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 28px;
  height: 42px;
  background: #FFFFFF;
  font-size: 18px;
  font-weight: 700;
  box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.08);
}
=======
<template>
  <div>
    <Tabbar4></Tabbar4>
    <div class="title" style="height:46px;font-size:14px;padding: 0 40px;">
      <div>
        <el-checkbox v-model="checked"   @change="getallitems()"></el-checkbox>
      </div>
      <div style="width:92px"></div>
      <div style="width:84px">门店</div>
      <div style="width:70px">巡店员</div>
      <div style="width:30px">状态</div>
      <div style="width:420px">签到地址</div>
      <div style="width:420px">签退地址</div>
      <div style="width:110px"></div>
    </div>
    <div class="loop">
      <div class="contain" style="height:132px;font-size:14px;padding: 20px 40px;width: 100%;" v-for="item in list" :key="item.sign_id">
        <el-checkbox v-model=item.checked @change="getitem(item.sign_id)"></el-checkbox>
        <div class="box" style="width:92px;height:92px;">
          <img :src=item.img alt="" style="width: 100%;height: 100%;">
        </div>
        <div style="width:84px">{{ item.store_name }}</div>
        <div style="width:70px">{{ item.patrol_username }}</div>
        <div style="width:30px">{{ item.state }}</div>
        <div style="width:420px">{{ item.sign_in_address }}</div>
        <div style="width:420px">{{ item.sign_out_address }}</div>
        <button class="btn" style="width:110px;height:36px;" @click="changenoneto1(item.sign_id)" >查看报告</button>
      </div>
    </div>
    <div class="message" v-if="none == 1" style="height:444px;width: 600px;">
      <div class="top">
        <div>
          <p>签到报告</p>
        </div>
        <div @click="changenoneto0">
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="mid" style="margin-top:28px;margin-left:40px;font-size: 16px;">
        <div style="margin-bottom:18px">
          <span>门店：</span>
          <span>{{ obj.store_name}}</span>
        </div>
        <div style="margin-bottom:18px">
          <div style="margin-bottom:4px">签到图片</div>
          <img :src=obj.img alt="" style="width:200px;height:120px">
        </div>
        <div style="margin-bottom:18px">
          <span>巡店员：</span>
          <span>{{ obj.patrol_username }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>签到状态：</span>
          <span>{{ obj.state }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>签到地址：</span>
          <span>{{ obj.sign_in_address }}</span>
        </div>
        <div>
          <span>签退地址：</span>
          <span>{{ obj.sign_out_address }}</span>
        </div>
      </div>
    </div>
    <div class="foot" style="height:56px;padding: 10px 60px;">
      <div class="footleft">
        <div class="footmain" style="width:480px;font-size: 14px;">
          <div style="width:46px">共50条</div>
          <div style="width:246px;display: flex;justify-content: space-between;align-items: center;" >
            <button style="width:32px;height:32px;" class="footbtn2" ref="btn1" @click="change(),change1()">1</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn2" @click="change(),change2()">2</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn3" @click="change(),change3()">3</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn4" @click="change(),change4()">4</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn5" @click="change(),change5()">5</button>
          </div>
          <div style="width:108px;display: flex;justify-content: space-between;align-items: center;">
            <div>跳至</div>
            <input type="text" name="" id="" style="width: 40px;height: 28px;">
            <div>页</div>
          </div>
        </div>
      </div>
    </div>
    <div class="cover" v-if="none == 1"></div>
  </div>
</template>

<script>
import Tabbar4 from '@/components/pc/comm/tab/tabbar4.vue'
import { query } from '@/api/api'    
export default {
  name:'qdsj',
  components:{Tabbar4},
  data() {
    return {
      none:'0',
      checked: false,
      obj:{},
      term:{
          auth: 2,
          project: "微督导",
          table: "biz_sign",
          conditions: {
              pagination: {
                  page: 1,
                  pageSize: 5
              },
              fields: [],
              query: {
                  and: [
                    {match:{} }
                  ]
              }
          }
      },
      list:[]
    }
  },
  methods: {
    getitem(x) {
      this.obj = this.list.find(item =>{
        return item.sign_id == x
      })
      if(this.obj.checked == true){
       console.log(x);
      }else{
        if(this.checked == true){
           this.checked = false
        }
      }
    },
   getallitems(){
      var i
      for(i=0;i<this.list.length;i++){
        this.list[i].checked = this.checked
      }
    },
    change(){
      this.$refs.btn1.className = 'footbtn'
      this.$refs.btn2.className = 'footbtn'
      this.$refs.btn3.className = 'footbtn'
      this.$refs.btn4.className = 'footbtn'
      this.$refs.btn5.className = 'footbtn'
    },
    change1(){
      this.$refs.btn1.className = 'footbtn2'
    },
    change2(){
      this.$refs.btn2.className = 'footbtn2'
    },
    change3(){
      this.$refs.btn3.className = 'footbtn2'
    },
    change4(){
      this.$refs.btn4.className = 'footbtn2'
    },
    change5(){
      this.$refs.btn5.className = 'footbtn2'
    },
    changenoneto1(x){
      this.none = 1
      this.obj = this.list.find(item =>{
        return item.sign_id == x
      })
    },
    changenoneto0(){
      this.none = 0
    },
    getSignList(){
     query(this.term).then((res)=>{
      if(res.error == ''){
        for(var i=0;i<res.data.length;i++){
          var a = {checked: false}
          res.data[i]= {
            ...a,
            ...res.data[i]
          } 
         }
        this.list = res.data
      }else{
          console.log('接口连接失败');
        }
      })
    },
    initData(){
      this.term.conditions.query.and[0].match = this.$route.query
      this.getSignList()
    }
  },
  mounted() {
    this.getSignList()
  },
  watch: {
    '$route': 'initData'
  },
}
</script>

<style scoped>
  .title{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #D9D9D9;
    font-weight: 700;
    /* padding-right: 150px; */
  }
  .contain{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.08);
  }
  .btn{
    border: 1px solid #0B5193;
    border-radius: 4px;
    color: #0B5193;
    background-color: #fff;
  }
  .box{
    /* background: #CECECE; */
    border-radius: 8px;
  }
  .foot{
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
  }
  .footmain{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footleft{
    float: right;
  }
  .footbtn{
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 8px;
  }
  .footbtn2{
    background: #0B5193;
    border: 1px solid #0B5193;
    border-radius: 8px;
    color: #fff;
  }
  .cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 200;
}
.message{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 400px;
  height: 460px;
  left: 570px;
  top: 180px;
  background-color: #fff;
  z-index: 201;
}
.top{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 28px;
  height: 42px;
  background: #FFFFFF;
  font-size: 18px;
  font-weight: 700;
  box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.08);
}
>>>>>>> e90c7b4 (暂存)
</style>