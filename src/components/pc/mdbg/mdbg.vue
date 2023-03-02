<template>
  <div>
    <Tabbar3></Tabbar3>
    <div class="title" style="height:46px;font-size:14px;padding:0 40px;">
      <div style="width:85px">门店</div>
      <div style="width:85px">使用模板</div>
      <div style="width:60px">实际得分</div>
      <div style="width:45px">百分制</div>
      <div style="width:45px">结果</div>
      <div style="width:45px">巡店员</div>
      <div style="width:60px">巡店方式</div>
      <div style="width:130px">巡店时间</div>
      <div style="width:60px">问题总数</div>
      <div style="width:60px">待整改数</div>
      <div style="width:60px">待审核数</div>
      <div style="width:60px">已整改数</div>
      <div style="width:110px;"></div>
    </div>
    <div class="loop">
      <div class="contain" style="height:60px;font-size:14px;padding: 0 40px;" v-for="item in list" :key="item.id">
        <div style="width:85px">{{ item.shopname }}</div>
        <div style="width:85px">{{ item.dome }}</div>
        <div style="width:60px">{{ item.score }}</div>
        <div style="width:45px">{{ item.percentage }}</div>
        <div style="width:45px;color: #0BBE28;" v-if="item.type==1">{{ item.result }}</div>
        <div style="width:45px;color: #E19621;" v-if="item.type==2">{{ item.result }}</div>
        <div style="width:45px;color: #E83118;" v-if="item.type==3">{{ item.result }}</div>
        <div style="width:45px">{{ item.name }}</div>
        <div style="width:60px">{{ item.way }}</div>
        <div style="width:130px">{{ item.time }}</div>
        <div style="width:60px">{{ item.problem }}</div>
        <div style="width:60px">{{ item.no1 }}</div>
        <div style="width:60px">{{ item.process }}</div>
        <div style="width:60px">{{ item.no2 }}</div>
        <button class="btn" style="width:110px;height:36px" @click="changenoneto1">查看报告</button>
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
    <div class="message" v-if="none == 1" style="height:800px;width: 600px;">
      <div class="top">
        <div>
          <p>任务详情</p>
        </div>
        <div @click="changenoneto0">
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="mid" style="margin-top:28px;margin-left:40px;font-size: 16px;">
        <div style="margin-bottom:14px">
          <span>门店：</span>
          <span>某某门店</span>
        </div>
        <div style="margin-bottom:14px">
          <span>使用模板：</span>
          <span>店员-日检</span>
        </div>
        <div style="margin-bottom:14px">
          <span>实际得分：</span>
          <span>80</span>
        </div>
        <div style="margin-bottom:14px">
          <span>百分制：</span>
          <span>100%</span>
        </div>
        <div style="margin-bottom:14px">
          <span>结果：</span>
          <span style="color:rgba(11, 190, 40, 1)">优秀</span>
        </div>
        <div style="margin-bottom:14px">
          <span>巡店员：</span>
          <span>张某某</span>
        </div>
        <div style="margin-bottom:14px">
          <span>巡店方式：</span>
          <span>远程巡店</span>
        </div>
        <div style="margin-bottom:14px">
          <span>巡店时间：</span>
          <span>2022-11-24 14:46</span>
        </div>
        <div style="margin-bottom:14px;width:480px">
          <span>门店范围</span>
          <span>某门店、某门店等共x家</span>
          <span style="display:inline-block; float:right;color: rgba(11, 81, 147, 1);">展开</span>
        </div>
        <div style="padding-left:14px">
          <div>问题一：某某检查不合格</div>
          <img src="@/assets/pc/img/Rectangle 125.png" alt="" style="width:200px;height:120px">
        </div>
        <div style="padding-left:14px">
          <div>问题二：某某某某检查不合格</div>
          <img src="@/assets/pc/img/Rectangle 124.png" alt="" style="width:200px;height:120px">
        </div>
        <div style="margin-bottom:14px">
          <span>待整改数：</span>
          <span>2</span>
        </div>
        <div style="margin-bottom:14px">
          <span>待审核数：</span>
          <span>0</span>
        </div>
        <div>
          <span>已整改数：</span>
          <span>0</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabbar3 from '@/components/pc/comm/tab/tabbar3.vue'
