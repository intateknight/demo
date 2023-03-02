<template>
  <div>
    <div class="switch">
      <div class="switch__circle"></div>
      <div class="switch__circle switch__circle_top"></div>
      <div class="switch__container">
        <h2>Hello Friend !</h2>
        <div v-if="flag == 1">
          <p>
            '微信登入无需注册'
          </p>
          <div style="height: 300px;overflow: hidden;">
            <wxlogin
              :appid="'wxdf8750fc46c4cd3d'"
              :scope="'snsapi_login'"
              :theme="'black'"
              :redirect_uri="encodeURIComponent('http://1to2to3.cn/shop_tour/#/indexpe')"
              :href="'data:text/css;base64,LmltcG93ZXJCb3ggLnRpdGxlIHsNCiAgZGlzcGxheTogbm9uZTsNCn0NCi5pbXBvd2VyQm94IC5zdGF0dXMuc3RhdHVzX2Jyb3dzZXIgew0KICBkaXNwbGF5OiBub25lOw0KfQ0KLmltcG93ZXJCb3ggLnFyY29kZSB7DQogIGJvcmRlcjogbm9uZTsNCiAgd2lkdGg6IDIwMHB4Ow0KICBoZWlnaHQ6IDIwMHB4Ow0KfQ0KLmltcG93ZXJCb3ggLnN0YXR1c3sNCiAgZGlzcGxheTogbm9uZQ0KfQ=='"
              rel="external nofollow"
              style="width: 300px"
            >
            </wxlogin>
          </div>
        </div>
        
        <div v-if="flag == 2">
          <div class="container">
            <form>
              <input class="form__input" type="text" placeholder="Account" v-model='loginForm.name'/>
              <input class="form__input" type="password" placeholder="Password" v-model='loginForm.password'/>
            </form>
          </div>
          <div style="display: flex;justify-content: space-between;width: 70%;margin-left: 16%;">
            <div @click="changeflag(1)">扫码登入</div>
            <div @click="changeflag(3)">没有账户？立即注册</div>
          </div>
        </div>

        <div v-if="flag == 3">
          <div class="container">
            <form>
              <input class="form__input" type="text" placeholder="Account" v-model="registerForm.name"/>
              <input class="form__input" type="password" placeholder="Password" v-model='registerForm.password'/>
              <input class="form__input" type="password" placeholder="Confirm Password" v-model='registerForm.confirm'/>
            </form>
          </div>
          <div style="display: flex;justify-content: space-between;width: 70%;margin-left: 16%;">
            <div @click="changeflag(1)">扫码登入</div>
            <div @click="changeflag(2)">已有账户？立即登入</div>
          </div>
        </div>

        <div class="primary-btn" @click="changeflag(2)" v-if="flag == 1">
          账户登入
        </div>
        <div class="primary-btn"  v-if="flag == 2" @click="login()">
          立即登入
        </div>
        <div class="primary-btn"  v-if="flag == 3" @click="register()">
          立即注册
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wxlogin from 'vue-wxlogin'
import { Toast } from 'vant';
export default {
  components: { wxlogin },
  data() {
    return {
      flag:1,
      loginForm: {
        email: '',
        password: '',
      },
      registerForm: {
        name: '',
        password: '',
        confirm:'',
      },
    }
  },
  mounted() {
    let token = localStorage.getItem('token');
    if (token !== null) {
      this.$router.push('/indexpe')
    }
  },
  methods: {
    changeflag(x){
      this.flag = x
    },
    login() {
      window.localStorage.setItem('token','1')
      this.$router.push('/indexpe')
    },
    register() {
      console.log('注册');
      if(this.registerForm.name == '' || this.registerForm.password == '' || this.registerForm.confirm == ''){
        Toast.fail('不能为空');
      }else if(this.registerForm.password !== this.registerForm.confirm){
        Toast.fail('两次密码不同');
      }else{
        Toast.success('注册成功');
      }
    },
  },
}
</script>

<style lang="less" scoped>
.switch {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
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
    margin-top: 30px;
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
  .form__input {
        width: 80%;
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
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
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
      color: #a0a5a8;}
    }
</style>