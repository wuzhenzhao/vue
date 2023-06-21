<template>
  <div id="app" style="margin-top: 20px"
       v-loading="mainLoaing"
       element-loading-text="等待建立连接"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)">
  <el-tabs v-model="activeName" @tab-click="handleClick"
           style="text-align: center;margin-left: 50px;font-weight: bolder;font-size: 20px">
    <el-tab-pane label="ActiveMQ" name="first" >
      <el-image style="width: 30px; height: 30px" :src="activemqImage" ></el-image>
      ActiveMQ</el-tab-pane>
    <el-tab-pane label="Kafka" name="second">
      <el-image style="width: 30px; height: 30px" :src="kafkaImage"></el-image>
      Kafka</el-tab-pane>

    <el-tab-pane label="RabbitMQ管理" name="third">
      <el-image style="width: 30px; height: 30px" :src="rabbitImage" ></el-image>
      RabbitMQ</el-tab-pane>
  </el-tabs>
    <!--ActiveMq-->
    <div style="width:300px;margin-left: 20px;margin-top: -20px;display:flex">
      <el-form ref="form" :model="form" label-width="80px" v-show="show"
               style="margin-top: 20px">
        <el-form-item label="IP:" required>
          <el-input  v-model="amqProducerData.ip" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="端口:" required>
          <el-input v-model="amqProducerData.port" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="用户名:" required>
          <el-input v-model="amqProducerData.username" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="密码:" required>
          <el-input v-model="amqProducerData.password" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="主题:" required>
          <el-input v-model="amqProducerData.topic" style="width: 200px"></el-input>
        </el-form-item>
        <div style="display: flex;">
        <el-form-item>
          <el-button type="primary" @click="onActiveMqProducer">发起连接</el-button>
        </el-form-item>
          <i class="el-icon-success" style="color: green;font-size:200%;
          margin-left: 10px;margin-top: 5px" v-show="amqProducerSuccessShow"></i>
        </div>
      </el-form>
      <div style="display: flex">
      <el-form ref="form" :model="form" label-width="80px" v-show="show"
        style="margin-top: 20px;display: flex">
        <el-form-item label="发送消息:">
          <el-input type="textarea" v-model="amqProducerData.message" rows="15"
                    style="width: 1000px;"></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 300px;margin-left: -50px">
          <el-button type="success" @click="amqSendMessage"
                     :disabled="amqSendMessageOK">发送</el-button>
        </el-form-item>
      </el-form>
      </div>
    </div>
    <hr v-show="show">
    <div style="width:300px;margin-left: 20px;margin-top: 10px;display:flex;">
    <el-form ref="form" :model="form" label-width="80px" v-show="show"
             style="margin-top: 20px">
      <el-form-item label="IP" required>
        <el-input v-model="amqConsumerData.ip" style="width: 200px"></el-input>
      </el-form-item>

      <el-form-item label="端口" required>
        <el-input v-model="amqConsumerData.port" style="width: 200px"></el-input>
      </el-form-item>

      <el-form-item label="用户名" required>
        <el-input v-model="amqConsumerData.username" style="width: 200px"></el-input>
      </el-form-item>

      <el-form-item label="密码" required>
        <el-input v-model="amqConsumerData.password" style="width: 200px"></el-input>
      </el-form-item>

      <el-form-item label="主题" required>
        <el-input v-model="amqConsumerData.topic" style="width: 200px"></el-input>
      </el-form-item>
      <div style="display: flex">
      <el-form-item>
        <el-button type="primary" @click="onActiveMqConsumer">立即订阅</el-button>
      </el-form-item>
      <i class="el-icon-success" style="color: green;font-size:200%;
          margin-left: 10px;margin-top: 5px" v-show="amqConsumerSuccessShow"></i>
      </div>
    </el-form>
      <el-form ref="form" :model="form" label-width="80px" v-show="show"
               style="margin-top: 20px">
        <el-form-item label="消息">
          <div v-loading="amqLoading"
               element-loading-text="等待消息接入"
               element-loading-spinner="el-icon-loading"
               element-loading-background="rgba(0, 0, 0, 0.8)">
          <el-input type="textarea" v-model="amqConsumerData.message" rows="15"
                    :disabled="disabledInput"
          style="width: 1000px;"></el-input>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <!--kafka-->
    <div style="width:300px;margin-left: 20px;margin-top: -10px;display:flex">
      <el-form ref="form" :model="form" label-width="80px" v-show="kafkaShow"
               style="margin-top: 20px">
        <el-form-item label="IP:" required>
          <el-input v-model="kafkaProducerData.ip" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="端口:" required>
          <el-input v-model="kafkaProducerData.port" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="主题:" required>
          <el-input v-model="kafkaProducerData.topic" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="用户名:">
          <el-input v-model="kafkaProducerData.username" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="kafkaProducerData.password" style="width: 200px"></el-input>
        </el-form-item>
        <div style="display: flex;">
          <el-form-item>
            <el-button type="primary" @click="onKafkaProducer">发起连接</el-button>
          </el-form-item>
          <i class="el-icon-success" style="color: green;font-size:200%;
          margin-left: 10px;margin-top: 5px" v-show="kafkaProducerData.kafkaProducerSuccessShow"></i>
        </div>
      </el-form>
      <div style="display: flex">
        <el-form ref="form" :model="form" label-width="80px" v-show="kafkaShow"
                 style="margin-top: 20px;display: flex">
          <el-form-item label="发送消息:">
            <el-input type="textarea" v-model="kafkaProducerData.message" rows="15"
                      style="width: 1000px;"></el-input>
          </el-form-item>
          <el-form-item style="margin-top: 300px;margin-left: -50px">
            <el-button type="success" @click="kafkaSendMessage"
                       :disabled="kafkaProducerData.kafkaSendMessageOK">发送</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <hr v-show="kafkaShow">
    <div style="width:300px;margin-left: 20px;margin-top: 10px;display:flex">
      <el-form ref="form" :model="form" label-width="80px" v-show="kafkaShow"
               style="margin-top: 20px;">
        <el-form-item label="IP" required>
          <el-input v-model="kafkaConsumerData.ip" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="端口" required>
          <el-input v-model="kafkaConsumerData.port" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="主题" required>
          <el-input v-model="kafkaConsumerData.topic" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="用户名:" >
          <el-input v-model="kafkaConsumerData.username" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="密码:" >
          <el-input v-model="kafkaConsumerData.password" style="width: 200px"></el-input>
        </el-form-item>
          <div style="display: flex">
          <el-form-item>
            <el-button type="primary" @click="onKafkaConsumer">立即订阅</el-button>
          </el-form-item>
          <i class="el-icon-success" style="color: green;font-size:200%;
          margin-left: 10px;margin-top: 5px" v-show="kafkaConsumerData.kafkaConsumerSuccessShow"></i>
        </div>
      </el-form>
      <el-form ref="form" :model="form" label-width="80px" v-show="kafkaShow"
               style="margin-top: 20px">
        <el-form-item label="消息">
          <div v-loading="kafkaConsumerData.kafkaLoading"
               element-loading-text="等待消息接入"
               element-loading-spinner="el-icon-loading"
               element-loading-background="rgba(0, 0, 0, 0.8)">
            <el-input type="textarea" v-model="kafkaConsumerData.message" rows="15"
                      :disabled="disabledInput"
                      style="width: 1000px;"></el-input>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <!--rabbit-->
    <div style="width:300px;margin-left: 20px;margin-top: -10px;display:flex">
      <el-form ref="form" :model="form" label-width="80px" v-show="rabbitShow"
               style="margin-top: 20px">
        <el-form-item label="IP" required>
          <el-input v-model="rabbitProducerData.ip" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="端口" required>
          <el-input v-model="rabbitProducerData.port" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="用户名" required>
          <el-input v-model="rabbitProducerData.username" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="密码" required>
          <el-input v-model="rabbitProducerData.password" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="类型" required>
          <el-input v-model="rabbitProducerData.directType" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="交换机" required>
          <el-input v-model="rabbitProducerData.exchange" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="路由键" required>
          <el-input v-model="rabbitProducerData.routerKey" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="Queue" required>
          <el-input v-model="rabbitProducerData.topic" style="width: 200px"></el-input>
        </el-form-item>
        <div style="display: flex;margin-left: 220px;margin-top: -60px">
          <el-form-item >
            <el-button type="primary" @click="onRabbitProducer">发起连接</el-button>
          </el-form-item>
          <i class="el-icon-success" style="color: green;font-size:200%;
          margin-left: 10px;margin-top: 5px" v-show="rabbitProducerData.rabbitProducerSuccessShow"></i>
        </div>
      </el-form>
      <div style="display: flex">
        <el-form ref="form" :model="form" label-width="80px" v-show="rabbitShow"
                 style="margin-top: 20px;display: flex">
          <el-form-item label="发送消息:">
            <el-input type="textarea" v-model="rabbitProducerData.message" rows="15"
                      style="width: 1000px;"></el-input>
          </el-form-item>
          <el-form-item style="margin-top: 300px;margin-left: -50px">
            <el-button type="success" @click="rabbitSendMessage"
                       :disabled="rabbitProducerData.rabbitSendMessageOK">发送</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <hr v-show="rabbitShow">
    <div style="width:300px;margin-left: 20px;margin-top: 10px;display:flex">
      <el-form ref="form" :model="form" label-width="80px" v-show="rabbitShow"
               style="margin-top: 20px;">
        <el-form-item label="IP" required>
          <el-input v-model="rabbitConsumerData.ip" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="端口" required>
          <el-input v-model="rabbitConsumerData.port" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="用户名" required>
          <el-input v-model="rabbitConsumerData.username" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="密码" required>
          <el-input v-model="rabbitConsumerData.password" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="类型" required>
          <el-input v-model="rabbitConsumerData.directType" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="交换机" required>
          <el-input v-model="rabbitConsumerData.exchange" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="路由键" required>
          <el-input v-model="rabbitConsumerData.routerKey" style="width: 200px"></el-input>
        </el-form-item>

        <el-form-item label="Queue" required>
          <el-input v-model="rabbitConsumerData.topic" style="width: 200px"></el-input>
        </el-form-item>

        <div style="display: flex;margin-left: 220px;margin-top: -60px">
          <el-form-item>
            <el-button type="primary" @click="onRabbitConsumer">立即订阅</el-button>
          </el-form-item>
          <i class="el-icon-success" style="color: green;font-size:200%;
          margin-left: 10px;margin-top: 5px" v-show="rabbitConsumerData.rabbitConsumerSuccessShow"></i>
        </div>
      </el-form>
      <el-form ref="form" :model="form" label-width="80px" v-show="rabbitShow"
               style="margin-top: 20px">
        <el-form-item label="消息">
          <div v-loading="rabbitConsumerData.rabbitLoading"
               element-loading-text="等待消息接入"
               element-loading-spinner="el-icon-loading"
               element-loading-background="rgba(0, 0, 0, 0.8)">
            <el-input type="textarea" v-model="rabbitConsumerData.message" rows="15"
                      :disabled="disabledInput"
                      style="width: 1000px;"></el-input>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
