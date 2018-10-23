$(function(){
		//加载卡片
	globalObj.cardObj["msgCard"] = Run.create('CardMsg',{
		id : 'netMsgCard',
		//query : param,
		url : "/message",
		cache:true,
		dataSuccess:function(){},
		usepage : {
			type:'1',
			position : 'bottom',
			align : 'right',
			pageGoAble : false,
			pageSizeAble : false,
			pageDescription : true
		},
		callBacks:{
			msgCardTitleFnc : msgCardTitleFnc,
			setFirsLinkFnc : setFirsLinkFnc,
			deleteLinkFnc : deleteLinkFnc
		},
		listeners:{
			render:function(){
				
			}
		 }
	});
	
	//卡片行回调函数
	function msgCardTitleFnc(ev, row){
		var id = row.id;
		window.open('/message/'+id);
		
	}
	//置顶回调函数
	function setFirsLinkFnc(ev, row){
		
	}
	
	//删除回调函数
	function deleteLinkFnc(ev, row){

	}
})