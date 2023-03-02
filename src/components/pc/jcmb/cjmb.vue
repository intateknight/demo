<template>
  <div class="contain">
      <div class="box" v-for="item in Template" :key="item.index">
        <div class="left">
          <div>
            <p style="margin-top: 0;">名称</p>
            <p>版本</p>
            <p>状态</p>
            <p>创建人</p>
            <p>创建时间</p>
            <p>更新时间</p>
          </div>
          <div>
            <p style="margin-top: 0;">{{ item.name }}</p>
            <p>{{ item.edition }}</p>
            <p>{{ item.state }}</p>
            <p>{{ item.creator }}</p>
            <p>{{ item.time }}</p>
            <p>{{ item.update }}</p>
          </div>
        </div>
        <div class="right">
          <el-button type="primary" class="btn colorblue" v-if="item.type == 1" @click="changetype(item.id)">发布</el-button>
          <el-button type="success" class="btn colorgueen" v-if="item.type == 2">已发布</el-button>
          <el-button class="btn bodercolor" @click="push('indexpc/jbxx')">编辑</el-button>
          <el-button type="danger" class="btn" @click="remove(item.id)">删除</el-button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'cjmb',
  data() {
    return {
      Template:[
        {
          id:'1',
          name:'预设名称',
          edition:'预设版本',
          state:'预设状态',
          creator:'预设创建人',
          time:'预设创建时间',
          update:'预设更新时间',
          type:'1'
        },
        { 
          id:'2',
          name:'预设名称',
          edition:'预设版本',
          state:'预设状态',
          creator:'预设创建人',
          time:'预设创建时间',
          update:'预设更新时间',
          type:'1'
        },
        { 
          id:'3',
          name:'预设名称',
          edition:'预设版本',
          state:'预设状态',
          creator:'预设创建人',
          time:'预设创建时间',
          update:'预设更新时间',
          type:'2'
        },
        {
          id:'4',
          name:'预设名称',
          edition:'预设版本',
          state:'预设状态',
          creator:'预设创建人',
          time:'预设创建时间',
          update:'预设更新时间',
          type:'1'
        },
        {
          id:'5',
          name:'预设名称',
          edition:'预设版本',
          state:'预设状态',
          creator:'预设创建人',
          time:'预设创建时间',
          update:'预设更新时间',
          type:'1'
        },
        {
          id:'6',
          name:'预设名称',
          edition:'预设版本',
          state:'预设状态',
          creator:'预设创建人',
          time:'预设创建时间',
          update:'预设更新时间',
          type:'2'
        },
      ]
    }
  },
  methods: {
    remove(x){
      let list = this.Template.filter((val) => val.id !== x)
      this.Template = list
    },
    push(x){
      this.$router.push(x)
    },
    changetype(x){
      this.Template[x-1].type = 2
    }
  },
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
.colorgueen{
  background-color:  #BEF5D8;
  border-color: #BEF5D8;
  color:  #3E9C2E;
}
</style>