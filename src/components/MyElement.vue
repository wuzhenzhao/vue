<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="app">
<!--      https://element.faas.ele.me/#/zh-CN-->
      <br/>
      <div style="width: 200px">
      <el-progress :percentage="50" :stroke-width="10"></el-progress>
      <el-progress :percentage="100" :format="format"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="100" status="warning"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>
      </div>
      <el-alert
        title="成功提示的文案"
        type="success">
      </el-alert>
      <el-alert
        title="消息提示的文案"
        type="info">
      </el-alert>
      <el-alert
        title="警告提示的文案"
        type="warning">
      </el-alert>
      <el-alert
        title="错误提示的文案"
        type="error">
      </el-alert>

      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>

      <el-button
        type="primary"
        @click="openFullScreen1"
        v-loading.fullscreen.lock="fullscreenLoading">
        指令方式
      </el-button>
      <el-button
        type="primary"
        @click="openFullScreen2">
        服务方式
      </el-button>
      <br/>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <br/>
      <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </el-row>
      <br/>
      <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>
      <br/>
      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
      <i class="el-icon-setting"></i>

      <el-upload ref="upload" action="http://10.16.81.43:8654/api/eemva/api/data/importEnterpriseRisk" :auto-upload="false"
                 :http-request="uploadFile"
                 :on-preview="handlePreview"
                 :on-remove="handleRemove"
                 :on-success="handleSucess" :file-list="fileList" >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <el-tag v-show="uploadLogo=='1'" >上传中</el-tag>
        <el-tag v-show="uploadLogo=='2'" type="success">上传成功</el-tag>
        <el-tag v-show="uploadLogo=='3'" type="danger">上传失败</el-tag>
      </el-upload>

    </div>
</template>
<script>
export default {
  name: 'MyElement',
  data () {
    return {
      fileList: [],
      fileData: 1,
      uploadLogo: 0,
      msg: 'Welcome to Your Vue.js MyElement',
      checked: true,
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      loading: true,
      fullscreenLoading: false
    }
  },
  methods: {
    format (percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    },
    openFullScreen1 () {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
    },
    openFullScreen2 () {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    },
    submitUpload: function () {
      this.fileData = new FormData()
      this.$refs.upload.submit()
      this.uploadLogo = '1'
      var that = this
      this.fileData.append('name', 'wuzz')
      this.$axios({
        method: 'post',
        type: 'post',
        url: '/api/eemva/api/data/importEnterpriseRisk',
        data: that.fileData,
        contentType: false,
        dataType: 'json'
      }).then(function (res) {
        that.uploadLogo = '2'
        let data = res.data.success
        alert(JSON.stringify(data))
        console.log(res)
      }).catch(function (err) {
        alert(err)
      })
    },
    uploadFile: function (file) {
      this.fileData.append('file', file.file)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleSucess (file) {
      console.log(file)
    }
  }
}
</script>
<style>
  body {
    margin: 0;
  }
</style>
