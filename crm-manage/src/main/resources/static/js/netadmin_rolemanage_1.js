$(function(){
	//加载下拉框组件
	var configs = [{
		id : "roleInput_1",
		width : 204,
		url : "json/netadmin_rolemanage.json",
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
			display:'角色名称',
			name:'col1',
			hidden:false
		},{												//配置表格各列
			display:'角色描述',
			name:'col2',
			hidden:false
		},{												//配置表格各列
			display:'成员',
			name:'col3',
			hidden:false
		},{												//配置表格各列
			display:'操作',
			name:'col4',
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
    grid("gridBox_3","json/netadmin_rolemanageGrid.json",taskCenterColModel,taskCenterConfig);
    
    //状态回调函数
	function finishFnc(val,row){
//		var arr = row.col5.split(",");
//		var row = JSON.stringify(row);
		
		return "<a href='#' class='organizationedit'></a><a href='#' class='organizationdelete'></a>";
	}

})



