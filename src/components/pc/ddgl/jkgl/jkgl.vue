<template>
  <div>
    <Tabbar8 v-on:getdata="getdata"></Tabbar8>
    <div class="title" style="height:46px;font-size:14px;padding: 0 40px;">
      <el-checkbox v-model="checked" @change="getallitems()"></el-checkbox>
      <div style="width:60px">类型</div>
      <div style="width:60px">名称</div>
      <div style="width:70px">序列号</div>
      <div style="width:60px">密码</div>
      <div style="width:166px;">操作</div>
      <div style="width:110px;margin-right: 380px;"></div>
    </div>
    <div class="loop">
      <div class="contain" style="height:60px;font-size:14px;padding: 20px 40px;width: 100%;" v-for="item in list" :key="item.id">
        <el-checkbox v-model="item.checked" @change="getitem(item.id)"></el-checkbox>
        <div style="width:60px">{{ item.type }}</div>
        <div style="width:60px">{{ item.name }}</div>
        <div style="width:70px">{{ item.num }}</div>
        <div style="width:60px">{{ item.password }}</div>
        <div style="width:166px;display: flex;align-items: center;justify-content: space-between;">
          <div style="color: #0B5193;cursor:pointer" @click="changenoneto1">编辑</div>
          <div style="color: #EE6767;cursor:pointer" @click="remove(item.id)">删除</div>
        </div>
        <button class="btn" style="width:110px;height:36px;margin-right: 380px;" @click="changenoneto1">查看设备</button>
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
    <div class="message" v-if="none == 1" style="height:388px;width: 600px;">
      <div class="top">
        <div>
          <p>编辑(新增)设备</p>
        </div>
        <div @click="changenoneto0">
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="mid" style="margin-top:28px;margin-left:40px;font-size: 16px;">
        <div>
          <span>设备类型：</span>
          <select name="" id="" style="width:355px;height:36px;border: 1px solid #999999;border-radius: 4px;padding-left: 20px;margin-bottom: 20px;">
            <option value="01" style="font-size: 16px;">类型一 </option> 
            <option value="02" style="font-size: 16px;">类型二 </option> 
          </select>
        </div>
        <div>
          <span>名称：</span>
          <input type="text" name="" id="" style="width:460px;height:36px;border: 1px solid #999999;border-radius: 4px;padding-left: 20px;margin-bottom: 20px;">
        </div>
        <div>
          <span>序列号：</span>
          <input type="text" name="" id="" style="width:460px;height:36px;border: 1px solid #999999;border-radius: 4px;padding-left: 20px;margin-bottom: 20px;">
        </div>
        <div>
          <span>密码：</span>
          <input type="text" name="" id="" style="width:460px;height:36px;border: 1px solid #999999;border-radius: 4px;padding-left: 20px;margin-bottom: 20px;">
        </div>
      </div>
      <div class="megfoot">
        <el-button class="bodercolor btn2" @click="changenoneto0">取消</el-button>
        <el-button type="primary" class="colorblue"  style="width:84px;height:36px;padding: 0;line-height: 0;" @click="changenoneto0">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Tabbar8 from '@/components/pc/comm/tab/tabbar8.vue'
export default {
name:'jkgl',
components:{Tabbar8},
data() {
  return {
    none:'0',
    checked: false,
    list:[
      {
        id:'1',
        checked: false,
        type:'设备类型',
        name:'设备名称',
        num:'设备序列号',
        password:'设备密码'
      },
      {
        id:'2',
        checked: false,
        type:'设备类型',
        name:'设备名称',
        num:'设备序列号',
        password:'设备密码'
      },
      {
        id:'3',
        checked: false,
        type:'设备类型',
        name:'设备名称',
        num:'设备序列号',
        password:'设备密码'
      },
      {
        id:'4',
        checked: false,
        type:'设备类型',
        name:'设备名称',
        num:'设备序列号',
        password:'设备密码'
      },
      {
        id:'5',
        checked: false,
        type:'设备类型',
        name:'设备名称',
        num:'设备序列号',
        password:'设备密码'
      },
      {
        id:'6',
        checked: false,
        type:'设备类型',
        name:'设备名称',
        num:'设备序列号',
        password:'设备密码'
      },
      {
        id:'7',
        checked: false,
        type:'设备类型',
        name:'设备名称',
        num:'设备序列号',
        password:'设备密码'
      },
      {
        id:'8',
        checked: false,
        type:'设备类型',
        name:'设备名称',
        num:'设备序列号',
        password:'设备密码'
      },
      {
        id:'9',
        checked: false,
        type:'设备类型',
        name:'设备名称',
        num:'设备序列号',
        password:'设备密码'
      },
      {
        id:'10',
        checked: false,
        type:'设备类型',
        name:'设备名称',
        num:'设备序列号',
        password:'设备密码'
      },
      {
        id:'11',
        checked: false,
        type:'设备类型',
        name:'设备名称',
        num:'设备序列号',
        password:'设备密码'
      },

    ]
  }
},
methods: {
  remove(x){
      let list = this.list.filter((val) => val.id !== x)
      this.list = list
    },
  getitem(x) {
      if(this.list[x-1].checked == true){
       console.log(x);}
       else{
        if(this.checked == true)
        this.checked = false
      }
    },
   getallitems(){
      var i
      for(i=0;i<this.list.length;i++){
        this.list[i].checked = this.checked
      }
    },
    getdata: function (typedata) {
        // childValue就是子组件传过来的值
        this.none = typedata
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
    changenoneto1(){
      this.none = 1
    },
    changenoneto0(){
      this.none = 0
    },
    changenone2to0(){
      this.none2 = 0
    },
    changenone2to1(){
      this.none2 = 1
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
.megfoot{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 40px;
  gap: 28px;
  height: 68px;
  background: #FFFFFF;
  box-shadow: inset 0px 0.5px 0px rgba(0, 0, 0, 0.08);
}
.colorblue{
  background-color:  #0B5193;
  border: 1px solid #0B5193;
  border-radius: 4px;
  color: #FFFFFF;
}
.bodercolor{
  border-color: #0B5193;
  color: #0B5193;
}
.btn2{
  width: 44px;
  height: 22px;
  padding: 0;
  line-height: 0;
}
</style>