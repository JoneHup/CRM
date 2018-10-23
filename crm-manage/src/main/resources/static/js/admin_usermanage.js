$(function(){
	$(".userManageTabHd li").each(function(i){
		$(this).click(function(){
			$(this).addClass("slt").siblings().removeClass("slt");
			$(".userManageTabBd .userManageTabBdItem").eq(i).show().siblings().hide();
			if($.trim($(".userManageTabBd .userManageTabBdItem").eq(i).html()) === ""){
				var pageName = "";
				if(i === 0){
					pageName = "admin_usermanage_1";
				}else if(i === 1){
					pageName = "admin_usermanage_2";
				}else if(i === 2){
					pageName = "admin_usermanage_3";
				}
				include("/include/"+pageName+".ftl",function(text){
					$(".userManageTabBd .userManageTabBdItem").eq(i).show().html("").append(text);
				});
			}
			return false;
		});
	});

	//页面初始加载第一屏标签页
	include(Constants.basePath+"/salesmanUsermanagement/getPage",function(text){
       $(".userManageTabBd .userManageTabBdItem").eq(0).show().html("").append(text);
    });

	


})



