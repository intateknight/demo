<template>
   <div>
    <div style="height: 100vh;background-color: #EBEBEB;width: 100%;">
      <div style="width: 100%;height: 100px;background-color: #fff;padding-top: 50px;box-sizing: border-box;">
          <van-nav-bar
            title="新增分类"
            left-arrow
            :border="false"
            @click-left="goback()"
          />
      </div>

      <div style="margin-top: 12px;">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="名称"
            label="名称"
            placeholder-class="placlass"
            placeholder="点击输入"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field name="radio" label="单选框">
            <template #input>
              <van-radio-group v-model="radio" direction="horizontal">
                <van-radio name="1" style="margin-right: 30px;" checked-color="#0B5193">不限</van-radio>
                <van-radio name="2" checked-color="#0B5193">部分人员可编辑</van-radio>
              </van-radio-group>
            </template>
          </van-field>

          <div class="foot" style="position: fixed;bottom: 0;width: 100%;background-color: #fff;">
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" color="#0B5193">确认</van-button>
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
name:'xzflpe',
data() {
  return {
    username: '',
    radio:'1',
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
},
}
</script>

<style scoped>
div /deep/.van-field__control::placeholder{
  text-align: right;
  margin-right: 30px;
 }
 div /deep/ .van-nav-bar__title{
  font-weight: 700;
 }
</style>