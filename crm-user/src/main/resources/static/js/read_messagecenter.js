$(function(){
		//加载卡片
	globalObj.cardObj["msgCard"] = Run.create('CardMsg',{
		id : 'readMsgCard',
		//query : param,
		url : "json/cardMsg.json",
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