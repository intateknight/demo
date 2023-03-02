<<<<<<< HEAD
<template>
  <div>
    <div class="blank"></div>
    <div class="bg">
      <div style="display: flex; justify-content: space-between;">
        <van-button :color=color style="min-height: 36px;min-width: 104px;" @click="changecolor(1)">检查名称</van-button>
        <van-button :color=color2 style="min-height: 36px;min-width: 104px;" @click="changecolor(2)">检查名称</van-button>
        <van-button icon="exchange" type="primary" icon-position="right" :color=color3 style="min-height: 36px;" @click="changecolor(3)">更换模板</van-button>
      </div>
      <div class="bgc">
        <div class="list" v-for="item in list " :key="item.id">
          <div style="width: 90%;padding: 0 12px;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);min-height: 30px;">
            <span style="font-size: 16px;font-weight: 700;color: #333333;margin-right: 4px;">{{ item.id }}.{{ item.name }}</span>
            <span style="font-size: 12px;font-weight: 700;color: #666666;">20分</span>
            <span style="font-size: 14px;font-weight: 700;color: #0B5193;float: right;">查看SOP标准</span>
          </div>
          <div style="margin-top: 16px;display: flex;justify-content: space-between;">
            <van-button :type=item.type1 round style="border: 0;min-width: 100px;height: 36px;" @click="changebtntype(item.id,1)">不适应</van-button>
            <van-button :type=item.type2 round style="border: 0;min-width: 100px;height: 36px;" @click="changebtntype(item.id,2)">合格</van-button>
            <van-button :type=item.type3 round style="border: 0;min-width: 100px;height: 36px;" @click="changebtntype(item.id,3)">不合格</van-button>
          </div>
          <div>
            <van-field
              v-model=item.message
              rows="2"
              autosize
              type="textarea"
              maxlength="200"
              placeholder="请输入巡检备注说明"
              show-word-limit
            />
          </div>
          <div>
            <van-uploader v-model=item.fileList multiple />
          </div>
        </div>
      </div>
    </div>
    <div class="blank2"></div>
    <div class="bottom">
      <van-button type="info" round style="color: #333333;background: rgba(0, 0, 0, 0.1);border: 0;min-width: 120px;min-height: 36px;" @click="goback()">放弃巡店</van-button>
      <van-button type="info" round style="color: #fff;background: #0B5193;border: 0;min-width: 200px;min-height: 36px;" @click="push('/indexpe/ksxd/ysgl')">下一步</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name:'ygzj',
  data() {
    return {
      color:'#0B5193',
      color2:'#B7CADC',
      color3:'#B7CADC',
      list:[
        {
          id:1,
          name:'任务检查项',
          message:'',
          fileList: [
          { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
          // Uploader 根据文件后缀来判断是否为图片文件
          // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
          // { url: 'https://cloud-image', isImage: true },
          ],
          type1:'info',
          type2:'info',
          type3:'info',
        },
        {
          id:2,
          name:'任务检查项',
          message:'',
          fileList: [],
          type1:'info',
          type2:'info',
          type3:'info',
        },
        {
          id:3,
          name:'任务检查项',
          message:'',
          fileList: [],
          type1:'info',
          type2:'info',
          type3:'info',
        
        },
        {
          id:4,
          name:'任务检查项',
          message:'',
          fileList: [],
          type1:'info',
          type2:'info',
          type3:'info',
        
        },
        {
          id:5,
          name:'任务检查项',
          message:'',
          fileList: [],
          type1:'info',
          type2:'info',
          type3:'info',
        }
      ]
    }
  },
  methods: {
    goback(){
      this.$router.go(-1)
    },
    push(x){
      this.$router.push(x)
    },
    changecolor(x){
      this.color = '#B7CADC'
      this.color2 = '#B7CADC'
      this.color3 = '#B7CADC'
      if(x==1){
        this.color = '#0B5193'
      }else if(x==2){
        this.color2 = '#0B5193'
      }else{
        this.color3 = '#0B5193'
      }
    },
    changebtntype(x,y){
      this.list[x-1].type1 = 'info'
      this.list[x-1].type2 = 'info'
      this.list[x-1].type3 = 'info'
      if(y==1){
        this.list[x-1].type1 = 'default'
      }else if(y==2){
        this.list[x-1].type2 = 'default'
      }else{
        this.list[x-1].type3 = 'default'
      }
    }
  },
}
</script>

