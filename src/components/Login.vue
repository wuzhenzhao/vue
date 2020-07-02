<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="app">
      <div class="login-page">
      <section class="login-contain">
        <header>
          <h1>后台管理系统</h1>
          <p>management system</p>
        </header>
        <div class="form-content">
          <ul>
            <li>
              <div class="form-group">
                <label class="control-label">管理员账号：</label>
                <input type="text" placeholder="管理员账号..." class="form-control form-underlined" v-model="username"/>
              </div>
            </li>
            <li>
              <div class="form-group">
                <label class="control-label">管理员密码：</label>
                <input type="password" placeholder="管理员密码..." class="form-control form-underlined" id="adminPwd" v-model="password"/>
              </div>
            </li>
            <li>
              <div class="form-group">
                <label class="control-label">验证码</label>
                <input type="text" placeholder="验证码..." class="form-control form-underlined" id="imageCode" v-model="imageCode"/>
                <img src="http://localhost:8889/code/image">
              </div>

            </li>
            <li>
              <label class="check-box">
                <input type="checkbox" name="remember" v-model="checked"/>
                <span>记住账号密码</span>
              </label>
            </li>
            <a href="http://localhost:8889/auth/qq">QQ登录</a>
            <li>
              <button class="btn btn-lg btn-block" id="entry" v-on:click="login">立即登录</button>
            </li>
            <li>
              <p class="btm-info">©Copyright 2017-2020 <a href="#" target="_blank" title="DeathGhost">wuzz</a></p>
              <address class="btm-info">浙江省杭州市</address>
            </li>
          </ul>
        </div>
      </section>
      <div class="mask"></div>
      <div class="dialog">
        <div class="dialog-hd">
          <strong class="lt-title">标题</strong>
          <a class="rt-operate icon-remove JclosePanel" title="关闭"></a>
        </div>
        <div class="dialog-bd">
          <!--start::-->
          <p>这里是基础弹窗,可以定义文本信息，HTML信息这里是基础弹窗,可以定义文本信息，HTML信息。</p>
          <!--end::-->
        </div>
        <div class="dialog-ft">
          <button class="btn btn-info JyesBtn">确认</button>
          <button class="btn btn-secondary JnoBtn">关闭</button>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import '../other/javascript/login.js'
import qs from 'qs'
export default {
  name: 'Login',
  data () {
    return {
      checked: false,
      msg: 'Welcome to Your Vue.js Home',
      username: '',
      password: '',
      imageCode: ''
    }
  },
  methods: {
    login: function () {
      this.$axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 在请求之前对data传参进行格式转换
        transformRequest: [function (data) {
          data = qs.stringify(data)
          return data
        }],
        url: '/api/authentication/form',
        data: {
          'username': this.username,
          'password': this.password,
          'imageCode': this.imageCode,
          'remember-me': this.checked
        }
      }).then(function (res) {
        alert(JSON.stringify(res.data))
      }).catch(function (err) {
        alert(err)
      })
    }
  }
}
</script>
