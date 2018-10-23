$(function(){
	//切换年月
	$('.labelyear').click(function(){
		$('.month').hide();
		$('.year').show();
	})
	$('.labelmonth').click(function(){
		$('.year').hide();
		$('.month').show();
	})
	//加载下拉框组件
	var configs = [{
		id : "achievementComb_1",
		width : 140,
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
		id : "achievementComb_2",
		width : 140,
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
		id : "achievementComb_3",
		width : 140,
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
		id : "achievementComb_4",
		width : 140,
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
		id : "achievementComb_5",
		width : 140,
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
    var achievementColModel = [{												//配置表格各列
			display:'日期',
			name:'col1',
			hidden:false
		},{												//配置表格各列
			display:'发文量',
			name:'col2',
			hidden:false
		},{												//配置表格各列
			display:'阅评员平均值',
			name:'col3',
			hidden:false
		},{												//配置表格各列
			display:'共享素材入库量',
			name:'col4',
			hidden:false
		}];
    var achievementConfig = {
		//usepage : null,
		isMultiple : true,
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
	
	//仿下拉框相关事件
	
	
	
	
    grid("achievementGrid","json/achievementGrid.json",achievementColModel,achievementConfig);
	
	//图表、表格切换效果
	$(".chartLink").click(function(){
//		$(this).hide().next(".gridLink").show();
		$(this).css("background",'url(images/nochoosecharts_bg.png) no-repeat');
		$('.gridLink').css("background",'url(images/gridlink_1.png) no-repeat')
		$(".achievementGrid").hide().next(".organizationChart").show("fast",function(){
			if($.trim($(".organizationChart").html() === "")){
				showChart("organizationChart");
			}
		});
		return false;
	});
	$(".gridLink").click(function(){
//		$(this).hide().prev(".chartLink").show();
		$(this).css("background",'url(images/nochoosegrid_bg.png) no-repeat');
		$('.chartLink').css("background",'url(images/chartlink_1.png) no-repeat')
		$(this).css("background","url(../images/nochoosecharts_bg.png) no-repeat;");
		$(".organizationChart").hide().prev(".achievementGrid").show();
		return false;
	});
	
	//加载图表
	//showChart("organizationChart");
	
	function showChart(id){
		var ec = echarts;
		/*线图*/
		if (document.getElementById(id)) {
			globalObj.chartObj[id] = ec.init(document.getElementById(id));
			var option = {
				grid: {
					y:100
				},
				tooltip: {
					show: true
				},
				legend: {
					y: '60',
					data: ['发文量', '阅读员评分均值', '共享素材入库量']
				},
				xAxis: [{
					type: 'category',
					splitLine: {
						show: true,
							lineStyle: {
								color: ['#999999'],
								width: 1,
								type: 'solid'
							}
					  },
					  data: ["吴三岁", "张挂天", "吴三岁", "张挂天", "吴三岁", "张挂天", "吴三岁", "张挂天", "吴三岁", "张挂天", "吴三岁", "张挂天"],
					  axisLine: {
							lineStyle: {
								  color: '#333',
								  width: 1
							}
					  }
				}],
				yAxis: [{
					  type: 'value',
					  max: 600,
					  splitLine: {
							show: false
					  },
					  splitArea: {
							show: true
					  },
					  splitNumber: 10,
					  axisLine: {
							lineStyle: {
								  color: '#333',
								  width: 1
							}
					  }
				}],
				series: [{
					  "name": "发文量",
					  "type": "bar",
					  "data": [500, 20, 400, 100, 10, 200, 50, 200, 400, 100, 10, 200],
					  itemStyle: {
							normal: {
								  color:"#5c73e6"
							}
					  }
				}, {
					  "name": "阅读员评分均值",
					  "type": "bar",
					  "data": [50, 200, 40, 100, 100, 20, 50, 20, 400, 10, 10, 200],
					  itemStyle: {
							normal: {
								  color:"#e54e20"
							}
					  }
				}, {
					  "name": "共享素材入库量",
					  "type": "bar",
					  "data": [5, 200, 400, 10, 100, 200, 50, 200, 40, 100, 100, 20],
					  itemStyle: {
							normal: {
								  color:"#7c5ce5"
							}
					  }
				}]
		  };
		  globalObj.chartObj[id].setOption(option);
		}
	}
	
})