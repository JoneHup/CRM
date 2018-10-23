/**
 * 点击附件下载
 * author:tongrongbing
 * @param param 附件路径
 */
function downLoadFile(param){
	windowFnc({
		id:"deleteTips",
		width:338,
		height:150,
		iconCls:'materialPopIcon',
		message:"<p class='deleteTxt'>确定要下载吗？</p>",
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
				window.location.href = param;
				api.close();
			}
		}],
		listeners:{
			render:function(){
				
			}
		}
	});	
}

