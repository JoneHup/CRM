$(function(){
	
	//点击任务创建时alert弹窗
	$(".createtask").click(function(){
		windowFnc({
		id:"showtaskAlert",
		width:800,
		height:500,
		iconCls:'icon',
		url:Constants.basePath+"/wpytask/createtaskAlert",
		title: "任务创建",
		buttons:[{
			'className':'accountpublish',
			'text':'创建',
			'handle': function (api) {//确定
                $.ajax({
                    cache:true,
                    type:"POST",//为post请求
                    url:"/wpytask/insert",
                    data:{taskType:taskType,taskTitle:taskTitle,fatieEndTime:fatieEndTime},
                    success:function(data){
                        api.close();
                        console.log("success");
                    }
                });

			}
		},{
			'className':'backBtn',
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
//	$('.editLink_1').click(function(){
//		alert(1);
//	})

	//加载下拉框组件
	var configs = [{
		id : "taskCenterComb_1",
		width : 204,
		url : Constants.basePath+"/wpytask/tasktype",
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
		url : Constants.basePath+"/wpytask/tasktype",
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
		url : Constants.basePath+"/wpytask/tasktype",
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
		id : "taskCenterComb_4",
		width : 204,
		url : Constants.basePath+"/wpytask/tasktype",
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
    var taskCenterColModel = [{//配置表格各列
    	display:'任务类型',
			name:'taskType',
			hidden:false
		},{
			display:'任务编号',
			name:'taskCode',
			hidden:false
		},{												//配置表格各列
			display:'任务名称',
			name:'taskTitle',
			hidden:false
		},{												//配置表格各列
			display:'发布时间',
			name:'createTime',
			hidden:false,
			sortAble:true,
		},{												//配置表格各列
			display:'网评员截止时间',
			name:'fatieEndTime',
			sortAble:true,
			hidden:false
		},{
			display:'阅评员截止时间',
			name:'pinglunEndTime',
			sortAble:true,
			hidden:false
		},{		                                        //配置表格各列
			display:'网评员完成情况',
			//name:'col5',
			hidden:false,
			formatter : finishFnc
		},{												//配置表格各列
			display:'阅评员阅评情况',
			name:'ypyCount',
			hidden:false,
			formatter : appraiseFnc
		},{												//配置表格各列
			display:'任务状态',
			name:'status',
			hidden:false,
			formatter : statusFnc
		},{												//配置表格各列
			display:'操作',
			hidden:false,
		//	name:'col8',
			formatter : opehFnc
		}];
    var taskCenterConfig = {
		//usepage : null,
		isMultiple : false,
//		autoIncrement : true,
		usepage : {												//配置表格组件分页   
				type : 2,
				position:"bottom",
				align:"right",
				pageGoAble : true,
				pageSizeAble : false,
				pageDescription : true,

			}
		//dataSuccess : loopTr
	};
    grid("taskCenterGrid",Constants.basePath+"/wpytask/tasklist",taskCenterColModel,taskCenterConfig);
	
	//网评员完成情况回调函数
	function finishFnc(val,row){
        var arr = new Array(6);
        arr[0] = row.wpyCount;
        arr[1] = row.pian;
        arr[2] = row.fen;
		var row = JSON.stringify(row);
		
		return "<span><em class='orange'>"+arr[0]+"</em>人次已发布，共<em class='orange'>"+arr[1]+"</em>篇，共<em class='orange'>"+arr[2]+"</em>份</span>";
	}

	//网评员阅评情况回调函数	
	function appraiseFnc(val,row){
		//var row = JSON.stringify(row);
		if(val=="-------"){
			val=0;
		}
		return "<span>已阅评<em class='orange'>"+val+"</em>篇</span>";
	}
	
	//任务状态回调函数
	function statusFnc(val,row){
		//var row = JSON.stringify(row);
		//return "<a href='#' class='showGridDetail' onclick='formatterOpe(this,"+row+")' title='详情'>详情</a>";
		//console.log(val);
		var clsName = "";
		if(val == 1){
			clsName = "green";
			val = "进行中";
		}else if(val == 0){
			clsName = "gray";
            val = "已结束";
		}
		return "<span class='"+clsName+"'>"+val+"</span>";
	}
	
	
	//操作回调函数
	function opehFnc(val,row){
		var row = JSON.stringify(row);
		return "<a href='#' class='seeLink_1' title='查看' onclick='openDetail_1(this,"+row+")'></a><a href='#' class='editLink_1' title='编辑' onclick='formatterOpe(this,"+row+")'></a>";
	}

})

	//定义根据id跳转
	function openDetail_1(_this,row){
        window.location.href=Constants.basePath+"/wpytask/taskcenterdetail_1?id="+row.id;
	}
	//定义自定义列中按钮点击事件，此处注意row参数的传递
	function formatterOpe(_this,row){
	console.log(_this);
		windowFnc({
			id:"taskeditAlert",
			width:800,
			height:500,
			iconCls:'materialPopIcon',
			url:Constants.basePath+"/wpytask/taskeditAlert?id="+row.id,
			title: "任务编辑",
			buttons:[{
				'className':'backBtn',
				'text':'返回',
				'handle': function (api) {//确定
					api.close();
				}
			},{
				'className':'okagain',
				'text':'确认修改',
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