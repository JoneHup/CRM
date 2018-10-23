$(function(){

		//加载卡片
	globalObj.cardObj["msgCard"] = Run.create('CardMsg',{
		id : 'msgCard',
		//query : param,
		url : Constants.basePath + "/notice",
		cache:true,
		dataSuccess:function(){},
		usepage : {
			type:'2',
			position : 'bottom',
			align : 'right',
			pageGoAble : true,
			pageSizeAble : false,
			pageDescription : true
		},
		callBacks:{
			msgCardTitleFnc : msgCardTitleFnc				
		},
		listeners:{
			render:function(){
				
			}
		 }
	});
	
	//卡片行回调函数
	function msgCardTitleFnc(ev, row){
		var id = row.id;
		window.open(Constants.basePath +'/notice/'+id);
	}
})