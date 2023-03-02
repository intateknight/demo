<template>
  <div>
    <Tabbar2></Tabbar2>
    <div class="contain">
      <div class="box" v-for="item in Template" :key="item.index">
        <div class="left">
          <div>
            <p style="margin-top: 0;">名称</p>
            <p>版本</p>
            <p>状态</p>
            <p>创建人</p>
            <p>创建时间</p>
            <p>有效时间</p>
          </div>
          <div>
            <p style="margin-top: 0;">{{ item.name }}</p>
            <p>{{ item.edition }}</p>
            <p>{{ item.state }}</p>
            <p>{{item.creator}}</p>
            <p>{{ item.time }}</p>
            <p>{{ item.update }}</p>
          </div>
        </div>
        <div class="right">
          <el-button type="primary" class="btn colorblue" v-if="item.type == 1" @click="changetype(item.id)">发布</el-button>
          <el-button class="btn bodercolor" @click="changenoneto1">详情</el-button>
          <el-button type="danger" class="btn" @click="remove(item.id)">删除</el-button>
        </div>
      </div>
    </div>
    <div class="cover" v-if="none == 1"></div>
    <div class="message" v-if="none == 1">
      <div class="top">
        <div>
          <p>任务详情</p>
        </div>
        <div @click="changenoneto0">
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="mid" style="margin-top:28px;margin-left:40px;font-size: 16px;">
        <div style="margin-bottom:20px">
          <span>任务名称：</span>
          <span>某某名称</span>
        </div>
        <div style="margin-bottom:20px">
          <span>任务类型：</span>
          <span>某某类型</span>
        </div>
        <div style="margin-bottom:20px">
          <span>检查模板</span>
          <span>某模板</span>
        </div>
        <div style="margin-bottom:20px;width:480px">
          <span>门店范围</span>
          <span>某门店、某门店等共x家</span>
          <span style="display:inline-block; float:right;color: rgba(11, 81, 147, 1);">展开</span>
        </div>
        <div style="margin-bottom:20px">
          <span>巡店员：</span>
          <span>某某</span>
        </div>
        <div style="margin-bottom:20px">
          <span>审核员：</span>
          <span>某某某</span>
        </div>
        <div style="margin-bottom:20px">
          <span>有效期：</span>
          <span>2022-11-24至2022-11-25</span>
        </div>
        <div style="margin-bottom:20px">
          <span>状态：</span>
          <span style="display:inline-block;width:68px;height:28px;background-color:#BEF5D8;color: #3E9C2E;text-align: center;line-height: 28px;">已发布</span>
        </div>
        <div style="margin-bottom:20px">
          <span>循环方式：</span>
          <span>单次任务</span>
        </div>
        <div style="margin-bottom:20px">
          <span>提醒设置：</span>
          <span>任务开始时</span>
        </div>
        <div style="margin-bottom:20px"> 
          <span>任务说明：</span>
          <span>无</span>
        </div>
        <div style="margin-bottom:20px">
          <span>创建人：</span>
          <span>某某</span>
        </div>
        <div style="margin-bottom:20px">
          <span>创建时间：</span>
          <span>2022-11-24 14:46</span>
        </div>
        <div>
          <span>有效时间：</span>
          <span>2022-11-24 14:46</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabbar2 from '@/components/pc/comm/tab/tabbar2.vue'
export default {
  name:'mdrw',
  components:{Tabbar2},
  data() {
    return {
      none:'0',
      Template:[
        {
          id:'1',
          name:'预设名称',
          edition:'预设版本',
          state:'预设状态',
          creator:'预设创建人',
          time:'预设创建时间',
          update:'预设有效时间',
          type:'1'
        },
        { 
          id:'2',
          name:'预设名称',
          edition:'预设版本',
          state:'预设状态',
          creator:'预设创建人',
          time:'预设创建时间',
          update:'预设有效时间',
          type:'1'
        },
        { 
          id:'3',
          name:'预设名称',
          edition:'预设版本',
          state:'预设状态',
          creator:'预设创建人',
          time:'预设创建时间',
          update:'预设有效时间',
          type:'2'
        },
        {
          id:'4',
          name:'预设名称',
          edition:'预设版本',
          state:'预设状态',
          creator:'预设创建人',
          time:'预设创建时间',
          update:'预设有效时间',
          type:'2'
        },
        {
          id:'5',
          name:'预设名称',
          edition:'预设版本',
          state:'预设状态',
          creator:'预设创建人',
          time:'预设创建时间',
          update:'预设有效时间',
          type:'2'
        },
        {
          id:'6',
          name:'预设名称',
          edition:'预设版本',
          state:'预设状态',
          creator:'预设创建人',
          time:'预设创建时间',
          update:'预设有效时间',
          type:'2'
        },
      ]
    }
  },
  methods:{
    changenoneto1(){
      this.none = 1
    },
    changenoneto0(){
      this.none = 0
    },
    remove(x){
      let list = this.Template.filter((val) => val.id !== x)
      this.Template = list
    },
    changetype(x){
      this.Template[x-1].type = 2
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
  padding: 8px 0;
}
.left div p{
  margin-top: 11px;
}
.left div:last-child{
  font-weight: 700;
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
  left: 520px;
  top: 100px;
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
.mid{
  color: #000000;
}
.colorgueen{
  background-color:  #BEF5D8;
  border-color: #BEF5D8;
  color:  #3E9C2E;
}

</style>