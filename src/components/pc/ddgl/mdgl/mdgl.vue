<template>
  <div>
    <Tabbar5></Tabbar5>
    <div class="title" style="height:46px;font-size:14px;padding: 0 40px;">
      <el-checkbox v-model="checked" @change="getallitems()"></el-checkbox>
      <div style="width:70px">名称</div>
      <div style="width:280px">地址</div>
      <div style="width:196px">权限</div>
      <div style="width:166px;margin-right: 210px;">操作</div>
    </div>
    <div class="loop">
      <div class="contain" style="height:60px;font-size:14px;padding: 20px 40px;width: 100%;" v-for="item in list" :key="item.id">
        <el-checkbox v-model="item.checked" @change="getitem(item.id)"></el-checkbox>
        <div >{{ item.name }}</div>
        <div >{{ item.address }}</div>
        <div >{{ item.power }}</div>
        <div style="width:166px;display: flex;align-items: center;justify-content: space-between;margin-right: 210px;">
          <div style="color: #0B5193;cursor:pointer" @click="changenoneto1">编辑</div>
          <div style="color: #EE6767;cursor:pointer" @click="remove(item.id)">删除</div>
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
    <div class="message" v-if="none == 1" style="height:580px;width: 600px;">
      <div class="top">
        <div>
          <p>编辑门店</p>
        </div>
        <div @click="changenoneto0">
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="mid" style="margin-top:28px;margin-left:40px;font-size: 16px;">
        <div>
          <span>名称：</span>
          <input type="text" name="" id="" style="width:460px;height:36px;border: 1px solid #999999;border-radius: 4px;padding-left: 20px;margin-bottom: 20px;">
        </div>
        <div>
          <span>地址：</span>
          <input type="text" name="" id="" style="width:460px;height:36px;border: 1px solid #999999;border-radius: 4px;padding-left: 20px;margin-bottom: 20px;">
        </div>
        <el-button class="bodercolor" style="width:100px;height:36px;padding: 0;line-height: 0;margin-bottom: 20px;margin-left: 48px;">地址解析</el-button>
        <div style="display: flex;margin-bottom: 20px;">
          <div>位置：</div>
          <img src="@/assets/pc/img/Frame 909.png" alt="">
        </div>
      </div>
      <div class="megfoot">
        <el-button class="bodercolor btn" @click="changenoneto0">取消</el-button>
        <el-button type="primary" class="colorblue"  style="width:84px;height:36px;padding: 0;line-height: 0;" @click="changenone2to1">下一步</el-button>
      </div>
    </div>
    <div class="message" v-if="none2 == 1" style="height:580px;width: 600px;">
      <div class="top">
        <div>
          <p>编辑门店>证件信息</p>
        </div>
        <div @click="changenoneto0(),changenone2to0()">
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="mid" style="margin-top:28px;margin-left:40px;font-size: 16px;">
        <div style="display:flex;margin-bottom: 20px;">
          <div>营业执照：</div>
          <div style="width: 100px;height: 80px;border: 1px dashed #999999;border-radius: 4px;text-align: center;">
            <p style="font-size: 20px;margin-bottom: 5px;">+</p>
            <p style="margin-top: 0;">点击上传</p>
          </div>
        </div>
        <div>
          <span>经营范围：</span>
          <input type="text" name="" id="" style="width:435px;height:36px;border: 1px solid #999999;border-radius: 4px;padding-left: 20px;margin-bottom: 20px;">
        </div>
        <div style="margin-bottom: 20px;">
          <span>营业执照有效期：</span>
          <el-radio-group v-model="radio">
            <el-radio :label="1">长期</el-radio>
            <el-radio :label="2">自定义</el-radio>
          </el-radio-group>
        </div>
        <div style="display:flex;margin-bottom: 20px;">
          <div>食品营业许可证：</div>
          <div style="width: 100px;height: 80px;border: 1px dashed #999999;border-radius: 4px;text-align: center;">
            <p style="font-size: 20px;margin-bottom: 5px;">+</p>
            <p style="margin-top: 0;">点击上传</p>
          </div>
        </div>
        <div>
          <span>许可证范围：</span>
          <input type="text" name="" id="" style="width:420px;height:36px;border: 1px solid #999999;border-radius: 4px;padding-left: 20px;margin-bottom: 20px;">
        </div>
        <div style="margin-bottom: 20px;">
          <span>许可证有效期：</span>
          <el-radio-group v-model="radio">
            <el-radio :label="1">长期</el-radio>
            <el-radio :label="2">自定义</el-radio>
          </el-radio-group>
        </div>

      </div>
      <div class="megfoot">
        <el-button class="bodercolor btn" @click="changenone2to0">取消</el-button>
        <el-button type="primary" class="colorblue"  style="width:84px;height:36px;padding: 0;line-height: 0;" @click="changenone2to0(),changenoneto0()">包存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Tabbar5 from '@/components/pc/comm/tab/tabbar5.vue'
export default {
  name:'mdgl',
  components:{Tabbar5},
  data() {
    return {
      none:'0',
      none2:'0',
      radio:'',
      checked: false,
      list:[
        {
          id:'1',
          checked: false,
          name:'预设门店名',
          address:'福建省福州市某某区某某街道某某小区几号楼',
          power:'后台登录、检查模板、巡店任务'
        },
        {
          id:'2',
          checked: false,
          name:'预设门店名',
          address:'福建省福州市某某区某某街道某某小区几号楼',
          power:'后台登录、检查模板、巡店任务'
        },
        {
          id:'3',
          checked: false,
          name:'预设门店名',
          address:'福建省福州市某某区某某街道某某小区几号楼',
          power:'后台登录、检查模板、巡店任务'
        },
        {
          id:'4',
          checked: false,
          name:'预设门店名',
          address:'福建省福州市某某区某某街道某某小区几号楼',
          power:'后台登录、检查模板、巡店任务'
        },
        {
          id:'5',
          checked: false,
          name:'预设门店名',
          address:'福建省福州市某某区某某街道某某小区几号楼',
          power:'后台登录、检查模板、巡店任务'
        },
        {
          id:'6',
          checked: false,
          name:'预设门店名',
          address:'福建省福州市某某区某某街道某某小区几号楼',
          power:'后台登录、检查模板、巡店任务'
        },
        {
          id:'7',
          checked: false,
          name:'预设门店名',
          address:'福建省福州市某某区某某街道某某小区几号楼',
          power:'后台登录、检查模板、巡店任务'
        },
        {
          id:'8',
          checked: false,
          name:'预设门店名',
          address:'福建省福州市某某区某某街道某某小区几号楼',
          power:'后台登录、检查模板、巡店任务'
        },
        {
          id:'9',
          checked: false,
          name:'预设门店名',
          address:'福建省福州市某某区某某街道某某小区几号楼',
          power:'后台登录、检查模板、巡店任务'
        },
        {
          id:'10',
          checked: false,
          name:'预设门店名',
          address:'福建省福州市某某区某某街道某某小区几号楼',
          power:'后台登录、检查模板、巡店任务'
        },
        {
          id:'11',
          checked: false,
          name:'预设门店名',
          address:'福建省福州市某某区某某街道某某小区几号楼',
          power:'后台登录、检查模板、巡店任务'
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
    color: #0B5193;
    background-color: #fff;
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
.btn{
  width: 44px;
  height: 22px;
  padding: 0;
  line-height: 0;
}
</style>