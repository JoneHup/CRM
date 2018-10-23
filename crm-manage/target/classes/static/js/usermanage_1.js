$(function(){
	//加载下拉框组件
	var configs = [{
		id : "input_1",
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
		id : "input_2",
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
		id : "input_3",
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
			display:'账号',
			name:'col1',
			hidden:false
		},{												//配置表格各列
			display:'姓名',
			name:'col2',
			hidden:false
		},{												//配置表格各列
			display:'组织结构',
			name:'col3',
			hidden:false
		},{												//配置表格各列
			display:'角色',
			name:'col4',
			hidden:false
		},{												//配置表格各列
			display:'状态',
			name:'col5',
			hidden:false,
			formatter : finishFnc
		},{												//配置表格各列
			display:'操作',
			name:'col6',
			hidden:false,
			formatter : appraiseFnc
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
					$('.normal').click(function(){
						$(this).css('display','none');
						$(this).siblings('.stopuse').css('display','block');
						$(this).html('正常');
						return false;
					});
					$('.stopuse').click(function(){
						$(this).css('display','none');
						$(this).siblings('.normal').css('display','block');
						$(this).html('停用');
						return false;
					});
					
				},
				reloadGrid:function(){
					//alert(this.getTotal());
					//alert(this.getData());
				}
			 }
		
		//dataSuccess : loopTr
	};
    grid("gridBox","json/usermanageGrid.json",taskCenterColModel,taskCenterConfig);
    
    //状态回调函数
	function finishFnc(val,row){
		var arr = row.col5.split(",");
		var row = JSON.stringify(row);
		
		return "<a href='#' class='normal'>正常</a> <a href='#' class='stopuse'>停用</a>";
	}

	//操作回调函数	
	function appraiseFnc(val,row){
		
//		return "<span>已阅评<em class='orange'>"+val+"</em>篇</span>";
		return "<span class='cando' title='查看'><a href='#' class='eye'></a><a href='#' class='edit' title='编辑'></a><a href='#' class='delete' title='删除'></a></span>";
	}
	
})



