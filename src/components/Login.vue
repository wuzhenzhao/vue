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
                <input type="text" placeholder="管理员账号..." class="form-control form-underlined" id="adminName"/>
              </div>
            </li>
            <li>
              <div class="form-group">
                <label class="control-label">管理员密码：</label>
                <input type="password" placeholder="管理员密码..." class="form-control form-underlined" id="adminPwd"/>
              </div>
            </li>
            <li>
              <label class="check-box">
                <input type="checkbox" name="remember"/>
                <span>记住账号密码</span>
              </label>
            </li>
            <li>
              <button class="btn btn-lg btn-block" id="entry" v-on:click="send">立即登录</button>
            </li>
            <li>
              <p class="btm-info">©Copyright 2006-2010 <a href="#" target="_blank" title="DeathGhost">DeathGhost.cn</a></p>
              <address class="btm-info">陕西省西安市雁塔区</address>
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
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Home'
    }
  },
  methods: {
    send: function () {
      this.$router.push('/index')
    }
  }
}
</script>
