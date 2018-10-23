$(function(){
	//加载下拉框组件
	var configs = [{
		id : "materialStoreComb_4",
		width : 204,
		url : "json/net_combobox.json",
		listeners:{
			render:function(){
				//console.log(this.id)
				$("#"+this.id).find(".r-combobox-slider").width($("#"+this.id).find(".r-combobox-slider").width()+2)
			}
		 },
		onSelect : function(combo,record){
			//console.log(this)
			$("#"+this.id).find(".r-combobox-now").removeClass("r-combobox-now");
		}
	}];
	combobox(configs);
	
	//加载卡片
	globalObj.cardObj["materialCard"] = Run.create('CardMaterial',{
		id : 'materialCard',
		//query : param,
		url : "json/net_cardComment.json",
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
			materialEditFnc : materialEditFnc
		},
		listeners:{
			render:function(){
				
			}
		 }
	});

})

function materialEditFnc(){
	windowFnc({
		id:"pop",
		width:560,
		height:508,
		iconCls:'materialPopIcon',
		url:"include/articleedit_pop.html",
		title: "文章素材编辑",
		buttons:[{
			'className':'accountpublish',
			'text':'确定',
			'handle': function (api) {//确定
				api.close();
			}
		},{
			'className':'accountcancel',
			'text':'取消',
			'handle': function (api) {//确定
				api.close();
			}
		}],
		listeners:{
			render:function(){
				
			}
		}
	});
}