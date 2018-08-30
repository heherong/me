 /** 获取url参数
  * @param name  参数名 
  * by wuyi
  **/
 function GetQueryString(name) {
 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
 	var r = window.location.search.substr(1).match(reg);
 	if(r != null)
 		return decodeURIComponent(r[2]);
 	return null;
 }
 
	
var UrlFull = location.href,
 	UrlHead;
 if(~UrlFull.indexOf("https")) {
 	UrlHead = "https";
 } else {
 	UrlHead = "http";
 }
var site_url = UrlHead + '://' + location.host;
var aside =  '<div id="wrapper">'+
					'<!-- Header -->'
					+'<header id="header">'
						+'<a href="../index.html" class="logo"><strong>何蓉</strong> <span>herong</span></a>'
						+'<nav>'
							+'<a href="#menu">菜单</a>'
						+'</nav>'
					+'</header>'
				+'<!-- Menu -->'
					+'<nav id="menu">'
						+'<ul class="links">'
							+'<li><a href="../index.html">首页</a></li>'
							+'<li><a href="photos.html">旅游与摄影</a></li>'
							+'<li><a href="technology.html">前端技术</a></li>'
							+'<li><a href="mylife.html">点滴生活</a></li>'
							+'<li><a href="books.html">书籍</a></li>'
							+'<li><a href="doitmyself.html">手工</a></li>'
							+'<li><a href="foods.html">美食篇</a></li>'
						+'</ul>'
						+'<ul class="actions vertical">'
							+'<li><a href="javascript:void(0)" class="button special fit">返回</a></li>'
						+'</ul>'
					+'</nav>';
var footer =  '<!-- Footer -->'
				+'<footer id="footer">'
					+'<div class="inner">'
						+'<ul class="copyright">'
							+'<li>来自： <a href="https://weibo.com/5496821501/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1">@何蓉丫</a></li>'
						+'</ul>'
					+'</div>'
				+'</footer>'
			+'</div>';
$('#wrapper').prepend(aside);
$('#wrapper').append(footer);
$(function(){
	
	
})
