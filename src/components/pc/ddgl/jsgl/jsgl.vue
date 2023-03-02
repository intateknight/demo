<template>
  <div>
    <Tabbar7 v-on:getdata="getdata"></Tabbar7>
    <div class="contain">
      <div class="box" v-for="item in list" :key="item.id">
        <div class="left">
          <div style="color: #6D6D6D;">
            <p style="margin-top: 0;margin-bottom: 16px;">名称</p>
            <p>权限</p>
          </div>
          <div>
             <p style="margin-top: 0;margin-bottom: 16px;">{{ item.job }}</p>
             <p>{{ item.p1 }}</p>
             <p>{{ item.p2 }}</p>
             <p>{{ item.p3 }}</p>
             <p>{{ item.p4 }}</p>
             <p>{{ item.p5 }}</p>
             <p>{{ item.p6 }}</p>
             <p>{{ item.p7 }}</p>
             <p>{{ item.p8 }}</p>
          </div>
        </div>
        <div class="right">
          <el-button class="btn bodercolor" @click="changenoneto1">编辑</el-button>
          <el-button type="danger" class="btn" @click="remove(item.id)">删除</el-button>
        </div>
      </div>
    </div>
    <div class="cover" v-if="none == 1"></div>
    <div class="message" v-if="none == 1" style="height:460px;width: 600px;">
      <div class="top">
        <div>
          <p>编辑(新增)角色</p>
        </div>
        <div @click="changenoneto0">
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="mid" style="margin-top:28px;margin-left:40px;font-size: 16px;">
        <div style="margin-bottom: 18px;">
          <span>角色名称：</span>
          <input type="text" name="" id="" style="width:460px;height:36px;border: 1px solid #999999;border-radius: 4px;padding-left: 20px;margin-bottom: 20px;">
        </div>
        <div style="display:flex;margin-bottom: 40px;">
          <span>提醒设置：</span>
          <div style="width:360px;display: flex;flex-wrap: wrap;">
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;"><span>APP端登录</span></div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">门店巡店分析</div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">签到</div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">现场巡店</div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">门店得分排行</div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">巡店报告</div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">远程巡店</div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">门店管理</div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">整改事件</div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">视频巡店</div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">用户管理</div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">后台登录</div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">门店列表</div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">检查模板</div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">选择图片视频</div>
            <div style="margin-right: 26px;"><input type="checkbox" name="" id="" style="background: #FFFFFF;border: 1px solid #E6E6E6;border-radius: 4px;margin-right: 8px;margin-bottom: 12px;">巡店任务</div>
          </div>
        </div>
      </div>
      <div class="megfoot">
        <el-button class="bodercolor btn" @click="changenoneto0" style="width:84px;height:36px;padding: 0;line-height: 0;">取消</el-button>
        <el-button type="primary" class="colorblue"  style="width:84px;height:36px;padding: 0;line-height: 0;" @click="changenoneto0">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import  Tabbar7 from '@/components/pc/comm/tab/tabbar7.vue'
export default {
  name:'jsgl',
  components:{Tabbar7},
  data() {
    return {
      none:'0',
      list:[
        {
          id:'1',
          job:'员工',
          p1:'APP端登录、现场巡店',
          p2:'远程巡店、视频巡店',
          p3:'门店列表、选择图片视频',
          p4:'门店巡店分析、门店得分排行',
          p5:'门店管理、用户管理',
          p6:'检查模板、巡店任务',
          p7:'签到、巡店报告',
          p8:'整改事件、后台登录',
        },
        {
          id:'2',
          job:'店长',
          p1:'APP端登录、现场巡店',
          p2:'远程巡店、视频巡店',
          p3:'门店列表、选择图片视频',
          p4:'门店巡店分析、门店得分排行',
          p5:'门店管理、用户管理',
          p6:'检查模板、巡店任务',
          p7:'签到、巡店报告',
          p8:'整改事件、后台登录',
        },
        {
          id:'3',
          job:'督导',
          p1:'APP端登录、现场巡店',
          p2:'远程巡店、视频巡店',
          p3:'门店列表、选择图片视频',
          p4:'门店巡店分析、门店得分排行',
          p5:'门店管理、用户管理',
          p6:'检查模板、巡店任务',
          p7:'签到、巡店报告',
          p8:'整改事件、后台登录',
        },
      ]
    }
  },
  methods:{
    getdata: function (typedata) {
        // childValue就是子组件传过来的值
        this.none = typedata
      },
    changenoneto1(){
      this.none = 1
    },
    changenoneto0(){
      this.none = 0
    },
    remove(x){
      let list = this.list.filter((val) => val.id !== x)
      this.list = list
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.contain{
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
}
.box{
  display: flex;
  flex-direction: row;
  padding: 14px 0px 14px 20px;
  gap: 16px;
  width: 9.4rem;
  height: 4.42rem;
  background: #FFFFFF;
  border-radius: 8px;
  margin-right: 8px;
  margin-bottom: 6px;
}
.left{
  display: flex;
  justify-content: space-between;
  width: 210px;
  height: 140px;
  font-size: 10px;
}
.right{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 166px;
  height: 130px;
  padding: 20px 0;
}
.left div:last-child{
  float: right;
  text-align: right;
}
.btn{
  width: 100px;
  height: 30px;
}
.el-button+.el-button{
  margin-left: 0;
}
.bodercolor{
  border-color: #0B5193;
  color: #0B5193;
}
.colorblue{
  background-color:  #0B5193;
  border-color:  #0B5193;
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
</style>