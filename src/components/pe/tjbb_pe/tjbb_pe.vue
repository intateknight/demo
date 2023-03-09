<template>
  <div>
    <div class="fixed">
      <div style="margin-top: 50px;">
        <van-nav-bar
          title="统计报表"
          left-arrow
          :border="false"
          @click-left="goback()"
        />
      </div>

      <div class="search">
        <van-search
          v-model="value"
          show-action
          placeholder="搜索"
          @search="onSearch"
        >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
        </van-search>
        
        <!-- <span style="margin-left: 8px;">筛选</span>
        <van-icon name="filter-o" size="16"/> -->
      </div>

      <div class="time">
        <div class="date">日期：</div>
        <van-field v-model="time1" placeholder="请选择"  class="ipt" @click="show2 = true" readonly/>
        <div class="line"></div>
        <van-field v-model="time2" placeholder="请选择"  class="ipt" @click="show2 = true" readonly/>
        <img src="@/assets/approval/icon/more-vertical.png" alt="">
        <van-calendar v-model="show2" type="range" :show-confirm="false" @confirm="onConfirm" />
      </div>

      <div class="sort">
        <div style="flex:1;display: flex;justify-content: space-between;">
          <van-button round :type=item.type size="mini"  class="sort_btn" v-for="item in sort" :key="item.id" @click="changetype(item.id)">{{ item.btn }}</van-button>
        </div>
        <div class="sort_txt" @click="push('/indexpe/xzflpe')">更多▼</div>
      </div>
    </div> 

    <div class="blank"></div>
    <div class="bg">
      <div class="list" v-for="item in list" :key="item.id" >
        <div class="list_left" @click="push('/indexpe/tjxq')">
          <div class="left_img">
            <img src="@/assets/patrol/jcmb/Frame 2356.png" alt="">
          </div>
          <div class="left_txt">
            <div>
              <span style="font-weight: 700;">门店名称：</span> <span>{{ item.name }}</span>
            </div>
            <div>
              <span style="font-weight: 700;">得分：</span> <span>{{ item.edition }}</span>
            </div>
            <div>
              <span style="font-weight: 700;">巡店员：</span> <span>{{ item.creater }}</span>
            </div>
            <div>
              <span style="font-weight: 700;">巡店方式：</span> <span>{{ item.type }}</span>
            </div>
            <div>
              <span style="font-weight: 700;">巡店时间：</span> <span>{{ item.time }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="blank2"></div>

    <van-tabbar></van-tabbar>
  </div>
</template>

<script>      
export default {
 name:'tjbbpe',
 data() {
  return {
    time1:'',
    time2:'',
    show2: false,
    value: '',
    list:[
      {
        id:'1',
        img:'',
        name:'预设名称',
        edition:'80',
        creater:'某某某',
        type:'远程巡店',
        time:'2022-11-24 14:23'
      },
      {
        id:'2',
        img:'',
        name:'预设名称',
        edition:'80',
        creater:'某某某',
        type:'远程巡店',
        time:'2022-11-24 14:23'
      },
      {
        id:'3',
        img:'',
        name:'预设名称',
        edition:'80',
        creater:'某某某',
        type:'远程巡店',
        time:'2022-11-24 14:23'
      },
      {
        id:'4',
        img:'',
        name:'预设名称',
        edition:'80',
        creater:'某某某',
        type:'远程巡店',
        time:'2022-11-24 14:23'
      },
    ],
    sort:[
      {
        id:'1',
        btn:'全部',
        type:'default'
      },
      {
        id:'2',
        btn:'店员',
        type:'info'
      },
      {
        id:'3',
        btn:'店长',
        type:'info'
      },
      {
        id:'4',
        btn:'督导',
        type:'info'
      },
    ]
  }
 },
 methods: {
  goback(){
    this.$router.go(-1)
  },
  onSearch(val) {
      console.log(val);
  },
  push(x){
    this.$router.push(x)
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
    changetype(x){
    for(var i=0;i<this.sort.length;i++){
      this.sort[i].type = 'info'
    }
    this.sort[x-1].type = 'default'
  }
 },
}
</script>

<style scoped>
  .fixed{
    width: 100%;
    height: 200px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #fff;
  }
  .search{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 25px;
  }
  .van-search__action{
    box-sizing: border-box;
    width: 68px;
    text-align: center;
    background-color: #0B5193;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #fff;
  }
  .van-search{
    width: 86%;
  }
  .van-search__content{
    border-radius: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .van-icon-plus{
    font-weight: 700;
    font-size: 16px;
    color: #0B5193;
  }
  .sort{
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    border-top: 0.5px solid rgba(0, 0, 0, 0.08);
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
    padding: 16px;
    background-color: #fff;
  }
  .sort_btn{
    width: 60px;
    margin-right: 10px;
    border: 0;
  }
  .sort_txt{
    padding-top: 3px;
    width: 40px;
    height: 24px;
    font-size: 12px;
  }
  .bg{
    width: 100%;
    background-color: #fcfcfc;
    /* background-color: #050505; */
    overflow:hidden;
  }
  .list{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 12px;
    margin: 12px 14px;
    background-color: #fff;
    height: 166px;
  }
  .list_left{
    display: flex;
    flex-grow: 1;
  }
  .list_btn{
    width: 80px;
    border-radius: 4px;
    height: 28px;
  }
  .list_btn2{
    width: 80px;
    border-radius: 4px;
    height: 28px;
    color: #0BBE28 !important;
  }
  .left_img{
    margin-right: 12px;
  }
  .left_txt{
    /* width: 180px; */
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .mt52{
    margin-top: 52px;
  }
  .blank{
  width: 100%;
  height: 280px;
  background-color: #fcfcfc;
  }
  .blank2{
  width: 100%;
  height: 60px;
  background-color: #fcfcfc;
 }
 .popuplist{
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: #fff;
  font-size: 16px;
  box-shadow: inset 0px 0.5px 0px rgba(0, 0, 0, 0.08);
  line-height: 50px;
  text-align: center;
  color: #333333;
 }
 div /deep/ .van-nav-bar__title{
  font-weight: 700;
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
.line{
  width: 8px;
  height: 1px;
  background: #333333;
  margin-left: 6px;
  margin-right: 6px;
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
div /deep/ .van-button--info{
  color: #fff;
  background: #B7CADC;
 } 
 div /deep/ .van-button--default{
  color: #fff;
  background: #0B5193;
 }
</style>