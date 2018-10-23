$(function(){
	//创建马甲
	$('.createMaterialLink').click(function(){
		windowFnc({
		id:"createvestAlert",
		width:558,
		height:400,
		iconCls:'materialPopIcon',
		url:'include/createvestAlert.html',
		title: "创建马甲",
		buttons:[{
			'className':'backBtn',
			'text':'返回',
			'handle': function (api) {//确定
				api.close();
			}
		},{
			'className':'okagain',
			'text':'确定修改',
			'handle': function (api) {//确定
				api.close();
			}
		}],
		listeners:{
			render:function(){
				
			}
		}
	});
})
	//加载下拉框组件
	var configs = [{
		id : "vestStoreComb_1",
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
		id : "vestStoreComb_2",
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
		id : "vestStoreComb_3",
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
		id : "vestStoreComb_4",
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
			display:'马甲类型',
			name:'col1',
			hidden:false
		},{												//配置表格各列
			display:'马甲账号名',
			name:'col2',
			hidden:false
		},{												//配置表格各列
			display:'添加方式',
			name:'col3',
			hidden:false
		},{												//配置表格各列
			display:'添加人',
			name:'col4',
			hidden:false
		},{												//配置表格各列
			display:'账号密码校验状态',
			name:'col5',
			hidden:false,
			formatter : chkFnc
		},{												//配置表格各列
			display:'IP绑定情况',
			name:'col6',
			hidden:false
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
    grid("vestStoreGrid","json/veststoreGrid.json",vestColModel,vestConfig);

	//网评员阅评情况回调函数	
	function chkFnc(val,row){
		var row = JSON.stringify(row);
		var className = "";
		if(val === "校验通过"){
			className = "green";
		}else if(val === "校验失败"){
			className = "red";
		}
		return "<span class='"+className+"'>"+val+"</span>";
	}
	
	//操作回调函数
	function opehFnc(val,row){
		var row = JSON.stringify(row);
		return "<a href='#' class='seeLink_1' title='查看' onclick='formattersee(this,"+row+")'></a><a href='#' class='editLink_1' title='编辑' onclick='formatteredit(this,"+row+")'></a><a href='#' class='deleteLink_1' title='删除'onclick='formatterOpe(this,"+row+")'></a>";
	}


})
function formatterOpe(){
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
function formatteredit(){
		windowFnc({
		id:"createvestAlert",
		width:558,
		height:400,
		iconCls:'materialPopIcon',
		url:'include/createvestAlert.html',
		title: "编辑马甲",
		buttons:[{
			'className':'backBtn',
			'text':'返回',
			'handle': function (api) {//确定
				api.close();
			}
		},{
			'className':'okagain',
			'text':'确定修改',
			'handle': function (api) {//确定
				api.close();
			}
		}],
		listeners:{
			render:function(){
				
			}
		}
	})
}

function formattersee(){
	windowFnc({
		id:"createvestAlert",
		width:558,
		height:400,
		iconCls:'materialPopIcon',
		url:'include/createvestAlert.html',
		title: "查看马甲",
		buttons:[{
			'className':'backBtn',
			'text':'返回',
			'handle': function (api) {//确定
				api.close();
			}
		},{
			'className':'okagain',
			'text':'确定修改',
			'handle': function (api) {//确定
				api.close();
			}
		}],
		listeners:{
			render:function(){
				
			}
		}
	})
}






