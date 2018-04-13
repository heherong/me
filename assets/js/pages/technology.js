$(function(){
	//local
	if(!window.localStorage){
        alert("浏览器不支持localstorage");
        return false;
    }else{
        var storage=window.localStorage;
        var tech_mount = storage.getItem("tech_mount");
        if(tech_mount){
        	storage.tech_mount = parseInt(tech_mount) + 1;
        }else{
        	storage.setItem("tech_mount",1);
        }
        //记录浏览次数
		$('.js-scan-mount').find("span").text(storage.getItem("tech_mount"));
    }
	
})