<style scoped>
.bg{
    background-color: #fcfcfc;
    /* background-color: #050505; */
    min-height: 80vh;
    overflow:hidden;
    padding: 0 12px;
  }
  .bgc{
    margin-top: 10px;
    background-color: #fff;
    padding: 12px 14px;
  }
  .list{
    box-sizing: border-box;
    /* width: 90%; */
    background-color: #fff;
    margin-bottom: 12px;
  }
  
  .mt52{
    margin-top: 52px;
  }
  .blank{
  width: 100%;
  height: 420px;
  background-color: #fcfcfc;
  }
  .blank2{
  width: 100%;
  height: 180px;
  background-color: #fcfcfc;
 }
 .bottom{
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 72px;
  width: 100%;
  padding: 12px 20px;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 50px;
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
=======
<template>
  <div>
    <div class="blank"></div>
    <div class="bg">
      <div style="display: flex; justify-content: space-between;">
        <van-button :color=color style="min-height: 36px;min-width: 104px;" @click="changecolor(1)">检查名称</van-button>
        <van-button :color=color2 style="min-height: 36px;min-width: 104px;" @click="changecolor(2)">检查名称</van-button>
        <van-button icon="exchange" type="primary" icon-position="right" :color=color3 style="min-height: 36px;" @click="changecolor(3)">更换模板</van-button>
      </div>
      <div class="bgc">
        <div class="list" v-for="item in list " :key="item.id">
          <div style="width: 90%;padding: 0 12px;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.12);min-height: 30px;">
            <span style="font-size: 16px;font-weight: 700;color: #333333;margin-right: 4px;">{{ item.id }}.{{ item.name }}</span>
            <span style="font-size: 12px;font-weight: 700;color: #666666;">20分</span>
            <span style="font-size: 14px;font-weight: 700;color: #0B5193;float: right;">查看SOP标准</span>
          </div>
          <div style="margin-top: 16px;display: flex;justify-content: space-between;">
            <van-button :type=item.type1 round style="border: 0;min-width: 100px;height: 36px;" @click="changebtntype(item.id,1)">不适应</van-button>
            <van-button :type=item.type2 round style="border: 0;min-width: 100px;height: 36px;" @click="changebtntype(item.id,2)">合格</van-button>
            <van-button :type=item.type3 round style="border: 0;min-width: 100px;height: 36px;" @click="changebtntype(item.id,3)">不合格</van-button>
          </div>
          <div>
            <van-field
              v-model=item.message
              rows="2"
              autosize
              type="textarea"
              maxlength="200"
              placeholder="请输入巡检备注说明"
              show-word-limit
            />
          </div>
          <div>
            <van-uploader v-model=item.fileList multiple />
          </div>
        </div>
      </div>
    </div>
    <div class="blank2"></div>
    <div class="bottom">
      <van-button type="info" round style="color: #333333;background: rgba(0, 0, 0, 0.1);border: 0;min-width: 120px;min-height: 36px;" @click="goback()">放弃巡店</van-button>
      <van-button type="info" round style="color: #fff;background: #0B5193;border: 0;min-width: 200px;min-height: 36px;" @click="push('/indexpe/ksxd/ysgl')">下一步</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name:'ygzj',
  data() {
    return {
      color:'#0B5193',
      color2:'#B7CADC',
      color3:'#B7CADC',
      list:[
        {
          id:1,
          name:'任务检查项',
          message:'',
          fileList: [
          { url: 'https://img01.yzcdn.cn/vant/leaf.jpg' },
          // Uploader 根据文件后缀来判断是否为图片文件
          // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
          // { url: 'https://cloud-image', isImage: true },
          ],
          type1:'info',
          type2:'info',
          type3:'info',
        },
        {
          id:2,
          name:'任务检查项',
          message:'',
          fileList: [],
          type1:'info',
          type2:'info',
          type3:'info',
        },
        {
          id:3,
          name:'任务检查项',
          message:'',
          fileList: [],
          type1:'info',
          type2:'info',
          type3:'info',
        
        },
        {
          id:4,
          name:'任务检查项',
          message:'',
          fileList: [],
          type1:'info',
          type2:'info',
          type3:'info',
        
        },
        {
          id:5,
          name:'任务检查项',
          message:'',
          fileList: [],
          type1:'info',
          type2:'info',
          type3:'info',
        }
      ]
    }
  },
  methods: {
    goback(){
      this.$router.go(-1)
    },
    push(x){
      this.$router.push(x)
    },
    changecolor(x){
      this.color = '#B7CADC'
      this.color2 = '#B7CADC'
      this.color3 = '#B7CADC'
      if(x==1){
        this.color = '#0B5193'
      }else if(x==2){
        this.color2 = '#0B5193'
      }else{
        this.color3 = '#0B5193'
      }
    },
    changebtntype(x,y){
      this.list[x-1].type1 = 'info'
      this.list[x-1].type2 = 'info'
      this.list[x-1].type3 = 'info'
      if(y==1){
        this.list[x-1].type1 = 'default'
      }else if(y==2){
        this.list[x-1].type2 = 'default'
      }else{
        this.list[x-1].type3 = 'default'
      }
    }
  },
}
</script>

<style scoped>
.bg{
    background-color: #fcfcfc;
    /* background-color: #050505; */
    min-height: 80vh;
    overflow:hidden;
    padding: 0 12px;
  }
  .bgc{
    margin-top: 10px;
    background-color: #fff;
    padding: 12px 14px;
  }
  .list{
    box-sizing: border-box;
    /* width: 90%; */
    background-color: #fff;
    margin-bottom: 12px;
  }
  
  .mt52{
    margin-top: 52px;
  }
  .blank{
  width: 100%;
  height: 420px;
  background-color: #fcfcfc;
  }
  .blank2{
  width: 100%;
  height: 180px;
  background-color: #fcfcfc;
 }
 .bottom{
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 72px;
  width: 100%;
  padding: 12px 20px;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 50px;
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
>>>>>>> e90c7b4 (暂存)
</style>