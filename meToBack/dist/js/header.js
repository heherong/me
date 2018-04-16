 /** 获取url参数
  * @param name  参数名 
  * by wuyi
  **/
// function GetQueryString(name) {
// 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
// 	var r = window.location.search.substr(1).match(reg);
// 	if(r != null)
// 		return decodeURIComponent(r[2]);
// 	return null;
// }
 //点击头像跳转页面
	function ToPersonSetting(){
		window.location.href = site_url+'/meToBack/pages/index.html';
	}
	
var UrlFull = location.href,
 	UrlHead;
 if(~UrlFull.indexOf("https")) {
 	UrlHead = "https";
 } else {
 	UrlHead = "http";
 }
var site_url = UrlHead + '://' + location.host;
var aside =  '<aside class="main-sidebar">' +
				'<section class="sidebar">' +
					'<div class="user-panel">' +
					'<div class="pull-left image" onclick="ToPersonSetting()"><img src="'+site_url+'/meToBack/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image"></div>' +
					'<div class="pull-left info">' +
						'<p>herong</p><a href="#"><i class="fa fa-circle text-success"></i> Online</a></div>' +
					'</div>' +
					//侧边栏
					'<ul class="sidebar-menu" data-widget="tree">' +
						'<li class="treeview">' +
							'<a href="#">' +
								'<i class="fa fa-paw"></i><span>首页管理</span>' +
							'</a>'  +
						'</li>' +
						'<li class="treeview">' +
							'<a href="#">' +
								'<i class="fa fa-paw"></i> <span>模块管理</span>' +
								'<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>' +
							'</a>' +
							'<ul class="treeview-menu">' +
								'<li><a href="">旅游与摄影</a></li>' +
								'<li><a href="">前端技术</a></li>' +
								'<li><a href="">点滴生活</a></li>' +
								'<li><a href="">书籍篇</a></li>' +
								'<li><a href="">手工篇</a></li>' +
								'<li><a href="">美食篇</a></li>' +
							'</ul>' +
						'</li>' +
					'</ul>' +
				'</section>' +
			'</aside>';
var header =  '<header class="main-header">' +
				'<a href="./index" class="logo"><span class="logo-lg">后台管理</span></a>' +
				'<nav class="navbar navbar-static-top">' +
					'<div class="navbar-custom-menu">' +
						'<ul class="nav navbar-nav">' +
							'<li class="dropdown user user-menu">'+
								'<a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="../../dist/img/user2-160x160.jpg" class="user-image" alt="User Image">'+
								'</a><span></span>'+
							'</li>' +
						'</ul>' +
					'</div>' +
				'</nav>' +
			'</header>';
$('.wrapper').prepend(header);
$('.wrapper').prepend(aside);
$(function(){
	var pagesId = GetQueryString("pages_id");
	var modularId = GetQueryString("modular_id");
	var url = window.location.href;
	var str_after = url.split('pages/')[1];
	var str_before = str_after.split('/')[0];
	if(str_before=='information'){
		$('.navbar-list>li').eq(0).addClass('active');
		var nav = $('.main-sidebar>.sidebar').eq(0).show();
		var modular = nav.find('.treeview').eq(parseInt(modularId)-1).addClass('menu-open');
		var modularList = modular.find('.treeview-menu').show();
		modularList.find('li').eq(parseInt(pagesId)-1).addClass('active');
	}else if(str_before=='content'){
		$('.navbar-list li').eq(1).addClass('active');
		var nav = $('.main-sidebar>.sidebar').eq(1).show();
		var modular = nav.find('.treeview').eq(parseInt(modularId)-1).addClass('menu-open');
		var modularList = modular.find('.treeview-menu').show();
		modularList.find('li').eq(parseInt(pagesId)-1).addClass('active');
	}else if(str_before=='marketing'){
		$('.navbar-list li').eq(2).addClass('active');
		var nav = $('.main-sidebar>.sidebar').eq(2).show();
		var modular = nav.find('.treeview').eq(parseInt(modularId)-1).addClass('menu-open');
		var modularList = modular.find('.treeview-menu').show();
		modularList.find('li').eq(parseInt(pagesId)-1).addClass('active');
	}
	
})
