<template>
  <div>
      <p>{{ message }}</p>
  </div>
</template>
<script>
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    // 初始化
    this.connectionSocket()
  },
  methods: {
    connectionSocket () {
      let socket = new SockJS('/endpointOyzc')
      // 获取STOMP子协议的客户端对象
      let stompClient = Stomp.over(socket)
      // 定义客户端的认证信息,按需求配置
      let headers = {
        'name': 'wuzz'
      }
      // 向服务器发起websocket连接
      stompClient.connect(headers, () => {
        // 订阅服务端提供的某个topic
        stompClient.subscribe('/topic/getResponse', (response) => {
          if (response.body) {
            this.message = response.body
          }
        }, () => {
          // 连接发生错误时的处理函数
          console.log('失败')
        })
      })
    }
  }
}
</script>
<style scoped>
</style>