export default {
  name:'mdbg',
  components:{Tabbar3},
  data() {
    return {
      none:'0',
      list:[{
        id:'1',
        shopname:'预设门店名称',
        dome:'预设模板名称',
        score:'80',
        percentage:'100%',
        result:'优秀',
        type:'1',
        name:'姓名',
        way:'远程巡店',
        time:'2022-11-24 14:32',
        problem:'0',
        no1:'0',
        process:'0',
        no2:'0'
      },
      {
        id:'2',
        shopname:'预设门店名称',
        dome:'预设模板名称',
        score:'80',
        percentage:'100%',
        result:'合格',
        type:'2',
        name:'姓名',
        way:'远程巡店',
        time:'2022-11-24 14:32',
        problem:'0',
        no1:'0',
        process:'0',
        no2:'0'
      },
      {
        id:'3',
        shopname:'预设门店名称',
        dome:'预设模板名称',
        score:'80',
        percentage:'100%',
        result:'优秀',
        type:'1',
        name:'姓名',
        way:'远程巡店',
        time:'2022-11-24 14:32',
        problem:'0',
        no1:'0',
        process:'0',
        no2:'0'
      },
      {
        id:'4',
        shopname:'预设门店名称',
        dome:'预设模板名称',
        score:'80',
        percentage:'100%',
        result:'合格',
        type:'2',
        name:'姓名',
        way:'远程巡店',
        time:'2022-11-24 14:32',
        problem:'0',
        no1:'0',
        process:'0',
        no2:'0'
      },
      {
        id:'5',
        shopname:'预设门店名称',
        dome:'预设模板名称',
        score:'80',
        percentage:'100%',
        result:'优秀',
        type:'1',
        name:'姓名',
        way:'远程巡店',
        time:'2022-11-24 14:32',
        problem:'0',
        no1:'0',
        process:'0',
        no2:'0'
      },
      {
        id:'6',
        shopname:'预设门店名称',
        dome:'预设模板名称',
        score:'80',
        percentage:'100%',
        result:'优秀',
        type:'1',
        name:'姓名',
        way:'远程巡店',
        time:'2022-11-24 14:32',
        problem:'0',
        no1:'0',
        process:'0',
        no2:'0'
      },
      {
        id:'7',
        shopname:'预设门店名称',
        dome:'预设模板名称',
        score:'80',
        percentage:'100%',
        result:'不合格',
        type:'3',
        name:'姓名',
        way:'远程巡店',
        time:'2022-11-24 14:32',
        problem:'0',
        no1:'0',
        process:'0',
        no2:'0'
      },
      {
        id:'8',
        shopname:'预设门店名称',
        dome:'预设模板名称',
        score:'80',
        percentage:'100%',
        result:'不合格',
        type:'3',
        name:'姓名',
        way:'远程巡店',
        time:'2022-11-24 14:32',
        problem:'0',
        no1:'0',
        process:'0',
        no2:'0'
      },
      {
        id:'9',
        shopname:'预设门店名称',
        dome:'预设模板名称',
        score:'80',
        percentage:'100%',
        result:'不合格',
        type:'3',
        name:'姓名',
        way:'远程巡店',
        time:'2022-11-24 14:32',
        problem:'0',
        no1:'0',
        process:'0',
        no2:'0'
      },
      {
        id:'10',
        shopname:'预设门店名称',
        dome:'预设模板名称',
        score:'80',
        percentage:'100%',
        result:'优秀',
        type:'1',
        name:'姓名',
        way:'远程巡店',
        time:'2022-11-24 14:32',
        problem:'0',
        no1:'0',
        process:'0',
        no2:'0'
      },
      {
        id:'11',
        shopname:'预设门店名称',
        dome:'预设模板名称',
        score:'80',
        percentage:'100%',
        result:'合格',
        type:'2',
        name:'姓名',
        way:'远程巡店',
        time:'2022-11-24 14:32',
        problem:'0',
        no1:'0',
        process:'0',
        no2:'0'
      },

    ]
    }
  },
  methods: {
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
    changenoneto1(){
      this.none = 1
    },
    changenoneto0(){
      this.none = 0
    }
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
  .btn:hover{
    background-color: #d6d6d6;
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
  left: 520px;
  top: 80px;
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
</style>