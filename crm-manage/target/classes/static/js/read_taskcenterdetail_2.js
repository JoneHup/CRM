$(function(){
	
	//加载卡片
	globalObj.cardObj["materialCard"] = Run.create('CardArticle',{
		id : 'cardArticle',
		//query : param,
		url : "json/cardArticle.json",
		cache:true,
		dataSuccess:function(){},
		pageSize : 1,
		usepage : {
			type:'2',
			position : 'top',
			
			align : 'right',
			pageGoAble : true,
			pageSizeAble : false,
			pageDescription : true
		},
		callBacks:{
			//materialEditFnc : materialEditFnc
		},
		listeners:{
			render:function(){
				
			}
		 }
	});
})