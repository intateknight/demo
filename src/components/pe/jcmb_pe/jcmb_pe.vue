<template>
  <div>
    <div class="fixed">
      <div style="margin-top: 50px;">
        <van-nav-bar
          title="检查模板"
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
        
        <van-icon name="plus" @click="push('/indexpe/bjmbpe')"/>
      </div>

      <div class="sort">
        <div style="flex:1;display: flex;justify-content: space-between;" >
          <van-button round :type=item.type size="mini"  class="sort_btn" v-for="item in sort" :key="item.id" @click="changetype(item.id)">{{ item.btn }}</van-button>
        </div>
        <div class="sort_txt" @click="push('/indexpe/xzflpe')">更多▼</div>
      </div>
    </div> 

    <div class="blank"></div>
    <div class="bg">
      <div class="list" v-for="item in list" :key="item.id" >
        <div class="list_left" @click="push('/indexpe/mdxq')">
          <div class="left_img">
            <img src="@/assets/patrol/jcmb/Frame 2357.png" alt="">
          </div>
          <div class="left_txt">
            <div>
              <span style="font-weight: 700;">名称：</span> <span>{{ item.name }}</span>
            </div>
            <div>
              <span style="font-weight: 700;">版本：</span> <span>{{ item.edition }}</span>
            </div>
            <div>
              <span style="font-weight: 700;">创建人：</span> <span>{{ item.creater }}</span>
            </div>
          </div>
        </div>
        <div>
          <div style="float: right;" @click="showPopup">
            <img src="@/assets/patrol/jcmb/more-vertical.png" alt="">
          </div>
          <div class="mt52">
            <van-button color="#0B5193" class="list_btn" v-if="item.type == 0" @click="changetypeto1(item.id)">发布</van-button>
            <van-button color="#DDFFE2" class="list_btn2" v-if="item.type == 1">已发布</van-button>
          </div>
        <van-popup v-model="show" position="bottom" >
          <div class="popuplist" style="color: #0B5193;" @click="push('/indexpe/bjmbpe')">编辑</div>
          <div class="popuplist" style="color: #EE6767;" @click="showdialog(item.id)">删除</div>
          <div class="popuplist">导出</div>
          <div class="popuplist" @click="hidePopup()">取消</div>
          <div class="popuplist"></div>
        </van-popup>
        <van-dialog v-model="show2" title="是否确认删除" show-cancel-button @cancel="cancel" @confirm="confirm(item.id)">
      
        </van-dialog>
        </div>
        
      </div>
    </div>
    <div class="blank2"></div>

    <van-tabbar></van-tabbar>
  </div>
</template>

<script>      
export default {
 name:'jcmbpe',
 data() {
  return {
    value: '',
    show:false,
    show2: false,
    value2:'',
    list:[
      {
        id:'1',
        img:'',
        name:'预设名称',
        edition:'1082',
        creater:'某某某',
        type:'0',
      },
      {
        id:'2',
        img:'',
        name:'预设名称',
        edition:'1082',
        creater:'某某某',
        type:'1',
      },
      {
        id:'3',
        img:'',
        name:'预设名称',
        edition:'1082',
        creater:'某某某',
        type:'1',
      },
      {
        id:'4',
        img:'',
        name:'预设名称',
        edition:'1082',
        creater:'某某某',
        type:'1',
      },
      {
        id:'5',
        img:'',
        name:'预设名称',
        edition:'1082',
        creater:'某某某',
        type:'1',
      }
    ],
    sort:[
      {
        id:'1',
        btn:'全部',
        type:'primary'
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
  changetypeto1(x){
    this.list[x-1].type = 1
  },
  showPopup() {
      this.show = true;
  },
  hidePopup() {
      this.show = false;
  },
  push(x){
    this.$router.push(x)
  },
  changetype(x){
    for(var i=0;i<this.sort.length;i++){
      this.sort[i].type = 'info'
    }
    this.sort[x-1].type = 'primary'
  },
  showdialog(){
      this.show2 = true
  },
  cancel(){
    console.log('取消');
    this.hidePopup()
  },
  confirm(x){
    console.log('确定');
    this.hidePopup()
    this.remove(x)
  },
  remove(x){
      let Template = this.list.filter((val) => val.id !== x)
      this.list = Template
    },

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
    justify-content: space-between;
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
    height: 106px;
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
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .mt52{
    margin-top: 52px;
  }
  .blank{
  width: 100%;
  height: 220px;
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
 div /deep/ .van-button--info{
  color: #fff;
  background: #B7CADC;
 } 
 div /deep/ .van-button--primary{
  color: #fff;
  background: #0B5193;
 }
 div /deep/ .van-overlay {
  background: rgba(0, 0, 0, 0.2);
 }
</style>