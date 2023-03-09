<template>
  <div class="indexpc">
    <Left></Left>
    <div class="right" style="height:100vh;overflow:auto">
      <Top></Top>
      <router-view></router-view>

      <div class="cover" v-if="flag == 1"></div>
      <div class="message" v-if="flag == 1" style="width: 500px;">
        <div class="mes_top">
          <div>
            <p>请完善个人信息</p>
          </div>
        </div>
        <div class="mid" style="margin-top:28px;margin-left:40px;font-size: 16px;width: 80%;">
          <el-form ref="form" :model="form" label-width="15%" style="width: 100%;">
            <el-form-item label="姓名">
              <el-input v-model="form.realname" readonly></el-input>
            </el-form-item>
            <el-form-item label="账户">
              <el-input v-model="form.username" readonly></el-input>
            </el-form-item>
            <el-form-item label="工号">
              <el-input v-model="form.job_number"></el-input>
            </el-form-item>
            <el-form-item label="职位">
              <el-input v-model="form.role"></el-input>
            </el-form-item>
            <el-form-item label="电话">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="门店">
              <el-input v-model="form.store_name"></el-input>
            </el-form-item>
         </el-form>
        </div>
        <div class="megfoot">
          <el-button type="primary" class="colorblue"  style="width:84px;height:36px;padding: 0;line-height: 0;" @click="createUserInfo()">确定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {query,create,userinfo} from '@/api/api.js'
import Left from '@/components/pc/comm/left/left.vue';
import Top from '@/components/pc/comm/top/top.vue'
export default {
  name:'indexpc',
  components:{
    Left,Top
  },
  data() {
    return {
      form:{
        realname:'',
        username:'',
        job_number:'',
        role:'',
        phone:'',
        store_name:''
      },
      flag:0
    }
  },
  mounted() {
    userinfo().then((res)=>{
      if(res.error){
        this.$message({
          showClose: true,
          message: '用户验证失败请重新登入',
          type: 'error',
          center: true
        });
        setTimeout(() => {
          this.$router.push('/loginpc')
        }, 2000);
      }else{
        this.form.realname = res.userAuthentication.principal.user.name
        this.form.username = res.userAuthentication.principal.user.username

        var term ={
            auth: 2,
            project: "微督导",
            table: "biz_store_user_info",
            conditions: {
                pagination: {
                    page: 1,
                    pageSize: 5
                },
                fields: [],
                query: {
                    and: [
                      {match:{'username':res.userAuthentication.principal.user.username} }
                    ]
                }
            }
        }
        query(term).then((res)=>{
          if (res.count == 0) {
            this.flag = 1
          }
        })
      }
    })
  },
  methods: {
    createUserInfo(){
      var term ={
            auth: 2,
            project: "微督导",
            table: "biz_store_user_info",
            data:[this.form]
      }
      create(term).then((res)=>{
        if(res.error == ''){
          this.$message({
          showClose: true,
          message: '数据更新成功',
          type: 'success',
          center: true
        });
        setTimeout(() => {
          this.flag = 0
        }, 2000);
        }else{
          this.$message({
          showClose: true,
          message: '数据添加失败',
          type: 'error',
          center: true
        });
        }
      })
    }
  },
}
</script>

<style scoped>
  .indexpc{
    display: flex;
    background-color: #F5F5F5;
  }
  .right{
    flex: 1;
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
  left: 35%;
  top: 5%;
  background-color: #fff;
  z-index: 201;
}
.mes_top{
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
.megfoot{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding: 0 40px;
  gap: 28px;
  height: 68px;
  background: #FFFFFF;
  box-shadow: inset 0px 0.5px 0px rgba(0, 0, 0, 0.08);
}
div /deep/ .el-input{
  width: 95%;
}
div /deep/ .el-form-item{
  margin-bottom: 10px;
}
</style>