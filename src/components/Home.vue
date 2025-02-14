<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="app">
      <button  v-on:click="send">发送ajax请求1</button>
      <button  v-on:click="sendpost">post发送ajax请求</button>
      <button-counter></button-counter>
      <button-counter></button-counter>
      <button-counter></button-counter>
      <blog-post title="My journey with Vue"></blog-post>
      <blog-post title="Blogging with Vue"></blog-post>
      <blog-post title="Why Vue is so fun"></blog-post>
    </div>
</template>
<script>
/* eslint-disable no-new */
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Home'
    }
  },
  methods: {
    send: function () {
      this.$axios({
        method: 'get',
        url: '/wuzz/get.json?name=' + 'wuzz'
      }).then(function (res) {
        alert(JSON.stringify(res.data))
        console.log(res)
      }).catch(function (err) {
        alert(err)
      })
    },
    sendpost: function () {
      this.$axios({
        method: 'post',
        url: 'cem/api/handleEvent',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          'processOpinion': '处理意见',
          'batchProcess': 'false',
          'eventIndexCode': '979b212e-cc46-4f97-aa93-fc9e1338391b',
          'processStatus': 2,
          'complete': 'true',
          'id': 8892
        }
      }).then(function (res) {
        let data = res.data.success
        alert(JSON.stringify(data))
        console.log(res)
      }).catch(function (err) {
        alert(err)
      })
    }
  }
}
</script>
