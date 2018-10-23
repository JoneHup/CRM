$(function(){
	//加载下拉框组件
	var configs = [{
		id : "organizationInput_1",
		width : 204,
		url : "json/admin_organizationmanage.json",
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
	
	//加载表格
    var taskCenterColModel = [{												//配置表格各列
			display:'所在地',
			name:'col1',
			hidden:false
		},{												//配置表格各列
			display:'组织机构',
			name:'col2',
			hidden:false
		},{												//配置表格各列
			display:'成员',
			name:'col4',
			hidden:false
		},{												//配置表格各列
			display:'操作',
			name:'col5',
			hidden:false,
			formatter : finishFnc
		}];
    var taskCenterConfig = {
		//usepage : null,
		isMultiple : true,
		autoIncrement : true,
		usepage : {												//配置表格组件分页   
				type : 2,
				position:"bottom",
				align:"right",
				pageGoAble : true,
				pageSizeAble : false,
				pageDescription : true
			},
			listeners:{
				render:function(){
					
				},
				reloadGrid:function(){
					//alert(this.getTotal());
					//alert(this.getData());
				}
			 }
		
		//dataSuccess : loopTr
	};
    grid("gridBox_2","json/admin_organizationmanageGrid.json",taskCenterColModel,taskCenterConfig);
    
    //状态回调函数
	function finishFnc(val,row){
//		var arr = row.col5.split(",");
//		var row = JSON.stringify(row);
		
		return "<a href='admin_organizationedit.html' class='organizationedit' title='编辑'></a><a href='#' class='organizationdelete' title='删除' onclick='materialDelete()'></a>";
	}

})
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


