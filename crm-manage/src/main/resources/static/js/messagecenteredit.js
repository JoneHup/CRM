$(function(){
	//点击分类设置alert弹窗
	$(".classifyBtn").click(function(){
		windowFnc({
		id:"showAlert",
		width:338,
		height:400,
		iconCls:'icon',
		url:"include/messageAlertCon.html",
		title: "列表选项编辑",
		buttons:[{
			'className':'accountpublish',
			'text':'应用',
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
	
	//点击发布alert弹窗
	$(".editpublish").click(function(){
		windowFnc({
			id:"deleteTips",
			width:338,
			height:150,
			iconCls:'materialPopIcon',
			message:"<p class='deleteTxt'>发布成功</p>",
			title: "提示",
			buttons:[{
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
})
	
	
	
//	
//	$('.taskBox li').on("click",function(){
//		alert(1)
//	})
	
	//加载下拉框组件
	var configs = [{
		id : "editInput_1",
		width : 204,
		url : "json/messagecenteredit.json",
		placeholder:"xxxxxxxxxx",
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
	
		
})

