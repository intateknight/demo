<<<<<<< HEAD
<template>
  <div>
   <div style="height: 100vh;background-color: #EBEBEB;width: 100%;">
     <div style="width: 100%;height: 100px;background-color: #fff;padding-top: 50px;box-sizing: border-box;">
         <van-nav-bar
           title=""
           left-arrow
           :border="false"
           @click-left="goback()"
         />
     </div>

     <div style="margin-top: 12px;">
       <van-form @submit="onSubmit">
         
        <div  class="van-cell van-field" v-for="item in list" :key="item.id" @click="changetype(item.id)" style="height: 60px;">
          <div class="van-cell__title van-field__label" style="padding-top: 10px">
            <span>{{ item.txt }}</span>
          </div>
          <div class="van-cell__value van-field__value" style="float: right;padding-right: 30px;padding-top: 10px">
            <van-icon name="success"  v-if="item.type == 1" size="20" color="#0B5193"/>
          </div>
        </div>


        <div class="foot" style="position: fixed;bottom: 0;width: 100%;background-color: #fff;">
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" color="#0B5193">确定</van-button>
          </div>
          <div style="height: 50px;">
          </div>
        </div>
       </van-form>
     </div>

     
   </div>
  </div>
</template>
<script>
export default {
name:'itemtype',
data() {
 return {
   username: '',
   list:[
    {
      id:'1',
      txt:'普通项',
      type:'1'
    },
    {
      id:'2',
      txt:'注意项',
      type:'0'
    },
    {
      id:'3',
      txt:'重要项',
      type:'0'
    },
    

  ]
 }
},
methods: {
 goback(){
   this.$router.go(-1)
 },
 onSubmit(values) {
     console.log('submit', values);
     this.goback(-1)
 },
 changetype(x){
  for(var i =0 ;i<this.list.length;i++){
    this.list[i].type = 0
  }
  this.list[x-1].type = 1
 }
},
}
</script>

<style scoped>
  div /deep/.van-field__control::placeholder{
  text-align: right;
  margin-right: 30px;
  }
  .item{
    box-sizing: border-box;
    width: 100%;
    padding: 0.26667rem 0.42667rem;
    overflow: hidden;
    color: #323233;
    font-size: 0.37333rem;
    line-height: 0.64rem;
    background-color: #fff;
  }


=======
<template>
  <div>
   <div style="height: 100vh;background-color: #EBEBEB;width: 100%;">
     <div style="width: 100%;height: 100px;background-color: #fff;padding-top: 50px;box-sizing: border-box;">
         <van-nav-bar
           title=""
           left-arrow
           :border="false"
           @click-left="goback()"
         />
     </div>

     <div style="margin-top: 12px;">
       <van-form @submit="onSubmit">
         
        <div  class="van-cell van-field" v-for="item in list" :key="item.id" @click="changetype(item.id)" style="height: 60px;">
          <div class="van-cell__title van-field__label" style="padding-top: 10px">
            <span>{{ item.txt }}</span>
          </div>
          <div class="van-cell__value van-field__value" style="float: right;padding-right: 30px;padding-top: 10px">
            <van-icon name="success"  v-if="item.type == 1" size="20" color="#0B5193"/>
          </div>
        </div>


        <div class="foot" style="position: fixed;bottom: 0;width: 100%;background-color: #fff;">
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" color="#0B5193">确定</van-button>
          </div>
          <div style="height: 50px;">
          </div>
        </div>
       </van-form>
     </div>

     
   </div>
  </div>
</template>
<script>
export default {
name:'itemtype',
data() {
 return {
   username: '',
   list:[
    {
      id:'1',
      txt:'普通项',
      type:'1'
    },
    {
      id:'2',
      txt:'注意项',
      type:'0'
    },
    {
      id:'3',
      txt:'重要项',
      type:'0'
    },
    

  ]
 }
},
methods: {
 goback(){
   this.$router.go(-1)
 },
 onSubmit(values) {
     console.log('submit', values);
     this.goback(-1)
 },
 changetype(x){
  for(var i =0 ;i<this.list.length;i++){
    this.list[i].type = 0
  }
  this.list[x-1].type = 1
 }
},
}
</script>

<style scoped>
  div /deep/.van-field__control::placeholder{
  text-align: right;
  margin-right: 30px;
  }
  .item{
    box-sizing: border-box;
    width: 100%;
    padding: 0.26667rem 0.42667rem;
    overflow: hidden;
    color: #323233;
    font-size: 0.37333rem;
    line-height: 0.64rem;
    background-color: #fff;
  }


>>>>>>> e90c7b4 (暂存)
</style>