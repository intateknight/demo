<template>
  <div>
    <div>
      <div class="fixed">
        <!-- 顶部 -->
        <div class="top">
          <img src="@/assets/approval/img/Frame 861.png" alt="" class="pic">
          <van-search v-model="value" placeholder="模板/巡查员/巡查方式等"  class="search"/>
            <div class="top-right" @click="showPopup">
              <span>筛选</span>
              <van-icon name="filter-o" />
            </div>
            <van-popup v-model="show1" position="top" duration="0">
              <div class="shadow" @click="hidPopup()">全部</div>
              <div class="shadow" @click="hidPopup()">代办</div>
              <div class="shadow" @click="hidPopup()">已办</div>
              <div class="shadow" @click="hidPopup()">已发起</div>
            </van-popup>
        </div>
        <!-- 日期 -->
        <div class="time">
          <div class="date">日期：</div>
          <van-field v-model="time1" placeholder="请选择"  class="ipt" @click="show2 = true" readonly/>
          <div class="line"></div>
          <van-field v-model="time2" placeholder="请选择"  class="ipt" @click="show2 = true" readonly/>
          <img src="@/assets/approval/icon/more-vertical.png" alt="">
          <van-calendar v-model="show2" type="range" :show-confirm="false" @confirm="onConfirm" />
        </div>
      </div>
      <!-- 任务列表 -->
      <div class="blank"></div>
      <div class="bg">
          <div class="list" v-for="item in datalist" :key="item.id" @click="push('/indexpe/zgxq')">
            <img :src="item.url" alt="" class="img">
            <div class="mid">
              <p class="mid-p">{{ item.title }}</p>
              <p class="mid-p2">{{ item.details }}</p>
            </div>
            <div class="right">
              <van-tag  class="tab dzg" v-if="item.type == 1">待整改</van-tag>
              <van-tag  class="tab ywc" v-if="item.type == 2">已完成</van-tag>
              <van-tag  class="tab dsh" v-if="item.type == 3">待审核</van-tag>
              <div class="r-time">{{item.time}}</div>
            </div>
          </div>
          <div class="blank2"></div>
        </div>
    </div>
    <Tabbar2></Tabbar2>
  </div>
</template>

<script>
import Tabbar2 from '@/components/pe/comm/tab/Tabbar2.vue';
export default {
name:'approval',
components:{
  Tabbar2
},
data() {
  return {
    time1:'',
    time2:'',
    value: '',
    show1: false,
    show2: false,
    date: '',
    datalist:[{
      id:'0',
      url:require('@/assets/approval/img/Frame 852.png'),
      title:'问题标题/标签',
      details:'问题简单描述内容',
      type:'1',
      time:'2022.11.17',
    },
    {
      id:'1',
      url:require('@/assets/approval/img/Frame 853.png'),
      title:'问题标题/标签',
      details:'问题简单描述内容',
      type:'2',
      time:'2022.11.17',
    },
    {
      id:'2',
      url:require('@/assets/approval/img/Frame 854.png'),
      title:'问题标题/标签',
      details:'问题简单描述内容',
      type:'2',
      time:'2022.11.17',
    },
    {
      id:'3',
      url:require('@/assets/approval/img/Frame 855.png'),
      title:'问题标题/标签',
      details:'问题简单描述内容',
      type:'3',
      time:'2022.11.17',
    },
    {
      id:'4',
      url:require('@/assets/approval/img/Frame 856.png'),
      title:'问题标题/标签',
      details:'问题简单描述内容',
      type:'3',
      time:'2022.11.17',
    },
    {
      id:'5',
      url:require('@/assets/approval/img/Frame 856.png'),
      title:'问题标题/标签',
      details:'问题简单描述内容',
      type:'3',
      time:'2022.11.17',
    },
    {
      id:'6',
      url:require('@/assets/approval/img/Frame 856.png'),
      title:'问题标题/标签',
      details:'问题简单描述内容',
      type:'3',
      time:'2022.11.17',
    },
    {
      id:'7',
      url:require('@/assets/approval/img/Frame 856.png'),
      title:'问题标题/标签',
      details:'问题简单描述内容',
      type:'3',
      time:'2022.11.17',
    },
    ]
  }
},
methods: {
    push(x){
      this.$router.push(x)
    },
    showPopup() {
      this.show1 = !this.show1;
    },
    hidPopup() {
      this.show1 = false;
    },
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show2 = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      this.time1 =this.formatDate(start)
      this.time2 =this.formatDate(end)
    },
  },
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.fixed{
  width: 100%;
  height: 200px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #fff;
}
.top{
  position: relative;
  margin-top: 88px;
  width: 100%;
  height: 60px;
  /* background-color: rgb(228, 115, 115); */
}
.pic{
  position: absolute;
  left: 20px;
  bottom: 0;
  z-index: 0;
}
.van-search .van-cell{
  background-color: #EBEBEB;
  border-radius: 8px
}
.van-search__content{
  padding-left: 0;
}
.van-search{
  padding-left: 0;
}
.search{
  padding-top: 16px;
  margin-left: 20px;
  margin-right: 16px;
  width: 65%;
}
div /deep/.van-field__left-icon{
  margin-left: 14px;
}
.top-right{
 position: absolute;
 right: 20px;
 bottom: 20px;
 font-size: 16px;
}
div /deep/.van-popup--top{
  top: 3.91rem;
}
.shadow{
  height: 45px;
  text-align: center;
  line-height: 45px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  font-size: 14px;
}
.shadow:active,.shadow:visited{
  color: #0B5193;
}
div /deep/.van-overlay{
  top: 3.91rem;
  height: 1000%;
}
.time{
  /* position: absolute; */
  box-sizing:border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  gap: 3px;
  width: 100%;
  height: 52px;
  background: #FFFFFF;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
}
.date{
  width: 42px;
  height: 20px;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
}
.ipt{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 24px 4px 24px;
  width: 122px;
  height: 28px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}
.line{
  width: 8px;
  height: 1px;
  background: #333333;
  margin-left: 6px;
  margin-right: 6px;
}
.blank{
  width: 100%;
  height: 200px;
  background-color: #fcfcfc;
}
.bg{
  position: absolute;
  width: 100%;
  /* height: 540px; */
  background-color: #fcfcfc;
  overflow:auto;
  margin-bottom: 20px;
}
.blank2{
  width: 100%;
  height: 50px;
  background-color: #fcfcfc;
}
.list{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin: 12px 20px;
  width: 90%;
  height: 104px;
  background: #FFFFFF;
  border-radius: 20px;
}
.list:last-child{
  margin-bottom: 1rem;
}
.img{
  width: 80px;
  height: 80px;
}
.mid{
  height: 80px;
  font-family: 'PingFang SC';
  font-style: normal;
  line-height: 22px;
  color: #333333;
}
.mid-p{
  font-size: 16px;
  font-weight: 700;
}
.mid-p2{
  font-size: 14px;
  font-weight: 400;
}
.right{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  gap: 40px;
  width: 75px;
  height: 80px;
}
.tab{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
  width: 50px;
  height: 20px;
  border-radius: 2px;
  font-size: 14px;
}
.dzg{
  color: #E85618;
  background: #FFE1CB;
}
.ywc{
  color: rgba(11, 190, 40, 1);
  background-color: #DDFFE2;
}
.dsh{
  color: #933E0E;
  background-color: #FFEEEA;
}

.r-time{
  font-weight: 700;
  font-size: 14px;
}
</style>