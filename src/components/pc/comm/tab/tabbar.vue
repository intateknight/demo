<template>
  <div class="tabbar">
    <div class="left">
      <button  class="colorblue"  @click="changetypeto1(),change(),change1()" ref="btn1" style="width:70px;height:36px;margin-left:40px;font-size: 16px;">全部</button>
      <button  class="colorgrey" @click="changetypeto2(),change(),change2()" ref="btn2" style="width:70px;height:36px;margin-left:40px;font-size: 16px;">店员</button>
      <button  class="colorgrey" @click="changetypeto2(),change(),change3()" ref="btn3" style="width:70px;height:36px;margin-left:40px;font-size: 16px;">督导</button>
      <button  class="colorgrey" @click="changetypeto2(),change(),change4()" ref="btn4" style="width:70px;height:36px;margin-left:40px;font-size: 16px;">店长</button>
    </div>
    <div class="right mr40" >
      <el-input
        placeholder="搜索"
        prefix-icon="el-icon-search"
        v-model="value"
        class="search">
      </el-input>
      <el-button type="primary" size="mini" class="ml20 blue">搜索</el-button>
      <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini" class="ml20 blue" v-if="type==1" @click="changenoneto1">新增分类</el-button>
      <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini" class="ml20 blue" v-if="type==2" @click="push">新增模板</el-button>
      <el-button type="danger" size="mini" class="ml20" v-if="type==2">删除</el-button>
    </div>
    <div class="cover" v-if="none == 1"></div>
    <div class="message" v-if="none == 1">
      <div class="top">
        <div>
          <p>新增分类</p>
        </div>
        <div @click="changenoneto0">
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="mid">
        <div style=" margin-bottom: 12px;"> 名称： <input type="text" name="" id="" style="border: 1px solid #999999;border-radius: 4px;width:380px"></div>
        <div> 编辑权限：<el-radio v-model="radio" label="1">备选项</el-radio> <el-radio v-model="radio" label="2">备选项</el-radio></div>
      </div>
      <div class="foot">
        <el-button class="bodercolor btn" @click="changenoneto0">取消</el-button>
        <el-button type="primary" class="colorblue btn" @click="changenoneto0">确认</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabbar',
  data() {
    return {
      value:'',
      type:'1',
      radio: '1',
      none :'0'
    }
  },
  methods: {
    changetypeto2(){
      this.type = 2
    },
    changetypeto1(){
      this.type = 1
    },
    changenoneto1(){
    this.none = 1
    },
    changenoneto0(){
      this.none = 0
    },
    push(){
      this.$router.push('/indexpc/jbxx')
    },
    change(){
      this.$refs.btn1.className = 'colorgrey'
      this.$refs.btn2.className = 'colorgrey'
      this.$refs.btn3.className = 'colorgrey'
      this.$refs.btn4.className = 'colorgrey'
    },
    change1(){
      this.$refs.btn1.className = 'colorblue'
    },
    change2(){
      this.$refs.btn2.className = 'colorblue'
    },
    change3(){
      this.$refs.btn3.className = 'colorblue'
    },
    change4(){
      this.$refs.btn4.className = 'colorblue'
    },
  },
}
</script>

<style scoped>
  .tabbar{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    background-color: #fff;
    margin-top: 8px;
  }
  .el-button--mini{
    padding: 5px 13px;
}
  .el-button--mini {
    font-size: 12px;
}
 .ml40{
    margin-left: 28px;
}
.ml20{
    margin-left: 14px;
}
.mr40{
  margin-right: 28px;
}
  .el-button--info {
    background-color: #A1A9AF;
    border-color: #A1A9AF;
}
.el-button--info:focus,.el-button--info:hover {
    background: #0B5193;
    border-color: #0B5193;
}
.right{
  display: flex;
  height: 28px;
  align-items: center;
  justify-content:space-between;
}
.blue{
  background-color: #0B5193;
  border-color: #0B5193;
}
.blue:hover{
  background-color: #0b3893;
  border-color: #0b3893;
}
div /deep/.el-input__inner{
  width: 180px;
  height: 26px;
  font-size: 12px;
  color: #8E8E93;
}
div /deep/.el-input__icon{
  line-height: 28px;
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
  width: 420px;
  height: 184px;
  left: 520px;
  top: 220px;
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
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px 28px;
  height: 134px;
  background: #FFFFFF;
  font-size: 14px;
  box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.08);
}
.foot{
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
}
.colorgrey{
  background-color:  #A1A9AF;
  border: 1px solid #A1A9AF;
  border-radius: 4px;
  color: #FFFFFF;
  font-weight: 700;
}
.colorblue{
  background-color:  #0B5193;
  border: 1px solid #0B5193;
  border-radius: 4px;
  color: #FFFFFF;
  font-weight: 700;
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