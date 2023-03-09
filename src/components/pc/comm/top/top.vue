<template>
  <div class="top">
    <div class="top-right">
      <img src="@/assets/pc/img/Frame 874.png" alt="" class="top-right-img">
      <div class="top-right-text">
        <p class="top-right-name">{{ name }}</p>
        <p class="top-right-job">{{ job }}</p>
      </div>
      <i class="el-icon-arrow-down" @click="open"></i>
    </div>
  </div>
</template>

<script>
import {userinfo,query} from '@/api/api.js'
export default {
  name:'top',
  data() {
    return {
      name:'',
      job:'',
    }
  },
  mounted() {
    userinfo().then((res)=>{
      this.name = res.userAuthentication.principal.user.name
      var term ={
          auth: 2,
          project: "微督导",
          table: "biz_store_user_info",
          conditions: {
              pagination: {
                  page: 1,
                  pageSize: 5
              },
              fields: ['role'],
              query: {
                  and: [
                    {match:{'realname':this.name} }
                  ]
              }
          }
      }
      query(term).then((res)=>{
        this.job = res.data[0].role
      })
    })
  },
  methods: {
      open() {
        this.$confirm('是否退出登入?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
          localStorage.removeItem('token')
          location.reload()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      }
    }

}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .top{
    background-color: #fff;
    width: 100%;
    height: 70px;
  }
  .top-right{
    width: 154px;
    height: 38px;
    float: right;
    display: flex;
    margin-top: 16px;
    margin-right: 27px;
    align-items: center;
    justify-content:space-between;
    cursor: pointer;
  }
  .top-right-img{
    width: 28px;
    height: 28px;
  }
  .top-right-name{
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
  }
  .top-right-job{
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: rgba(11, 81, 147, 1);
  }
  .el-icon-arrow-down{
    font-weight: 700;
    font-size: 16px;
  }
</style>