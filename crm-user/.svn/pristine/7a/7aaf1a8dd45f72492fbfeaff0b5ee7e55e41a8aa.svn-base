$(function(){
	//加载下拉框组件
	var configs = [{
		id : "taskCenterComb_1",
		width : 204,
		url : "json/combobox.json",
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
	},{
		id : "taskCenterComb_2",
		width : 204,
		url : "json/combobox.json",
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
	},{
		id : "taskCenterComb_3",
		width : 204,
		url : "json/combobox.json",
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
			display:'任务编号',
			name:'col1',
			width:85,
			hidden:false
		},{												//配置表格各列
			display:'任务名称',
			name:'col2',
			hidden:false
		},{												//配置表格各列
			display:'发布时间',
			name:'col3',
			width:150,
			hidden:false
		},{												//配置表格各列
			display:'网评员截止时间',
			name:'col4',
			width:150,
			hidden:false
		},{												//配置表格各列
			display:'网评员完成情况',
			name:'col5',
			hidden:false,
			formatter : finishFnc
		},{												//配置表格各列
			display:'网评员阅评情况',
			name:'col6',
			width:150,
			hidden:false,
			formatter : appraiseFnc
		},{												//配置表格各列
			display:'任务状态',
			name:'col7',
			width:85,
			hidden:false,
			formatter : statusFnc
		},{												//配置表格各列
			display:'操作',
			hidden:false,
			name:'col8',
			formatter : opehFnc
		}];
    var taskCenterConfig = {
		//usepage : null,
		isMultiple : false,
		autoIncrement : true,
		usepage : {												//配置表格组件分页   
				type : 1,
				position:"bottom",
				align:"right",
				pageGoAble : false,
				pageSizeAble : false,
				pageDescription : true
			}
		//dataSuccess : loopTr
	};
    grid("taskCenterGrid","json/taskCenterGrid.json",taskCenterColModel,taskCenterConfig);
	
	//网评员完成情况回调函数
	function finishFnc(val,row){
		var arr = row.col5.split(",");
		var row = JSON.stringify(row);
		
		return "<span><em class='orange'>"+arr[0]+"</em>人次已发布，共<em class='orange'>"+arr[1]+"</em>篇，共<em class='orange'>"+arr[2]+"</em>份</span>";
	}

	//网评员阅评情况回调函数	
	function appraiseFnc(val,row){
		//var row = JSON.stringify(row);
		return "<span>已阅评<em class='orange'>"+val+"</em>篇</span>";
	}
	
	//任务状态回调函数
	function statusFnc(val,row){
		//var row = JSON.stringify(row);
		//return "<a href='#' class='showGridDetail' onclick='formatterOpe(this,"+row+")' title='详情'>详情</a>";
		//console.log(val);
		var clsName = "";
		if(val === "进行中"){
			clsName = "green";
		}else if(val === "已结束"){
			clsName = "gray";
		}
		return "<span class='"+clsName+"'>"+val+"</span>";
	}
	
	//操作回调函数
	function opehFnc(val,row){
		var row = JSON.stringify(row);
		return "<a href='#' class='seeLink_1' title='查看'></a><a href='#' class='editLink_1' title='编辑'></a>";
	}


})