<template>
  <div>
    <div class="title" style="height:46px;font-size:14px;padding: 0 40px;">
      <div style="width:20px"></div>
      <div style="width:70px">门店</div>
      <div style="width:90px">自检任务数</div>
      <div style="width:90px">已完成自检数</div>
      <div style="width:60px">自检人数</div>
      <div style="width:50px;margin-right: 300px;">问题数</div>
    </div>
    <div class="loop">
      <div class="contain" style="height:60px;font-size:14px;padding: 20px 40px;width: 100%;" v-for="item in list" :key="item.id">
        <el-checkbox v-model="item.checked" @change="getitem(item.id)"></el-checkbox>
        <div style="width:70px">{{ item.name }}</div>
        <div style="width:90px">{{ item.selfchecking }}</div>
        <div style="width:90px">{{ item.finished }}</div>
        <div style="width:60px">{{ item.number }}</div>
        <div style="width:50px;margin-right: 300px;">{{ item.problem }}</div>
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
  </div>
</template>

<script>
export default {
name:'zjfx',
data() {
  return {
    checked: false,
    list:[
      {
        id:'1',
        checked: false,
        name:'预设门店名',
        selfchecking:'0',
        finished:'0',
        number:'0',
        problem:'0',
      },
      {
        id:'2',
        checked: false,
        name:'预设门店名',
        selfchecking:'0',
        finished:'0',
        number:'0',
        problem:'0',
      },
      {
        id:'3',
        checked: false,
        name:'预设门店名',
        selfchecking:'0',
        finished:'0',
        number:'0',
        problem:'0',
      },
      {
        id:'4',
        checked: false,
        name:'预设门店名',
        selfchecking:'0',
        finished:'0',
        number:'0',
        problem:'0',
      },
      {
        id:'5',
        checked: false,
        name:'预设门店名',
        selfchecking:'0',
        finished:'0',
        number:'0',
        problem:'0',
      },
      {
        id:'6',
        checked: false,
        name:'预设门店名',
        selfchecking:'0',
        finished:'0',
        number:'0',
        problem:'0',
      },
      {
        id:'7',
        checked: false,
        name:'预设门店名',
        selfchecking:'0',
        finished:'0',
        number:'0',
        problem:'0',
      },
      {
        id:'8',
        checked: false,
        name:'预设门店名',
        selfchecking:'0',
        finished:'0',
        number:'0',
        problem:'0',
      },
      {
        id:'9',
        checked: false,
        name:'预设门店名',
        selfchecking:'0',
        finished:'0',
        number:'0',
        problem:'0',
      },
      {
        id:'10',
        checked: false,
        name:'预设门店名',
        selfchecking:'0',
        finished:'0',
        number:'0',
        problem:'0',
      },
      {
        id:'11',
        checked: false,
        name:'预设门店名',
        selfchecking:'0',
        finished:'0',
        number:'0',
        problem:'0',
      },
    ]
  }
},
methods: {
  getitem(x) {
      if(this.list[x-1].checked == true){
       console.log(x);}
       else{
        if(this.checked == true)
        this.checked = false
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
    color: #fff;
    background-color: #0B5193;
  }
  .box{
    background: #CECECE;
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
</style>