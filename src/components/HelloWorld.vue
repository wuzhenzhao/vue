<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <div style="height: 300px;width: 300px;float: left">
        <h2>这是一个标题h2</h2>
        <h3>这是一个标题h3</h3>
        <button v-on:click="tiaozhuan">页面跳转按钮Ajax</button>
        <button v-on:click="tiaozhuanIndex">页面首页跳转按钮Index</button>
        <button v-on:click="tiaozhuanElement">页面跳转按钮Element</button>
        <img src="../images/head.jpg" width="100" height="100" />
        <a href="https://www.baidu.com">这是一个跳转链接</a>
      </div>
      <div style="height: 300px;width: 200px;float: left">
        <h4 style="color: firebrick">有序列表:</h4>
        <ol>
          <li v-for="todo in todos" v-bind:key="todo.text">
            {{ todo.text }}
          </li>
        </ol>
      </div>
      <!--border: black 2px solid;-->
      <div style="height: 300px;width: 200px;float: left">
        <h4 style="color: firebrick">无序列表:</h4>
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
      </div>
      <div style="height: 300px;width: 300px;float: left">
        <h4 style="color: firebrick">表格:</h4>
        <table style="height: 100px; width: 250px;border-collapse: collapse" border="2" >
          <tr align="center">
            <th>姓名</th>
            <th>年龄</th>
          </tr>
          <tr align="center">
            <td>wuzz</td>
            <td>11</td>
          </tr>
          <tr align="center">
            <td>jack</td>
            <td>22</td>
          </tr>
        </table>
      </div>
      <div style="height: 300px;width: 340px;float: left">
        <h4 style="color: firebrick">表单:</h4>
        <form>
          输入框: <input type="text" name="firstname" v-model="modelPassworld">{{modelPassworld}}<br>
          密码框: <input type="password" name="pwd"><br>
          单选框：
          <input type="radio" name="sex" value="male">Male
          <input type="radio" name="sex" value="female">Female<br>
          复选框：
          <input type="checkbox" name="vehicle" value="Bike">I have a bike
          <input type="checkbox" name="vehicle" value="Car">I have a car<br>
          Username: <input type="text" name="user"><br>
          提交按钮：
          <input type="submit" value="Submit">
        </form>
      </div>
    </div>
    <div id="app-2" v-if="seen" style="height: 300px;width: 560px;float: left">
      <h4 style="color: firebrick">动态绑定，计算属性及侦听器：</h4>
      <button v-on:click="clickTest">测试按钮</button>
      <button v-on:click="reverseMessage">反转消息</button>
      <span v-bind:title="message">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span><br/>
      <span v-once>这个将不会改变: {{ message }}</span><br/>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
      <h3>计算属性：{{computeFiled}}</h3>
    </div>
    <div id="app-3" v-if="seen" style="height: 300px;width: 200px;float: left">
      <h4 style="color: firebrick">Class 与 Style 绑定：</h4>
      <div class="static"
           v-bind:class="{ active: isActive, 'text-danger': hasError }">class-style</div>
      <div style="margin-top: 10px"
           v-bind:class="[{ active: isActive }, errorClass]">class-style array</div>
    </div>
    <div id="app-4" v-if="seen" style="height: 300px;width: 600px;float: left">
      <h4 style="color: firebrick">条件渲染：</h4>
      <button @click="awesomeTest(message,seen)">条件渲染按钮切换</button>
      <!-- 点击事件将只会触发一次 -->
      <button v-on:click.once="awesomeTest(message,seen)">点击事件将只会触发一次</button>
      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: '页面加载于 ' + new Date().toLocaleString(),
      seen: true,
      todos: [],
      modelPassworld: '',
      rawHtml: '<span style="color: red">aaaa</span>',
      isActive: true,
      hasError: true,
      errorClass: 'text-danger',
      awesome: false
    }
  },
  methods: {
    tiaozhuan: function () {
      this.$router.push('/home')
    },
    tiaozhuanIndex: function () {
      this.$router.push('/login')
    },
    tiaozhuanElement: function () {
      this.$router.push('/myElement')
    },
    clickTest: function () {
      this.message = '22222222222'
      // this.seen = false
      this.todos = [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
      this.rawHtml = '<span style="color: red">This should be red</span>'
    },
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
    },
    awesomeTest: function (message, seen) {
      alert(message + '  ' + seen)
      this.awesome ? this.awesome = false : this.awesome = true
    }
  },
  computed: {
    // 计算属性的 getter
    computeFiled: function () {
      // `this` 指向 vm 实例
      return this.msg + ' Wuzz'
    }
  },
  watch: {// 侦听器
    msg: function (newMsg, oldMsg) {
      alert(oldMsg + '==============>' + newMsg)
    }
  }, // 以下时vue生命周期函数
  beforeCreate: function () {
    console.group('------beforeCreate创建前状态------')
    console.log(this.todos)
  },
  created: function () {
    console.group('------created创建完毕状态------')
    console.log(this.todos)
  },
  beforeMount: function () {
    console.group('------beforeMount挂载前状态------')
    console.log(this.todos)
  },
  mounted: function () {
    console.group('------mounted 挂载结束状态------')
  },
  beforeUpdate: function () {
    console.group('beforeUpdate 更新前状态===============》')
  },
  updated: function () {
    console.group('updated 更新完成状态===============》')
  },
  beforeDestroy: function () {
    console.group('beforeDestroy 销毁前状态===============》')
  },
  destroyed: function () {
    console.group('destroyed 销毁完成状态===============》')
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
