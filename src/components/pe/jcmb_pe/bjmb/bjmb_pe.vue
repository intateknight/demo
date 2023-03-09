<template>
  <div>
   <div style="height: 100vh;background-color: #EBEBEB;width: 100%;">
     <div style="width: 100%;height: 100px;background-color: #fff;padding-top: 50px;box-sizing: border-box;">
         <van-nav-bar
           title="编辑模板"
           left-arrow
           :border="false"
           @click-left="goback()"
         />
     </div>

     <div style="margin-top: 12px;">
       <van-form @submit="onSubmit">
         <van-field
           v-model="username"
           name="模板名称"
           label="模板名称"
           placeholder-class="placlass"
           placeholder="点击输入"
           :rules="[{ required: true, message: '请输入模板名' }]"
         />

         <div  class="van-cell van-field" style="height: 60px;">
          <div class="van-cell__title van-field__label" style="padding-top: 10px">
            <span>可见门店</span>
          </div>
          <div class="van-cell__value van-field__value" style="float: right;padding-right: 30px;padding-top: 10px" @click="push('/indexpe/kjmd')">
            <div  style="color: rgb(205 201 201);">点击设置 ＞</div>
          </div>
        </div>

        <div  class="van-cell van-field" style="height: 60px;">
          <div class="van-cell__title van-field__label" style="padding-top: 10px">
            <span>等级评判</span>
          </div>
          <div class="van-cell__value van-field__value" style="float: right;padding-right: 30px;padding-top: 10px" @click="push('/indexpe/djpp')">
              <div  style="color: rgb(205 201 201);">点击设置 ＞</div>
          </div>
        </div>

        <div class="foot" style="position: fixed;bottom: 0;width: 100%;background-color: #fff;">
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" color="#0B5193">下一步</van-button>
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
name:'bjmbpe',
data() {
 return {
   username: '',
 }
},
methods: {
 goback(){
   this.$router.go(-1)
 },
 onSubmit(values) {
     console.log('submit', values);
     this.push('/indexpe/bjmbpe2')
 },
 push(x){
  this.$router.push(x)
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
  div /deep/ .van-nav-bar__title{
  font-weight: 700;
  }

</style>