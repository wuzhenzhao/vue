$(function () {
  'use strict'
  // 左侧导航菜单效果
  $('.side-menu li dt').click(function () {
    $(this).parents('li').addClass('open')
    $(this).parents('.side-menu').find('.InitialPage').removeClass('active')
    $(this).parents('li').siblings().removeClass('open')
  })
  $('.side-menu dd a').click(function () {
    $(this).parents('li').addClass('open')
    $(this).parents('li').siblings().removeClass('open')
  })
  $('.side-menu li').each(function () {
    // 判断链接相当（当前页面导航样式）
    if ($(this).find('a').attr('href') === window.location.pathname) {
      $(this).addClass('open')
      $(this).siblings().find('.InitialPage').removeClass('active')
      $('.InitialPage').removeClass('active')
    } else if ($('.side-menu h2 a').attr('href') === window.location.pathname) {
      $('.InitialPage').addClass('active')
    }
  })
  // Tab选项卡.
  $('.tab-nav li').click(function () {
    var liIndex = $('.tab-nav li').index(this)
    $(this).addClass('active').siblings().removeClass('active')
    $('.tab-cont').eq(liIndex).fadeIn().siblings('.tab-cont').hide()
  })
  // Button下拉菜单
  $('.btn-drop-group .btn').click(function (e) {
    $(this).siblings('.drop-list').show()
    $(this).parent().siblings().find('.drop-list').hide()
    $(document).one('click', function () {
      $('.btn-drop-group .drop-list').hide()
    })
    e.stopPropagation()
  })
  // 点击list将当前值复制于button
  $('.btn-drop-group .drop-list li').click(function () {
    $(this).parent().parent().hide()
  })
  // 左侧菜单收缩
  $('.top-hd .hd-lt').click(function () {
    $('.side-nav').toggleClass('hide')
    $('.top-hd,.main-cont,.btm-ft').toggleClass('switchMenu')
    $('.top-hd .hd-lt a').toggleClass('icon-exchange')
    localStorage.setItem('setLayOut1', 'hide')
    localStorage.setItem('setLayOut2', 'switchMenu')
    localStorage.setItem('setLayOut3', 'icon-exchange')
    if (!$('.side-nav').hasClass('hide')) {
      localStorage.removeItem('setLayOut1')
      localStorage.removeItem('setLayOut2')
      localStorage.removeItem('setLayOut3')
    }
  })

  $('.side-nav').addClass(localStorage.getItem('setLayOut1'))
  $('.top-hd,.main-cont,.btm-ft').addClass(localStorage.getItem('setLayOut2'))
  $('.top-hd .hd-lt a').addClass(localStorage.getItem('setLayOut3'))

  // 弹出层基础效果（确认/取消/关闭）
  $('.JyesBtn').click(function () {
    $(this).parents('.dialog').hide()
    if ($('.mask').attr('display', 'block')) {
      $('.mask').hide()
    }
  })
  $('.JnoBtn,.JclosePanel').click(function () {
    $(this).parents('.dialog').hide()
    if ($('.mask').attr('display', 'block')) {
      $('.mask').hide()
    }
  })
  // 基础弹出窗
  $('.JopenPanel').click(function () {
    $('.dialog').show()
    $('.dialog').css('box-shadow', '0 0 30px #d2d2d2')
  })
  // 带遮罩
  $('.JopenMaskPanel').click(function () {
    $('.dialog,.mask').show()
    $('.dialog').css('box-shadow', 'none')
  })
  $('.mask').click(function () {
    $(this).hide()
    $('.dialog').hide()
    $('.dialog2').hide()
  })
  // 自动关闭消息窗口
  $('.Jmsg').click(function () {
    $('dialog').show().delay(5000).hide(0)
  })
  // 安全退出
  $('#JsSignOut').click(function () {
    // eslint-disable-next-line no-undef
    layer.confirm('确定登出管理中心？', {
      title: '系统提示',
      btn: ['确定', '取消']
    }, function () {
      location.href = 'login.html'
    })
  })

  // 分页
  $('.pagination').createPage({
    pageCount: 5,
    current: 1,
    backFn: function (p) {
      console.log(p)
    }
  })

  // 带遮罩
  $('.xzdh').click(function () {
    $('.dialog2,.mask').show()
    $('.dialog2').css('box-shadow', 'none')
  })

  $('#a1').click(function () {
    // eslint-disable-next-line no-undef
    layer.alert('内容')
  })
  $('#a2').click(function () {
    // eslint-disable-next-line no-undef
    layer.confirm('您是如何看待前端开发？', {
      btn: ['重要', '奇葩'] // 按钮
    }, function () {
      // eslint-disable-next-line no-undef
      layer.msg('的确很重要', {icon: 1})
    }, function () {
      // eslint-disable-next-line no-undef
      layer.msg('也可以这样', {
        time: 20000, // 20s后自动关闭
        btn: ['明白了', '知道了']
      })
    })
  })
  $('#a3').click(function () {
    // eslint-disable-next-line no-undef
    layer.msg('玩命提示中')
  })
  $('#a4').click(function () {
    // eslint-disable-next-line no-undef
    layer.load(0, {shade: false}) // 0代表加载的风格，支持0-2
    setTimeout(function () {
      // eslint-disable-next-line no-undef
      layer.closeAll('loading')
    }, 2000)
  })
  $('#a5').click(function () {
    // 小tips
    // eslint-disable-next-line no-undef
    layer.tips('我是另外一个tips，只不过我长得跟之前那位稍有些不一样。', '#a5', {
      tips: [1, '#76d4f5'],
      time: 4000
    })
  })
  $('#a6').click(function () {
    // tab层
    // eslint-disable-next-line no-undef
    layer.tab({
      area: ['600px', '300px'],
      tab: [{
        title: 'TAB1',
        content: '内容1'
      }, {
        title: 'TAB2',
        content: '内容2'
      }, {
        title: 'TAB3',
        content: '内容3'
      }]
    })
  })
  $('#a7').click(function () {
    // eslint-disable-next-line no-undef
    layer.open({
      type: 2,
      title: false,
      closeBtn: 0, // 不显示关闭按钮
      shade: [0],
      area: ['340px', '215px'],
      offset: 'rb', // 右下角弹出
      time: 2000, // 2秒后自动关闭
      anim: 2,
      content: ['#', 'no'], // iframe的url，no代表不显示滚动条
      end: function () { // 此处用于演示
        // eslint-disable-next-line no-undef
        layer.open({
          type: 2,
          title: '很多时候，我们想最大化看，比如像这个页面。',
          shadeClose: true,
          shade: false,
          maxmin: true, // 开启最大化最小化按钮
          area: ['893px', '600px'],
          content: '#/'
        })
      }
    })
  })
})
