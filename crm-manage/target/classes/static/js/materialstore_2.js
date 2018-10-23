$(function(){
	$('.createMaterialLink').click(function(){
		windowFnc({
		id:"showtaskAlert",
		width:800,
		height:400,
		iconCls:'icon',
		url:Constants.basePath+"/sucaiku/commentcreatetaskAlert",
		title: "评论素材创建",
		buttons:[{
			'className':'accountpublish',
			'text':'创建',
			'handle': function (api) {//确定
				api.close();
			}
		},{
			'className':'accountcancel',
			'text':'返回',
			'handle': function (api) {//确定
				api.close();
			}
		}],
		listeners:{
			render:function(){
				$('.taskBox li').click(function(){
					$(this).addClass('li_bg').siblings().removeClass('li_bg');
				})
			}
		}
	});
	})
	//加载下拉框组件
	var configs = [{
		id : "shareInput_1",
		width : 204,
		url :"/json/combobox.json",
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
	globalObj.cardObj["materialCard"] = Run.create('CardCommentMaterial',{
		id : 'materialCard_2',
		//query : param,
		url :Constants.basePath+"/sucaiku/getAllList",
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
			materialEditFnc : materialEditFnc,
			materialDelete : materialDelete
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
		url:Constants.basePath+"/sucaiku/articleeditpop1",
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
function materialDelete(){
	windowFnc({
		id:"deleteTips",
		width:338,
		height:150,
		iconCls:'materialPopIcon',
		message:"<p class='deleteTxt'>确定删除吗,删除之后将不可恢复</p>",
		title: "提示",
		buttons:[{
			'className':'accountcancel',
			'text':'取消',
			'handle': function (api) {//确定
				api.close();
			}
		},{
			'className':'accountpublish',
			'text':'确定',
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