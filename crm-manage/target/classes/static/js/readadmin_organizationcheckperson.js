$(function(){
	//加载下拉框组件
	var configs = [{
		id : "taskCenterComb_1",
		width : 204,
		url : "json/readadmin_organizationcheckperson.json",
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
			display:'账号',
			name:'col1',
			hidden:false
		},{												//配置表格各列
			display:'姓名',
			name:'col2',
			hidden:false
		},{												//配置表格各列
			display:'角色',
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
		isMultiple : false,
		autoIncrement : true,
		usepage : {												//配置表格组件分页   
				type : 2,
				position:"bottom",
				align:"right",
				pageGoAble : true,
				pageSizeAble : false,
				pageDescription : true
			}
		//dataSuccess : loopTr
	};
    grid("taskCenterGrid","json/readadmin_organizationcheckpersonGrid.json",taskCenterColModel,taskCenterConfig);
	
	//网评员完成情况回调函数
	function finishFnc(val,row){
//		var arr = row.col4.split(",");
//		var row = JSON.stringify(row);
		
		return "<a href='#' class='organizationdelete' title='删除'></a>";
		
	}


})