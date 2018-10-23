$(function(){
	//加载表格
    var netStageColModel = [{												//配置表格各列
			display:'网站',
			name:'col1',
			hidden:false
		},{												//配置表格各列
			display:'账号',
			name:'col2',
			hidden:false
		},{												//配置表格各列											//配置表格各列
			display:'状态',
			name:'col4',
			hidden:false,
			formatter : statusFnc
//		},{												//配置表格各列
//			display:'操作',
//			hidden:false,
//			name:'col5',
//			formatter : opeFnc
		}];
    var netStageConfig = {
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
	
    grid("netAccountGrid","json/netStageGrid.json",netStageColModel,netStageConfig);
	
    grid("netVestGrid","json/netStageGrid.json",netStageColModel,netStageConfig);
	
	//操作回调函数
	function opeFnc(val,row){
		var row = JSON.stringify(row);
		return "<a href='#' class='editLink_1' title='查看'></a><a href='#' class='deleteLink_1' title='删除'></a>";
	}
	//状态回调函数	
	function statusFnc(val,row){
		var row = JSON.stringify(row);
		var className = "";
		if(val === "密码验证通过"){
			className = "green";
		}else if(val === "密码验证失败，请进行修改"){
			className = "red";
		}
		return "<span class='"+className+"'>"+val+"</span>";
	}

	
})