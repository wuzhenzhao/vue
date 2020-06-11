<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="app">
<!--      <button  v-on:click="send">发送ajax请求</button>-->
      <div class="main-wrap">
        <div class="side-nav">
          <div class="side-logo">
            <div class="logo">
              <span class="logo-ico">
                <i class="i-l-1"></i>
                <i class="i-l-2"></i>
                <i class="i-l-3"></i>
              </span>
              <strong>模块化后台管理模板</strong>
            </div>
          </div>
          <nav class="side-menu content mCustomScrollbar" data-mcs-theme="minimal-dark">
            <h2>
              <a  class="InitialPage"><i class="icon-dashboard"></i>数据概况</a>
            </h2>
            <ul>
              <li>
                <dl>
                  <dt>
                    <i class="icon-columns"></i>页面基础布局<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a href="#txhzbj">弹性盒子布局</a>
                  </dd>
                  <dd>
                    <a href="#pblbj">瀑布流布局</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-inbox"></i>按钮UI<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a href="#btnId">基础按钮</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-table"></i>表格UI<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a href="#table">基础表格</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-list-alt"></i>表单UI<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a href="#form">表单结构样式</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-external-link"></i>弹出窗口<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a href="#tkxlzs">基础弹出层</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-bar-chart"></i>百度统计echarts图表<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a >echarts统计图表</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-font"></i>文本编辑器<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a >百度UEDITOR编辑器</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-road"></i>进度条<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a href="#jdt">progress进度条兼容</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-tags"></i>Tab选项卡<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a href="#tab">Tab选项卡</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-filter"></i>下拉菜单<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a >按钮式下拉菜单</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-sitemap"></i>页面分组标题<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a href="#ymfzbt">页面标题</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-spinner"></i>旋转动画<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a href="#xzdh">刷新加载动画</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-fighter-jet"></i>面包屑导航<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a href="#mbxdh">面包屑</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-laptop"></i>文本面板<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a >文本面板</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-leaf"></i>块引用<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a >块引用</a>
                  </dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>
                    <i class="icon-star"></i>第三方弹窗组件<i class="icon-angle-right"></i>
                  </dt>
                  <dd>
                    <a href="#webtcczj">web弹层组件</a>
                  </dd>
                </dl>
              </li>
            </ul>
          </nav>
          <footer class="side-footer">@Wuzhenzhao 版权所有</footer>
        </div>
        <div class="content-wrap">
          <header class="top-hd">
            <div class="hd-lt">
              <a class="icon-reorder"></a>
            </div>
            <div class="hd-rt">
              <ul>
                <li>
                  <a href="#" target="_blank"><i class="icon-home"></i>前台访问</a>
                </li>
                <li>
                  <a><i class="icon-random"></i>清除缓存</a>
                </li>
                <li>
                  <a><i class="icon-user"></i>管理员:<em>DeathGhost</em></a>
                </li>
                <li>
                  <a><i class="icon-bell-alt"></i>系统消息</a>
                </li>
                <li>
                  <a href="javascript:void(0)" id="JsSignOut"><i class="icon-signout"></i>安全退出</a>
                </li>
              </ul>
            </div>
          </header>
          <main class="main-cont content mCustomScrollbar">
            <!--开始::内容-->
            <div class="page-wrap">
              <section class="page-hd">
                <header>
                  <h2 class="title"><i class="icon-home"></i>模块化后台管理模板</h2>
                  <p class="title-description">
                    简约风模快化后台管理模板，自由打造个性化后台管理系统,
                    <em class="text-primary">HTML5</em>+<em class="text-primary">CSS3</em>经典组合;
                    该模板由<a class="text-primary" title="DeathGhost.cn">DeathGhost</a>个人提供,仅供参考。
                  </p>
                </header>
                <hr>
              </section>
              <blockquote class="blockquote mb-20">
                <p class="text-success">原始模板为php文件格式，css为less分类编辑，您所看到的生成后的html版本</p>
                <p class="text-success">当前页面左侧导航根据根据路径而定，这里可能未产生效果</p>
                <p class="text-success">引入样式建议link的方式引入页面，避免使用css导入样式，特此说明</p>
                <p>本模板基于HTML5+CSS3的基础上进行设计制作，仅支持高版本浏览器，如果亲还在使用低版本浏览器，
                  暂时只能i'm sorryO(∩_∩)O咯~望亲见谅！</p>
                <p>内容包含：页面基础排版（flex/column-count）布局、按钮系列组、表格系列、进度条、分页、表单、
                  文本编辑器、统计图表、TAB选项卡、CSS3基础动画及第三方弹层插件等常见页面使用元素。</p>
              </blockquote>
              <div class="panel panel-default">
                <div class="panel-bd capitalize">
                  浏览器兼容：google chrome、microsoft edge、360浏览器、火狐浏览器、uc浏览器等高版本浏览器。
                </div>
              </div>

              <div class="clear mt-20">
                <div class="fl">
                  <button class="btn btn-secondary"><i class="icon-double-angle-left"></i>上一周</button>
                  <button class="btn btn-secondary">下一周<i class="icon-double-angle-right"></i></button>
                </div>
                <div class="fr input-group">
                  <input type="text" class="form-control" placeholder="搜索..." style="width:290px;"/>
                  <button class="btn btn-secondary-outline">搜索</button>
                </div>
              </div>
              <table class="table table-bordered  mb-15 mt-15">
                <thead>
                <tr class="cen">
                  <th>今日订单数（单位：单）</th>
                  <th>今日订单额（单位：元）</th>
                  <th>今日销售量（单位：件）</th>
                  <th>库存警告（单位：件）</th>
                </tr>
                </thead>
                <tbody>
                <tr class="cen">
                  <td><b>839</b></td>
                  <td><b>￥12000.00</b></td>
                  <td><b>932</b></td>
                  <td><b class="text-warning">8</b></td>
                </tr>
                </tbody>
              </table>
              <div class="lt clear">
                <div class="fl">
                  <button class="btn btn-warning"><i class="icon-cog"></i>批量编辑</button>
                  <button class="btn btn-danger"><i class="icon-trash"></i>批量删除</button>
                  <button class="btn btn-disabled" disabled="disabled"><i class="icon-remove-sign"></i>不可编辑</button>
                </div>
                <div class="pagination fr"></div>
              </div>
              <!--瀑布流布局3列：：嵌套-->
              <div class="flow-layout col-3">
                <ul>
                  <li class="child-wrap">
                    <div class="panel panel-default">
                      <div class="panel-bd">
                        后台模板不存在页面<abbr class="capitalize">seo</abbr>优化问题，这里将head单独提出来，加载公共引入文件。
                      </div>
                    </div>
                  </li>
                  <li class="child-wrap">
                    <div class="panel panel-default">
                      <div class="panel-bd">
                        整体结构比较清晰，大家可根据项目对其调整； 该模板色值预定义6类，对应每个模块颜色。
                        即：<span class="text-muted">text-muted</span>、
                        <span class="text-primary">text-primary</span>、
                        <span class="text-success">text-success</span>、
                        <span class="text-info">text-info</span>、
                        <span class="text-warning">text-warning</span>、
                        <span class="text-danger">text-danger</span>需要重新定义或增删自行修改即可。
                      </div>
                    </div>
                  </li>
                  <li class="child-wrap">
                    <div class="panel panel-default">
                      <div class="panel-bd">
                        <span class="text-primary">文本编辑器</span>及<span class="text-primary">数据统计图表</span>均引用百度相关插件，可另行处理。
                      </div>
                    </div>
                  </li>
                  <li class="child-wrap">
                    <div class="panel panel-default">
                      <div class="panel-bd">
                        样式通过简单的<span class="text-info capitalize">less格式</span>分类引入，需要二次编辑处理可以对其进行调整。
                      </div>
                    </div>
                  </li>
                  <li class="child-wrap">
                    <div class="panel panel-default">
                      <div class="panel-bd capitalize">
                        javascript包含公共库及第三方插件以及页面js文件。
                      </div>
                    </div>
                  </li>
                  <li class="child-wrap">
                    <div class="panel panel-default">
                      <div class="panel-bd">
                        <span class="text-info capitalize">images</span>文件为模板所需图片文件；<span class="text-info capitalize">upload</span>为测试图片，亲们可根据项目定义路径。
                      </div>
                    </div>
                  </li>
                  <li class="child-wrap">
                    <div class="panel panel-default">
                      <div class="panel-bd">
                        正式项目可以文件进行实际操作时直接归置到该模板的根目录下即可，而<span class="text-danger capitalize">现在所看到的仅为demo演示而已</span>，<span class="text-muted">可对其删除</span>。
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="page-wrap" id="txhzbj">
              <!--开始::内容-->
              <section class="page-hd">
                <header>
                  <h2 class="title">弹性盒子布局</h2>
                  <p class="title-description">
                    flex容器有单行多行和反转排列，具体查看CSS3相关文件，该模板仅提供页面常用
                    布局结构，<em class="text-primary">单行平均布局</em>与<em class="text-primary">多行5列</em>布局。
                    弹性盒子本无样式，具体内容间隔，亲们根据内容容器进行设置<em class="text-primary">外边距(margin)</em>或
                    <em class="text-primary">内边距(padding)</em>设置。
                  </p>
                </header>
                <hr>
              </section>
              <blockquote class="blockquote mb-10">
                CSS3弹性盒模型布局结构——<b>单行</b>样式
              </blockquote>
              <ul class="flex flex-nowrap">
                <li class="box-child">
                  <div class="panel panel-primary mr-10">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·单行样式
                    </div>
                  </div>
                </li>
                <li class="box-child">
                  <div class="panel panel-secondary mr-10">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·单行样式
                    </div>
                  </div>
                </li>
                <li class="box-child">
                  <div class="panel panel-primary">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·单行样式
                    </div>
                  </div>
                </li>
              </ul>
              <blockquote class="blockquote mb-10">
                CSS3弹性盒模型布局结构——<b>两列多行</b>样式
              </blockquote>
              <ul class="flex flex-wrap flex-col-2">
                <li class="box-child">
                  <div class="panel panel-primary mr-10">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·单行样式
                    </div>
                  </div>
                </li>
                <li class="box-child">
                  <div class="panel panel-secondary">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·单行样式
                    </div>
                  </div>
                </li>
                <li class="box-child">
                  <div class="panel panel-primary mr-10">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·两列多行样式
                    </div>
                  </div>
                </li>
                <li class="box-child">
                  <div class="panel panel-primary">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·两列多行样式
                    </div>
                  </div>
                </li>
              </ul>
              <blockquote class="blockquote mb-10">
                CSS3弹性盒模型布局结构——<b>三列多行</b>样式
              </blockquote>
              <ul class="flex flex-wrap flex-col-3">
                <li class="box-child">
                  <div class="panel panel-primary mr-10">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·三列多行样式
                    </div>
                  </div>
                </li>
                <li class="box-child">
                  <div class="panel panel-secondary mr-10">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·三列多行样式
                    </div>
                  </div>
                </li>
                <li class="box-child">
                  <div class="panel panel-primary">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·三列多行样式
                    </div>
                  </div>
                </li>
              </ul>
              <blockquote class="blockquote mb-10">
                CSS3弹性盒模型布局结构——<b>四列多行</b>样式
              </blockquote>
              <ul class="flex flex-wrap flex-col-4">
                <li class="box-child">
                  <div class="panel panel-primary">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·四列多行样式
                    </div>
                  </div>
                </li>
                <li class="box-child">
                  <div class="panel panel-secondary">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·四列多行样式
                    </div>
                  </div>
                </li>
                <li class="box-child">
                  <div class="panel panel-primary">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·四列多行样式
                    </div>
                  </div>
                </li>
                <li class="box-child">
                  <div class="panel panel-primary">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·四列多行样式
                    </div>
                  </div>
                </li>
              </ul>
              <blockquote class="blockquote mb-10">
                CSS3弹性盒模型布局结构——<b>五列多行</b>样式
              </blockquote>
              <ul class="flex flex-wrap flex-col-5">
                <li class="box-child">
                  <div class="panel panel-primary">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·五列多行样式
                    </div>
                  </div>
                </li>
                <li class="box-child">
                  <div class="panel panel-secondary">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·五列多行样式
                    </div>
                  </div>
                </li>
                <li class="box-child">
                  <div class="panel panel-primary">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·五列多行样式
                    </div>
                  </div>
                </li>
                <li class="box-child">
                  <div class="panel panel-primary">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·五列多行样式
                    </div>
                  </div>
                </li>
                <li class="box-child">
                  <div class="panel panel-primary">
                    <div class="panel-hd">弹性盒子布局</div>
                    <div class="panel-bd">
                      弹性盒子布局·五列多行样式
                    </div>
                  </div>
                </li>
              </ul>
              <!--开始::结束-->
            </div>
            <div class="page-wrap" id="pblbj">
              <!--开始::内容-->
              <section class="page-hd">
                <header>
                  <h2 class="title">弹性盒子布局</h2>
                  <p class="title-description">
                    CSS3中column-count元素被划分的列数。具体查看相关文档。
                    此模板内置最多5列，具体还是根据项目内容而定，同时注意小屏幕显示情况。
                    相关值：flow-layout col-2/col-3/col-4/col-5
                  </p>
                </header>
                <hr>
              </section>
              <div class="page-wrap">
                <blockquote class="blockquote mb-20">
                  CSS3中column-count元素被划分的列数。具体查看相关文档。
                </blockquote>
                <div class="flow-layout col-2">
                  <ul>
                    <li class="child-wrap">
                      <div class="panel panel-default">
                        <div class="panel-bd">
                          面板内容
                        </div>
                      </div>
                    </li>
                    <li class="child-wrap">
                      <div class="panel panel-default">
                        <div class="panel-bd">
                          面板内容
                        </div>
                      </div>
                    </li>
                    <li class="child-wrap">
                      <div class="panel panel-default">
                        <div class="panel-bd">
                          面板内容面板内容面板内容面板内容面板内容面板内容面板内容
                        </div>
                      </div>
                    </li>
                    <li class="child-wrap">
                      <div class="panel panel-default">
                        <div class="panel-bd">
                          面板内容面板内容面板内容面板内容面板内容面板内容
                          面板内容面板内容面板内容面板内容面板内容面板内容面板内容
                          面板内容面板内容面板内容面板内容面板内容面板内容
                          面板内容面板内容面板内容面板内容面板内容面板内容面板内容
                        </div>
                      </div>
                    </li>
                    <li class="child-wrap">
                      <div class="panel panel-default">
                        <div class="panel-bd">
                          面板内容
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!--开始::结束-->
            </div>
            <div class="page-wrap" id="btnId">
              <!--开始::内容-->
              <section class="page-hd">
                <header>
                  <h2 class="title">按钮系列展示</h2>
                  <p class="title-description">
                    按钮系列，具体按钮选择根据页面结构布局色彩搭配
                  </p>
                </header>
                <hr>
              </section>
              <table class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>基础按钮</th>
                  <th>线性按钮</th>
                  <th>圆角按钮</th>
                  <th>按钮尺寸</th>
                </tr>
                </thead>
                <tbody>
                <tr class="cen">
                  <td>
                    <button class="btn btn-primary">基础按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-primary-outline">线性按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-primary radius">圆角按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-primary-outline radius size-s">按钮尺寸</button>
                  </td>
                </tr>
                <tr class="cen">
                  <td>
                    <button class="btn btn-secondary">基础按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-secondary-outline">线性按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-secondary radius">圆角按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-secondary-outline radius size-m">按钮尺寸</button>
                  </td>
                </tr>
                <tr class="cen">
                  <td>
                    <button class="btn btn-info">基础按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-info-outline">线性按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-info radius">圆角按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-info-outline radius size-l">按钮尺寸</button>
                  </td>
                </tr>
                <tr class="cen">
                  <td>
                    <button class="btn btn-warning">基础按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-warning-outline">线性按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-warning radius">圆角按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-warning-outline radius size-l">按钮尺寸</button>
                  </td>
                </tr>
                <tr class="cen">
                  <td>
                    <button class="btn btn-danger">基础按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-danger-outline">线性按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-danger radius">圆角按钮</button>
                  </td>
                  <td>
                    <button class="btn btn-danger-outline radius size-xl">按钮尺寸</button>
                  </td>
                </tr>
                <tr class="cen">
                  <td>
                    <button class="btn btn-danger radius-rounded">椭圆形边角</button>
                  </td>
                  <td colspan="3">
                    <button class="btn btn-danger-outline btn-block">100%通行按钮</button>
                  </td>
                </tr>
                </tbody>
              </table>
              <!--开始::结束-->
              <div class="page-wrap" id="table">
                <!--开始::内容-->
                <section class="page-hd">
                  <header>
                    <h2 class="title">表格系列展示</h2>
                    <p class="title-description">
                      表格系列，四种表格样式，隔行换色，鼠标经过等
                    </p>
                  </header>
                  <hr>
                </section>
                <table class="table mb-15">
                  <thead>
                  <tr>
                    <th><input type="checkbox"/></th>
                    <th>产品名称</th>
                    <th>库存数量</th>
                    <th>市场价</th>
                    <th>销售价</th>
                    <th>操作</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="cen">
                    <td><input type="checkbox"/></td>
                    <td class="lt"><a href="#">正宗陕西洛川红富士 新鲜水果特惠</a></td>
                    <td>50000斤</td>
                    <td>￥4.00</td>
                    <td>￥3.80</td>
                    <td>
                      <a title="编辑" class="mr-5">编辑</a>
                      <a title="详情" class="mr-5">详情</a>
                      <a title="删除">删除</a>
                    </td>
                  </tr>
                  <tr class="cen">
                    <td><input type="checkbox"/></td>
                    <td class="lt"><a href="#">正宗陕西洛川红富士 新鲜水果特惠</a></td>
                    <td>50000斤</td>
                    <td>￥4.00</td>
                    <td>￥3.80</td>
                    <td>
                      <a title="编辑" class="mr-5">编辑</a>
                      <a title="详情" class="mr-5">详情</a>
                      <a title="删除">删除</a>
                    </td>
                  </tr>
                  <tr class="cen">
                    <td><input type="checkbox"/></td>
                    <td class="lt"><a href="#">正宗陕西洛川红富士 新鲜水果特惠</a></td>
                    <td>50000斤</td>
                    <td>￥4.00</td>
                    <td>￥3.80</td>
                    <td>
                      <a title="编辑" class="mr-5">编辑</a>
                      <a title="详情" class="mr-5">详情</a>
                      <a title="删除">删除</a>
                    </td>
                  </tr>
                  <tr class="cen">
                    <td><input type="checkbox"/></td>
                    <td class="lt"><a href="#">正宗陕西洛川红富士 新鲜水果特惠</a></td>
                    <td>50000斤</td>
                    <td>￥4.00</td>
                    <td>￥3.80</td>
                    <td>
                      <a title="编辑" class="mr-5">编辑</a>
                      <a title="详情" class="mr-5">详情</a>
                      <a title="删除">删除</a>
                    </td>
                  </tr>
                  <tr class="cen">
                    <td><input type="checkbox"/></td>
                    <td class="lt"><a href="#">正宗陕西洛川红富士 新鲜水果特惠</a></td>
                    <td>50000斤</td>
                    <td>￥4.00</td>
                    <td>￥3.80</td>
                    <td>
                      <a title="编辑" class="mr-5">编辑</a>
                      <a title="详情" class="mr-5">详情</a>
                      <a title="删除">删除</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <table class="table table-bordered  mb-15">
                  <thead>
                  <tr>
                    <th>id</th>
                    <th>产品名称</th>
                    <th>库存数量</th>
                    <th>市场价</th>
                    <th>销售价</th>
                    <th>操作</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="cen">
                    <td>#001</td>
                    <td class="lt"><a href="#">正宗陕西洛川红富士 新鲜水果特惠</a></td>
                    <td>50000斤</td>
                    <td>￥4.00</td>
                    <td>￥3.80</td>
                    <td>
                      <a title="编辑" class="mr-5">编辑</a>
                      <a title="详情" class="mr-5">详情</a>
                      <a title="删除">删除</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-striped mb-15">
                  <thead>
                  <tr>
                    <th>id</th>
                    <th>产品名称</th>
                    <th>库存数量</th>
                    <th>市场价</th>
                    <th>销售价</th>
                    <th>操作</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="cen">
                    <td>#001</td>
                    <td class="lt"><a href="#">正宗陕西洛川红富士 新鲜水果特惠</a></td>
                    <td>50000斤</td>
                    <td>￥4.00</td>
                    <td>￥3.80</td>
                    <td>
                      <a title="编辑" class="mr-5">编辑</a>
                      <a title="详情" class="mr-5">详情</a>
                      <a title="删除">删除</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-striped table-hover">
                  <thead>
                  <tr>
                    <th>id</th>
                    <th>产品名称</th>
                    <th>库存数量</th>
                    <th>市场价</th>
                    <th>销售价</th>
                    <th>操作</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="cen">
                    <td>#001</td>
                    <td class="lt"><a href="#">正宗陕西洛川红富士 新鲜水果特惠</a></td>
                    <td>50000斤</td>
                    <td>￥4.00</td>
                    <td>￥3.80</td>
                    <td>
                      <a title="编辑" class="mr-5">编辑</a>
                      <a title="详情" class="mr-5">详情</a>
                      <a title="删除">删除</a>
                    </td>
                  </tr>
                  <tr class="cen">
                    <td>#001</td>
                    <td class="lt"><a href="#">正宗陕西洛川红富士 新鲜水果特惠</a></td>
                    <td>50000斤</td>
                    <td>￥4.00</td>
                    <td>￥3.80</td>
                    <td>
                      <a title="编辑" class="mr-5">编辑</a>
                      <a title="详情" class="mr-5">详情</a>
                      <a title="删除">删除</a>
                    </td>
                  </tr>
                  <tr class="cen">
                    <td>#001</td>
                    <td class="lt"><a href="#">正宗陕西洛川红富士 新鲜水果特惠</a></td>
                    <td>50000斤</td>
                    <td>￥4.00</td>
                    <td>￥3.80</td>
                    <td>
                      <a title="编辑" class="mr-5">编辑</a>
                      <a title="详情" class="mr-5">详情</a>
                      <a title="删除">删除</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <!--开始::结束-->
              </div>
              <div class="page-wrap" id="form">
                <!--开始::内容-->
                <section class="page-hd">
                  <header>
                    <h2 class="title">表单结构展示</h2>
                    <p class="title-description">
                      两列式表单结构，一般针对产品详情，文章详情应用。
                    </p>
                  </header>
                  <hr>
                </section>
                <div class="form-group-col-2">
                  <div class="form-label">商品标题：</div>
                  <div class="form-cont">
                    <input type="text" placeholder="100%输入框..." class="form-control form-boxed">
                  </div>
                </div>
                <div class="form-group-col-2">
                  <div class="form-label">手机号码：</div>
                  <div class="form-cont">
                    <input type="tel" placeholder="手机号码..." class="form-control form-boxed" style="width:300px;">
                    <button class="btn btn-secondary-outline">测试</button>
                    <span class="word-aux"><i class="icon-warning-sign"></i>清正确输入11位手机号码</span>
                  </div>
                </div>
                <div class="form-group-col-2">
                  <div class="form-label">电子邮箱：</div>
                  <div class="form-cont">
                    <input type="email" placeholder="电子邮箱..." class="form-control form-boxed">
                  </div>
                </div>
                <div class="form-group-col-2">
                  <div class="form-label">保持四个字否则截断：</div>
                  <div class="form-cont">
                    <select style="width:auto;">
                      <option>商品分类</option>
                      <option>女装</option>
                      <option>男装</option>
                    </select>
                    <select style="width:auto;">
                      <option>子分类</option>
                      <option>上装</option>
                      <option>下装</option>
                    </select>
                  </div>
                </div>
                <div class="form-group-col-2">
                  <div class="form-label">兴趣爱好：</div>
                  <div class="form-cont">
                    <label class="check-box">
                      <input type="checkbox" checked="checked" name="mmm"/>
                      <span>读书</span>
                    </label>
                    <label class="check-box">
                      <input type="checkbox" name="mmm"/>
                      <span>听音乐</span>
                    </label>
                    <label class="check-box">
                      <input type="checkbox" name="mmm"/>
                      <span>羽毛球</span>
                    </label>
                    <label class="check-box">
                      <input type="checkbox" name="mmm"/>
                      <span>篮球</span>
                    </label>
                    <label class="check-box">
                      <input type="checkbox" name="mmm"/>
                      <span>足球</span>
                    </label>
                    <label class="check-box">
                      <input type="checkbox" checked="checked" name="mmm"/>
                      <span>读书</span>
                    </label>
                    <label class="check-box">
                      <input type="checkbox" name="mmm"/>
                      <span>听音乐</span>
                    </label>
                    <label class="check-box">
                      <input type="checkbox" name="mmm"/>
                      <span>羽毛球</span>
                    </label>
                    <label class="check-box">
                      <input type="checkbox" name="mmm"/>
                      <span>篮球</span>
                    </label>
                    <label class="check-box">
                      <input type="checkbox" name="mmm"/>
                      <span>足球</span>
                    </label>
                  </div>
                </div>
                <div class="form-group-col-2">
                  <div class="form-label">性别：</div>
                  <div class="form-cont">
                    <label class="radio">
                      <input type="radio" name="sex"/>
                      <span>男士</span>
                    </label>
                    <label class="radio">
                      <input type="radio" name="sex"  checked="checked"/>
                      <span>女士</span>
                    </label>
                    <label class="radio">
                      <input type="radio" name="sex"/>
                      <span>保密</span>
                    </label>
                  </div>
                </div>
                <div class="form-group-col-2">
                  <div class="form-label">摘要：</div>
                  <div class="form-cont">
                    <textarea class="form-control form-boxed">摘要信息</textarea>
                  </div>
                </div>
                <div class="form-group-col-2">
                  <div class="form-label"></div>
                  <div class="form-cont">
                    <input type="submit" class="btn btn-primary" value="提交表单" />
                    <input type="reset" class="btn btn-disabled" value="禁止" />
                  </div>
                </div>
                <!--开始::结束-->
              </div>
              <div class="page-wrap" id="tkxlzs">
                <!--开始::内容-->
                <section class="page-hd">
                  <header>
                    <h2 class="title">弹窗系列展示</h2>
                    <p class="title-description">
                      文本弹窗class="JopenPanel"，消息提示class="Jmsg"，含遮罩弹窗class="JopenMaskPanel"等。
                    </p>
                  </header>
                  <hr>
                </section>
                <div class="panel panel-default">
                  <!--<div class="panel-hd">按钮</div>-->
                  <div class="panel-bd">
                    <button class="btn btn-info JopenPanel mr-10">我是不带遮罩弹窗</button>
                    <button class="btn btn-info JopenMaskPanel mr-10">我是带遮罩弹窗</button>
                    <button class="btn btn-info Jmsg">我是HTML5 dialog5秒隐藏文本会话</button>
                    <dialog><span class="icon-volume-down"></span>你好，我是HTML5 dialog文本会话窗口,前面的图标自行替换</dialog>
                  </div>
                </div>
                <!--开始::结束-->
              </div>
              <div class="page-wrap">
                <!--开始::内容-->
                <section class="page-hd" id="jdt">
                  <header>
                    <h2 class="title">进度条</h2>
                    <p class="title-description">
                      HTML5 progress进度条，内部写入防止部分浏览器不是别。
                    </p>
                  </header>
                  <hr>
                </section>
                <div class="panel panel-default">
                  <div class="panel-hd">进度条</div>
                  <div class="panel-bd">
                    <progress value="35" max="100">
                      <span class="progress" style="width:100%;">
                        <i class="value" style="width:35%;"></i>
                      </span>
                    </progress>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-hd">步骤样式一</div>
                  <div class="panel-bd">
                    <div class="step-progress">
                      <ul>
                        <li class="progressing">
                          <span>第一步</span>
                        </li>
                        <li class="progressing">
                          <span>第二步</span>
                        </li>
                        <li>
                          <span>第三步</span>
                        </li>
                        <li>
                          <span>第四步</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-hd">步骤样式二</div>
                  <div class="panel-bd">
                    <div class="serial-number">
                      <ul>
                        <li class="progressing">
                          <span>首先</span>
                        </li>
                        <li class="progressing">
                          <span>其次</span>
                        </li>
                        <li class="progressing">
                          <span>再次</span>
                        </li>
                        <li>
                          <span>最后</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!--开始::结束-->
              </div>
              <div class="page-wrap" id="tab">
                <!--开始::内容-->
                <section class="page-hd">
                  <header>
                    <h2 class="title">Tab选项卡标签页</h2>
                    <p class="title-description">
                      Tab选项卡标签页，可复用，带标题和不带标题。
                    </p>
                  </header>
                  <hr>
                </section>
                <div class="panel panel-default">
                  <!--<div class="panel-hd">按钮</div>-->
                  <div class="panel-bd">
                    <div class="card">
                      <div class="card-header">
                        <div class="tab-title fl">
                          <strong class="title">Tab选项卡标题</strong>
                        </div>
                        <ul class="tab-nav fr">
                          <li class="active">今日新闻</li>
                          <li>陕西新闻</li>
                        </ul>
                      </div>
                      <div class="tab-cont" style="display: block;">
                        TABcontent11
                      </div>
                      <div class="tab-cont">
                        TABcontent222
                      </div>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <!--<div class="panel-hd">按钮</div>-->
                  <div class="panel-bd">
                    <div class="card">
                      <div class="card-header">
                        <ul class="tab-nav">
                          <li class="active">头条新闻</li>
                          <li>陕西新闻</li>
                          <li>延安新闻</li>
                          <li>洛川新闻</li>
                        </ul>
                      </div>
                      <div class="tab-cont" style="display: block;">
                        TABcontent11
                      </div>
                      <div class="tab-cont">
                        TABcontent222
                      </div>
                      <div class="tab-cont">
                        TABcontent333
                      </div>
                    </div>
                  </div>
                </div>
                <!--开始::结束-->
              </div>
              <div class="page-wrap" id="ymfzbt">
                <!--开始::内容-->
                <section class="page-hd">
                  <header>
                    <h2 class="title">页面分组标题</h2>
                    <p class="title-description">
                      页面分组标题，场景应用于表单分组，相关信息标题。
                    </p>
                  </header>
                  <hr>
                </section>
                <div class="panel panel-default">
                  <div class="panel-bd">
                    <fieldset class="field-title">
                      <legend>引用区块 - 一般风格</legend>
                    </fieldset>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-bd">
                    <fieldset class="field-title dashed">
                      <legend>引用区块 - 虚线</legend>
                    </fieldset>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-bd">
                    <fieldset class="field-title center">
                      <legend>引用区块 - 居中</legend>
                    </fieldset>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-bd">
                    <fieldset class="field-title dotted center">
                      <legend>引用区块 -点划线居中</legend>
                    </fieldset>
                  </div>
                </div>
                <!--开始::结束-->
              </div>
              <div class="page-wrap" id="xzdh">
                <!--开始::内容-->
                <section class="page-hd">
                  <header>
                    <h2 class="title">动画效果</h2>
                    <p class="title-description">
                      数据加载，刷新页面等旋转动画效果。
                    </p>
                  </header>
                  <hr>
                </section>
                <div class="panel panel-default">
                  <div class="panel-bd">
                    <span><span class="icon-spin icon-spinner"></span>数据加载中...</span>
                    <span><span class="icon-spin icon-refresh"></span>刷新中...</span>
                    <span><span class="icon-spin icon-cogs"></span>图标自己根据图标库添加对应属性值...</span>
                  </div>
                </div>
                <button class="btn btn-info xzdh">确认</button>
                <!--开始::结束-->
              </div>
              <div class="page-wrap" id="mbxdh">
                <!--开始::内容-->
                <section class="page-hd">
                  <header>
                    <h2 class="title">面包屑导航</h2>
                    <p class="title-description">
                      页面顶部面包屑导航示例。
                    </p>
                  </header>
                  <hr>
                </section>
                <div class="breadcrumb">
                  <ul>
                    <li><a href="#">首页</a><i class="icon-angle-right"></i></li>
                    <li><a href="#">分类页</a><i class="icon-angle-right"></i></li>
                    <li>详情</li>
                  </ul>
                </div>
                <!--开始::结束-->
              </div>
              <div class="page-wrap" id="webtcczj">
                <!--开始::内容-->
                <section class="page-hd">
                  <header>
                    <h2 class="title">web弹层组件</h2>
                    <p class="title-description">
                      npm i layui-src
                      layer是一款近年来备受青睐的web弹层组件，她具备全方位的解决方案，致力于服务各水平段的开发人员，您的页面会轻松地拥有丰富友好的操作体验。更多效果查看其<a href="http://layer.layui.com/" target="_blank">官方文档</a>
                    </p>
                  </header>
                  <hr>
                </section>
                <div class="panel panel-default">
                  <div class="panel-bd">
                    <button id="a1" class="btn btn-info">Alert</button>
                    <button id="a2" class="btn btn-info">询问层</button>
                    <button id="a3" class="btn btn-info">提示层</button>
                    <button id="a4" class="btn btn-info">加载层</button>
                    <button id="a5" class="btn btn-info">小tips</button>
                    <button id="a6" class="btn btn-info">Tab层</button>
                    <button id="a7" class="btn btn-info">iframe弹窗</button>
                  </div>
                </div>
                <!--开始::结束-->
              </div>
            </div>
          </main>
        </div>
      </div>

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
      <div class="dialog2">
        <div class="icon-spin icon-spinner">数据加载中...</div>
      </div>
    </div>
</template>
<script>
/* eslint-disable no-new */
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Home'
    }
  },
  methods: {
    elasticBoxLayout: function () {
    }
  }
}
</script>