export default {
  data () {
    return {
      disabledInput: true,
      rabbitImage: require('../images/rabbit.jpg'),
      kafkaImage: require('../images/kafka.jpg'),
      activemqImage: require('../images/activemq.jpg'),
      mainLoaing: true,
      amqLoading: false,
      amqSendMessageOK: true,
      activeName: 'first',
      kafkaShow: false,
      rabbitShow: false,
      show: true,
      amqProducerSuccessShow: false,
      amqConsumerSuccessShow: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '11111'
      },
      amqProducerData: {
        ip: '192.168.1.1',
        port: '7018',
        username: 'admin',
        password: 'es046kCI',
        topic: 'mqtools',
        message: ''
      },
      amqConsumerData: {
        ip: '192.168.1.1',
        port: '7018',
        username: 'admin',
        password: 'es046kCI',
        topic: 'mqtools',
        message: ''
      },
      kafkaProducerData: {
        ip: '192.168.1.1',
        port: '29092',
        topic: 'mqtools',
        kafkaProducerSuccessShow: false,
        kafkaSendMessageOK: true,
        message: '',
        username: '',
        password: ''
      },
      kafkaConsumerData: {
        ip: '192.168.1.1',
        port: '29092',
        topic: 'mqtools',
        kafkaConsumerSuccessShow: false,
        kafkaLoading: false,
        message: '',
        username: '',
        password: ''
      },
      rabbitProducerData: {
        ip: '192.168.1.1',
        port: '6005',
        topic: 'mqtools_topic',
        exchange: 'mqtools_exchange',
        routerKey: 'mqtools_key',
        username: 'root',
        password: 'AUHQ5P4V',
        directType: 'direct',
        rabbitProducerSuccessShow: false,
        rabbitSendMessageOK: true,
        message: ''
      },
      rabbitConsumerData: {
        ip: '192.168.1.1',
        port: '6005',
        topic: 'mqtools_topic',
        exchange: 'mqtools_exchange',
        routerKey: 'mqtools_key',
        username: 'root',
        directType: 'direct',
        password: 'AUHQ5P4V',
        rabbitConsumerSuccessShow: false,
        rabbitLoading: false,
        message: ''
      }
    }
  },
  mounted () {
    if (this.activeName === 'first') {
      this.show = true
      this.kafkaShow = false
      this.rabbitShow = false
    } else if (this.activeName === 'second') {
      this.show = false
      this.kafkaShow = true
      this.rabbitShow = false
    } else if (this.activeName === 'third') {
      this.show = false
      this.kafkaShow = false
      this.rabbitShow = true
    }
    // 初始化
    this.connectionSocket()
  },
  methods: {
    connectionSocket () {
      let socket = new SockJS('/endpointOyzc')
      socket.addEventListener('open', (e) => {
        console.log('Connection open addEventListener...')
        this.mainLoaing = false
      })
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
            if (this.activeName === 'first') {
              console.log('first' + response.body)
              this.amqConsumerData.message = response.body
              if (this.amqLoading === false) {
                this.$message({
                  message: '消息已更新',
                  duration: 3000,
                  type: 'success'
                })
              }
              this.amqLoading = false
            } else if (this.activeName === 'second') {
              console.log('second' + response.body)
              this.kafkaConsumerData.message = response.body
              if (this.kafkaConsumerData.kafkaLoading === false) {
                this.$message({
                  message: '消息已更新',
                  duration: 3000,
                  type: 'success'
                })
              }
              this.kafkaConsumerData.kafkaLoading = false
            } else if (this.activeName === 'third') {
              this.rabbitConsumerData.message = response.body
              console.log('third' + response.body)
              this.rabbitConsumerData.message = response.body
              if (this.rabbitConsumerData.rabbitLoading === false) {
                this.$message({
                  message: '消息已更新',
                  duration: 3000,
                  type: 'success'
                })
              }
              this.rabbitConsumerData.rabbitLoading = false
            }
          }
        }, () => {
          // 连接发生错误时的处理函数
          console.log('失败')
        })
      })
    },
    onSubmit () {
      console.log('submit!')
    },
    onKafkaConsumer: function () {
      this.$axios({
        method: 'post',
        url: 'api/initKafkaConsumerExecutor',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          'ip': this.kafkaConsumerData.ip,
          'port': this.kafkaConsumerData.port,
          'topic': this.kafkaConsumerData.topic,
          'username': this.kafkaConsumerData.username,
          'password': this.kafkaConsumerData.password
        }
      }).then((res) => {
        let data = res.data.code
        if (data === '000') {
          this.kafkaConsumerData.kafkaLoading = true
          this.kafkaConsumerData.kafkaConsumerSuccessShow = true
          this.$message({
            message: res.data.message,
            duration: 3000,
            type: 'success'
          })
        } else {
          console.log('onKafkaConsumer fail')
          this.kafkaConsumerData.kafkaLoading = false
          this.kafkaConsumerData.kafkaConsumerSuccessShow = false
          this.$message.error(res.data.message)
        }
      }).catch(function (err) {
        alert(err)
      })
    },
    onRabbitConsumer: function () {
      this.$axios({
        method: 'post',
        url: 'api/initRabbitMQConsumerExecutor',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          'ip': this.rabbitConsumerData.ip,
          'port': this.rabbitConsumerData.port,
          'username': this.rabbitConsumerData.username,
          'password': this.rabbitConsumerData.password,
          'exchange': this.rabbitConsumerData.exchange,
          'routerKey': this.rabbitConsumerData.routerKey,
          'topic': this.rabbitConsumerData.topic,
          'directType': this.rabbitConsumerData.directType
        }
      }).then((res) => {
        console.log(JSON.stringify(res.data))
        if (res.data.code === '000') {
          this.rabbitConsumerData.rabbitLoading = true
          this.rabbitConsumerData.rabbitConsumerSuccessShow = true
          this.$message({
            message: res.data.message,
            duration: 3000,
            type: 'success'
          })
        } else {
          console.log('onActiveMqConsumer fail')
          this.rabbitConsumerData.rabbitLoading = false
          this.rabbitConsumerData.rabbitConsumerSuccessShow = false
          this.$message.error(res.data.message)
        }
      }).catch(function (err) {
        alert(err)
      })
    },
    rabbitSendMessage: function () {
      const params = new URLSearchParams()
      params.append('message', this.rabbitProducerData.message)
      this.$axios({
        method: 'post',
        url: 'api/rabbitSendMessage',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params
      }).then((res) => {
        console.log(JSON.stringify(res.data))
        if (res.data.code === '000') {
          this.$message({
            message: '消息发送成功',
            duration: 3000,
            type: 'success'
          })
        } else {
          this.$message.error(res.data.message)
        }
      }).catch(function (err) {
        alert(err)
      })
    },
    onRabbitProducer: function () {
      this.$axios({
        method: 'post',
        url: 'api/initRabbitMQProducerExecutor',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          'ip': this.rabbitProducerData.ip,
          'port': this.rabbitProducerData.port,
          'username': this.rabbitProducerData.username,
          'password': this.rabbitProducerData.password,
          'exchange': this.rabbitProducerData.exchange,
          'routerKey': this.rabbitProducerData.routerKey,
          'directType': this.rabbitProducerData.directType,
          'topic': this.rabbitProducerData.topic
        }
      }).then((res) => {
        let data = res.data.message
        console.log(this)
        if (res.data.code === '000') {
          this.rabbitProducerData.rabbitProducerSuccessShow = true
          this.rabbitProducerData.rabbitSendMessageOK = false
          this.$message({
            message: data,
            duration: 3000,
            type: 'success'
          })
        } else {
          this.rabbitProducerSuccessShow = false
          this.rabbitSendMessageOK = true
          this.$message.error(data)
        }
      }).catch(function (err) {
        this.$message.error(err)
      })
    },
    kafkaSendMessage: function () {
      const params = new URLSearchParams()
      params.append('message', this.kafkaProducerData.message)
      this.$axios({
        method: 'post',
        url: 'api/kafkaSendMessage',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params
      }).then((res) => {
        console.log(JSON.stringify(res.data))
        if (res.data.code === '000') {
          this.$message({
            message: '消息发送成功',
            duration: 3000,
            type: 'success'
          })
        } else {
          this.$message.error(res.data.message)
        }
      }).catch(function (err) {
        alert(err)
      })
    },
    amqSendMessage: function () {
      const params = new URLSearchParams()
      params.append('message', this.amqProducerData.message)
      this.$axios({
        method: 'post',
        url: 'api/amqSendMessage',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params
      }).then((res) => {
        console.log(JSON.stringify(res.data))
        if (res.data.code === '000') {
          this.$message({
            message: '消息发送成功',
            duration: 3000,
            type: 'success'
          })
        } else {
          this.$message.error(res.data.message)
        }
      }).catch(function (err) {
        alert(err)
      })
    },
    onKafkaProducer: function () {
      this.$axios({
        method: 'post',
        url: 'api/initKafkaProducerExecutor',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          'ip': this.kafkaProducerData.ip,
          'port': this.kafkaProducerData.port,
          'topic': this.kafkaProducerData.topic,
          'username': this.kafkaProducerData.username,
          'password': this.kafkaProducerData.password
        }
      }).then((res) => {
        let data = res.data.message
        console.log(this)
        if (res.data.code === '000') {
          this.kafkaProducerData.kafkaProducerSuccessShow = true
          this.kafkaProducerData.kafkaSendMessageOK = false
          this.$message({
            message: data,
            duration: 3000,
            type: 'success'
          })
        } else {
          this.kafkaProducerSuccessShow = false
          this.kafkaSendMessageOK = true
          this.$message.error(data)
        }
      }).catch(function (err) {
        this.$message.error(err)
      })
    },
    onActiveMqProducer: function () {
      this.$axios({
        method: 'post',
        url: 'api/initProducerExecutor',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          'ip': this.amqProducerData.ip,
          'port': this.amqProducerData.port,
          'username': this.amqProducerData.username,
          'password': this.amqProducerData.password,
          'topic': this.amqProducerData.topic
        }
      }).then((res) => {
        let data = res.data.message
        console.log(this)
        if (res.data.code === '000') {
          this.amqProducerSuccessShow = true
          this.amqSendMessageOK = false
          this.$message({
            message: data,
            duration: 3000,
            type: 'success'
          })
        } else {
          this.amqProducerSuccessShow = false
          this.amqSendMessageOK = true
          this.$message.error(data)
        }
      }).catch(function (err) {
        this.$message.error(err)
      })
    },
    onActiveMqConsumer: function () {
      this.$axios({
        method: 'post',
        url: 'api/initConsumerExecutor',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          'ip': this.amqConsumerData.ip,
          'port': this.amqConsumerData.port,
          'username': this.amqConsumerData.username,
          'password': this.amqConsumerData.password,
          'topic': this.amqConsumerData.topic
        }
      }).then((res) => {
        let data = res.data.code
        console.log(res)
        if (data === '000') {
          this.amqLoading = true
          this.amqConsumerSuccessShow = true
          this.$message({
            message: res.data.message,
            duration: 3000,
            type: 'success'
          })
        } else {
          console.log('onActiveMqConsumer fail')
          this.amqLoading = false
          this.amqConsumerSuccessShow = false
          this.$message.error(res.data.message)
        }
      }).catch((err) => {
        this.$message.error(err)
      })
    },
    handleClick (tab, event) {
      if (this.activeName === 'first') {
        this.show = true
        this.kafkaShow = false
        this.rabbitShow = false
      } else if (this.activeName === 'second') {
        this.show = false
        this.kafkaShow = true
        this.rabbitShow = false
      } else if (this.activeName === 'third') {
        this.show = false
        this.kafkaShow = false
        this.rabbitShow = true
      }

      console.log(this.activeName)
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
  .loadingClass{
    height: 50px;
    width: 100px;
  }
</style>
