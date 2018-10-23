$(function(){
	//为批量添加按钮添加事件
	$('.addMore').click(function(){
		windowFnc({
			id:"showaddmoreAlert",
			width:558,
			height:200,
			iconCls:'icon',
			url:"include/addmoreAlert.ftl",
			title: "批量添加",
			buttons:[{
				'className':'accountpublish',
				'text':'提交',
				'handle': function (api) {//确定
					api.close();
				}
			},{
				'className':'accountcancel',
				'text':'取消',
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
		id : "input_3",
		width : 204,
		url : Constants.basePath+"/salesmanUsermanagement/getAllDeptList",
		listeners:{
			render:function(){
				//console.log(this.id)
				$("#"+this.id).find(".r-combobox-slider").width($("#"+this.id).find(".r-combobox-slider").width()+2)
			}
		 },
		onSelect : function(combo,record){
			var record = record["value"];
			$("#input_3").val(record);
			//console.log(this)
			$("#"+this.id).find(".r-combobox-now").removeClass("r-combobox-now");
		}
	},{
		id : "input_4",
		width : 204,
		url : Constants.basePath+"/salesmanUsermanagement/getAllRoleList",
		listeners:{
			render:function(){
				//console.log(this.id)
				$("#"+this.id).find(".r-combobox-slider").width($("#"+this.id).find(".r-combobox-slider").width()+2)
			}
		 },
		onSelect : function(combo,record){
			//console.log(this)
			var record = record["value"];
			$("#input_4").val(record);
			$("#"+this.id).find(".r-combobox-now").removeClass("r-combobox-now");
		}
	},{
		id : "input_5",
		width : 204,
		url : Constants.basePath+"/salesmanUsermanagement/getAllStatusList",
		listeners:{
			render:function(){
				//console.log(this.id)
				$("#"+this.id).find(".r-combobox-slider").width($("#"+this.id).find(".r-combobox-slider").width()+2)
			}
		 },
		onSelect : function(combo,record){
			//console.log(this)
			var record = record["value"];
			$("#input_5").val(record);
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
						var href = $(this).attr('href');
						$.ajax({
							　　url:href,
							　　type:"GET",
							　　success:function(){
							　　}
					　　 })
						return false;
					});
					$('.stopuse').click(function(){
						$(this).css('display','none');
						$(this).css('color','#e57c20');
						$(this).siblings('.normal').css('display','block');
						$(this).html('停用');
						var href = $(this).attr('href');
						$.ajax({
							　　url:href,
							　　type:"GET",
							　　success:function(){
							　　}
					　　  })
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
    
    /*$(".delete").click(function(){
    	alert(JSON.stringify($("#gridBox").getChecked()));
    	//TODO
    	
    });*/
    
    function onCheckFnc(_this,thisRowData){
		//alert(JSON.stringify(_this));
		alert(JSON.stringify(thisRowData));
		
		//通过beforePage、afterPage、oncheck、onuncheck、oncheckall、onuncheckall做到翻页记忆选中项效果
		chkArr.push(thisRowData);
		//alert(JSON.stringify(chkArr));
	}
  
    //为查询按钮添加事件
    $("#query").click(function(){
    	
    	$("#form_account").attr("value","");
    	$("#form_userName").attr("value","");
    	$("#form_dept").attr("value",0);
    	$("#form_role").attr("value",0);
    	$("#form_status").attr("value",0);
    	
    	//获得查询条件
    	var account = $("#account").val();
    	var userName = $("#userName").val();
    	var dept = $("#input_3").val();
    	var role = $("#input_4").val();
    	var status = $("#input_5").val();
    	
    	if( handlerEmptFnc(account)){
    		
    		$("#form_account").val($.trim(account));
    	}
    	
    	if( handlerEmptFnc(userName)){
    		$("#form_userName").val($.trim(userName));
    	}
    	
    	if( handlerEmptFnc(dept)){
    		$("#form_dept").val(dept);
    	}else{
    		$("#form_dept").val(0);
    	}
    	
    	if( handlerEmptFnc(role)){
    		$("#form_role").val(role);
    	}else{
    		$("#form_role").val(0);
    	}
    	
    	if( handlerEmptFnc(status)){
    		$("#form_status").val(status);
    	}else{
    		$("#form_status").val(0);
    	}
    	
    	var form = $("#form").serialize();
    	
    	grid("gridBox",Constants.basePath+"/salesmanUsermanagement/getAllUserList?"+form,taskCenterColModel,taskCenterConfig);
    	
    });
    
    //为删除按钮添加事件
    
    
    grid("gridBox",Constants.basePath+"/salesmanUsermanagement/getAllUserList",taskCenterColModel,taskCenterConfig);
 
   
    
    //对字符串进行空判断
    function handlerEmptFnc(value){
    	
    	if(value !=='null'  && value !==undefined && $.trim(value) !=='' ){
    		return true;
    		
    	}else{
    		return false;
    	}
    }
    
  
    
    //状态回调函数
	function finishFnc(val,row){
		/**
		 * val:代表当前表格值
		 * row:代表当前行值
		 */
		//var arr = row.col5.split(",");
		//var row = JSON.stringify(row);
		var id=row['id'];
		var show = "";
		var url = "";
		if(val==1){
			url =Constants.basePath+ "/salesmanUsermanagement/updateUserStatus?id="+id+"&status=2";
			show = "<a href='"+url+"' class='normal' style='display: block;'>正常</a> <a href='"+url+"' class='stopuse' style='display: none;'>停用</a>";
		}else{
			url =Constants.basePath+ "/salesmanUsermanagement/updateUserStatus?id="+id+"&status=1";
			show = "<a href='"+url+"' class='normal' style='display: none;'>正常</a> <a href='"+url+"' class='stopuse' style='display: block;'>停用</a> ";
		}
		return show;
	}

	//操作回调函数	
	function appraiseFnc(val,row){
//		return "<span>已阅评<em class='orange'>"+val+"</em>篇</span>";
		return "<span class='cando'><a href='/usermanage/salesmanmanagement/usermanagement/admin_accountdetail.ftl' class='eye' title='查看'></a><a href='admin_accountedit.html' class='edit' title='编辑'></a><a href='#' class='delete' title='删除' onclick='materialDelete()'></a></span>";
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

