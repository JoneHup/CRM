$(function(){
		//加载卡片
	globalObj.cardObj["commentCard"] = Run.create('CardComment',{
		id : 'commentCard',
		//query : param,
		url : "json/cardComment.json",
		cache:true,
		dataSuccess:function(){},
		usepage : {
			type:'2',
			position : 'bottom',
			align : 'right',
			pageGoAble : false,
			pageSizeAble : false,
			pageDescription : true
		},
		callBacks:{},
		listeners:{
			render:function(){
				
			}
		 }
	});
	
	//卡片行回调函数
	function msgCardTitleFnc(ev, row){
		alert(0);
	}
	
	//置顶回调函数
	function setFirsLinkFnc(ev, row){
		alert(1);
	}
	
	//删除回调函数
	function deleteLinkFnc(ev, row){
		alert(2);
	}
})