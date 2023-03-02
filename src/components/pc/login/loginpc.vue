<template>
  <div class="bgc">
    <div class="main-box">
    <div :class="['container', 'container-register', { 'is-txl': isLogin }]">
      <form>
        <h2 class="title">Create Account</h2>
        <span class="text">or use email for registration</span>
        <input class="form__input" type="text" placeholder="姓名" v-model='registerForm.name'/>
        <input class="form__input" type="text" placeholder="账户" v-model='registerForm.username'/>
        <input class="form__input" type="password" placeholder="密码" v-model='registerForm.password'/>
        <input class="form__input" type="password" placeholder="确认密码" v-model='registerForm.confirm'/>
        <div class="primary-btn" @click="register()">立即注册</div>
      </form>
    </div>
    <div
      :class="['container', 'container-login', { 'is-txl is-z200': isLogin }]"
    >
      <form>
        <h2 class="title">Sign in to Website</h2>
        <span class="text">or use email for registration</span>
        <input class="form__input" type="text" placeholder="Email" v-model='loginForm.email'/>
        <input class="form__input" type="password" placeholder="Password" v-model='loginForm.password'/>
        <div class="primary-btn" @click="login()">立即登录</div>
      </form>
    </div>
    <div :class="['switch', { login: isLogin }]">
      <div class="switch__circle"></div>
      <div class="switch__circle switch__circle_top"></div>
      <div class="switch__container">
        <h2>{{ isLogin ? 'Hello Friend !' : 'Welcome Back !' }}</h2>
        <p>
          {{
            isLogin
              ? '微信扫码登入'
              : '微信登入无需注册'
          }}
        </p>
        <div style="height: 300px;overflow: hidden;">
          <wxlogin
            :appid="'wxdf8750fc46c4cd3d'"
            :scope="'snsapi_login'"
            :theme="'black'"
            :redirect_uri="encodeURIComponent('http://1to2to3.cn/shop_tour/#/indexpc')"
            :href="'data:text/css;base64,LmltcG93ZXJCb3ggLnRpdGxlIHsNCiAgZGlzcGxheTogbm9uZTsNCn0NCi5pbXBvd2VyQm94IC5zdGF0dXMuc3RhdHVzX2Jyb3dzZXIgew0KICBkaXNwbGF5OiBub25lOw0KfQ0KLmltcG93ZXJCb3ggLnFyY29kZSB7DQogIGJvcmRlcjogbm9uZTsNCiAgd2lkdGg6IDIwMHB4Ow0KICBoZWlnaHQ6IDIwMHB4Ow0KfQ0KLmltcG93ZXJCb3ggLnN0YXR1c3sNCiAgZGlzcGxheTogbm9uZQ0KfQ=='"
            rel="external nofollow"
            style="width: 300px"
          >
          </wxlogin>
        </div>
        <div class="primary-btn" @click="isLogin = !isLogin">
          {{ isLogin ? '前往注册' : '前往登录' }}
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import wxlogin from 'vue-wxlogin'
import { login,register } from '@/api/api'   
export default {
  name: 'LoginBox',
  components: { wxlogin },
  data() {
    return {
      isLogin: false,
      loginForm: {
        email: '',
        password: '',
      },
      registerForm: {
        name: '',
        username: '',
        password: '',
        confirm:'',
      },
    }
  },
  methods: {
    login() {
      window.localStorage.setItem('token','1')
      this.$router.push('/indexpc')
    },
    register() {
      console.log('注册');
      if(this.registerForm.name == '' || this.registerForm.username == '' || this.registerForm.password == '' || this.registerForm.confirm == ''){
        this.$message({
          showClose: true,
          message: '数据不能为空',
          type: 'error',
          center: true
        });
      }else if(this.registerForm.password !== this.registerForm.confirm){
        this.$message({
          showClose: true,
          message: '两次密码不同',
          type: 'error',
          center: true
        });
      }else{
        var obj ={
          name:this.registerForm.name,
          username:this.registerForm.username,
          password:this.registerForm.password,
        }
        register(obj).then((res)=>{
          if(res.code == 1401){
            console.log(res);
            this.$message({
            showClose: true,
            message: res.message,
            type: 'error',
            center: true}); 
          }else{
            console.log(res);
            this.$message({
            showClose: true,
            message: res.message,
            type: 'success',
            center: true}); 
            setTimeout(() => {
              this.isLogin = true
              this.registerForm.name = ''
              this.registerForm.username = ''
              this.registerForm.password = ''
              this.registerForm.confirm = ''
            }, 2000);
          }
        })
      }
    },

  },
  mounted() {
    let token = localStorage.getItem('token');
    if (token !== null) {
      this.$router.push('/indexpc')
    }
  },
}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.bgc{
  width: 100vw;
  height: 100vh;
  background-color: #ecf0f3;
  padding-top: 50px;
}
.main-box {
  margin: 0 auto;
  position: relative;
  width: 700px;
  // min-width: 1000px;
  // min-height: 600px;
  height: 450px;
  padding:  25px;
  background-color: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 400px;
    height: 100%;
    padding-bottom: 15px;
    background-color: #ecf0f3;
    transition: all 1.25s;
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      color: #a0a5a8;
      .title {
        font-size: 34px;
        font-weight: 700;
        line-height: 3;
        color: #181818;
      }
      .text {
        margin-top: 30px;
        margin-bottom: 12px;
      }
      .form__input {
        width: 350px;
        height: 40px;
        margin: 4px 0;
        padding-left: 25px;
        font-size: 13px;
        letter-spacing: 0.15px;
        border: none;
        outline: none;
        // font-family: 'Montserrat', sans-serif;
        background-color: #ecf0f3;
        transition: 0.25s ease;
        border-radius: 8px;
        box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
        &::placeholder {
          color: #a0a5a8;
        }
      }
    }
  }
  .container-register {
    z-index: 100;
    left: calc(100% - 400px);
  }
  .container-login {
    left: calc(100% - 400px);
    z-index: 0;
  }
  .is-txl {
    left: 0;
    transition: 1.25s;
    transform-origin: right;
  }
  .is-z200 {
    z-index: 200;
    transition: 1.25s;
  }
  .switch {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    padding: 50px;
    z-index: 200;
    transition: 1.25s;
    background-color: #ecf0f3;
    overflow: hidden;
    box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;
    color: #a0a5a8;
    .switch__circle {
      position: absolute;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background-color: #ecf0f3;
      box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
      bottom: -60%;
      left: -60%;
      transition: 1.25s;
    }
    .switch__circle_top {
      top: -30%;
      left: 60%;
      width: 300px;
      height: 300px;
    }
    .switch__container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute;
      width: 250px;
      padding: 40px 30px;
      transition: 1.25s;
      h2 {
        font-size: 20px;
        font-weight: 700;
        line-height: 3;
        color: #181818;
      }
      p {
        font-size: 14px;
        letter-spacing: 0.25px;
        text-align: center;
        line-height: 1.6;
      }
    }
  }
  .login {
    left: calc(100% - 250px);
    .switch__circle {
      left: 0;
    }
  }
  .primary-btn {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    margin-top: 20px;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    letter-spacing: 2px;
    background-color: #4b70e2;
    color: #f9f9f9;
    cursor: pointer;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    &:hover {
      box-shadow: 4px 4px 6px 0 rgb(255 255 255 / 50%),
        -4px -4px 6px 0 rgb(116 125 136 / 50%),
        inset -4px -4px 6px 0 rgb(255 255 255 / 20%),
        inset 4px 4px 6px 0 rgb(0 0 0 / 40%);
    }
  }
}
</style>

