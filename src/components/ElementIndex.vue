<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="app">
      <div style="left: 200px;position: fixed;width: 100%;" >
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          <el-menu-item index="5">系统设置</el-menu-item>
        </el-menu>

        <div id="box">
          <ul id="con1" ref="con1" :class="{anim:animate==true}">
            <a>
            <li v-for='item in items' :key="item" v-on:click="animateClick">
              <i class="el-icon-bell"></i>{{item}}
            </li>
            </a>
          </ul>
        </div>
      </div>

        <div style="left: 200px;width: 100%;position: fixed;overflow: auto;top: 90px;bottom: 0;">
          <div class="block">
<!--            <span class="demonstration">默认 Hover 指示器触发</span>-->
            <el-carousel height="150px" :autoplay="false">
              <el-carousel-item v-for="item in urls" :key="item" :style="{'backgroundImage': 'url(' + item + ')'}"
              style="background-size: auto 100%">
                <h3 class="small" >1</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="block">
<!--            <span class="demonstration">Click 指示器触发</span>-->
            <el-carousel trigger="click" height="150px">
              <el-carousel-item v-for="item in urls" :key="item" :style="{'backgroundImage': 'url(' + item + ')'}"
              style="background-size: auto 100%">
                <h3 class="small">1</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
          <el-scrollbar style="height:600px;width: 300px">
          <div class="demo-image__lazy" >
            <el-image v-for="url in urls" :key="url" :src="url" :lazy="false"></el-image>
          </div>
          </el-scrollbar>

          <el-table
            :data="tableData"
            border>
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
      </div>

      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="width: 200px;position: fixed;height: 100%;">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1" style="min-width:100px">选项1</el-menu-item>
              <el-menu-item index="1-2" style="min-width:100px">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3" style="min-width:100px">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1" style="min-width:100px">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">导航5</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
</template>
<script>
export default {
  name: 'ElementIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js ElementIndex',
      activeIndex: '1',
      activeIndex2: '1',
      count: 0,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ],
      animate: false,
      items: [
        '马云在小米扫地。。。。。',
        '雷军在阿里拖地。。。。。',
        '王勤在百度倒垃圾。。。。'
      ]
    }
  },
  created () {
    setInterval(this.scroll, 3000)
  },
  methods: {
    handleSelect: function (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen: function () {
    },
    handleClose: function () {
    },
    load () {
      this.count += 2
    },
    scroll () {
      this.animate = true // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
      setTimeout(() => { //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
        this.items.push(this.items[0]) // 将数组的第一个元素添加到数组的
        this.items.shift() // 删除数组的第一个元素
        this.animate = false // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 500)
    },
    animateClick () {
      alert('.......')
    }
  }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-carousel__arrow {
    background-color: green;
  }

  body .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .el-scrollbar__thumb {
    background-color: red;
  }

  #box{
    width: 300px;
    height: 32px;
    overflow: hidden;
    padding-left: 10px;
    border: black;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    width: 100%
  }
  .anim{
    transition: all 0.5s;
    margin-top: -30px;
  }
  #con1 li{
    list-style: none;
    line-height: 30px;
    height: 30px;
    color: #F56C6C;
  }
</style>
