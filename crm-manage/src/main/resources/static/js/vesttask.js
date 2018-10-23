$(function(){
	$('.createtask').click(function(){
		windowFnc({
		id:"showtaskAlert",
		width:800,
		height:640,
		iconCls:'icon',
		url:"include/vesttaskAlert.html",
		title: "任务创建",
		buttons:[{
			'className':'backBtn',
			'text':'返回',
			'handle': function (api) {//确定
				api.close();
			}
		},{
			'className':'okagain',
			'text':'开始任务',
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
    var vestColModel = [{												//配置表格各列
			display:'任务类型',
			name:'col1',
			hidden:false
		},{												//配置表格各列
			display:'任务编号',
			name:'col2',
			hidden:false
		},{												//配置表格各列
			display:'任务名称',
			name:'col3',
			hidden:false
		},{												//配置表格各列
			display:'任务平台',
			name:'col4',
			hidden:false
		},{												//配置表格各列
			display:'下发时间',
			name:'col5',
			sortAble:true,
			hidden:false
		},{												//配置表格各列
			display:'任务状态',
			name:'col6',
			hidden:false,
			formatter : appraiseFnc
		},{												//配置表格各列
			display:'操作',
			hidden:false,
			name:'col7',
			formatter : opehFnc
		}];
    var vestConfig = {
		//usepage : null,
		isMultiple : false,
		autoIncrement : false,
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
    grid("vestGrid","json/vestGrid.json",vestColModel,vestConfig);

	//网评员阅评情况回调函数	
	function appraiseFnc(val,row){
		var row = JSON.stringify(row);
		var className = "";
		if(val === "已完成"){
			className = "green";
		}else if(val === "进行中"){
			className = "red";
		}else if(val === "失败（系统正在解决中）"){
			className = "gray";
		}
		return "<span class='"+className+"'>"+val+"</span>";
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
		return "<a href='vestdetail.html' class='seeLink_1' title='查看'></a>";
		

	}


})