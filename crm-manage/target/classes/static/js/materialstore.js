$(function(){

	$(".materialTabHd li").each(function(i){
		$(this).click(function(){
			$(this).addClass("slt").siblings().removeClass("slt");
			$(".materialTabBd .materialTabBdItem").eq(i).show().siblings().hide();
			if($.trim($(".materialTabBd .materialTabBdItem").eq(i).html()) === ""){
				var pageName = "";
				if(i === 0){
					pageName = "materialstore_1";
				}else if(i === 1){
					pageName = "materialstore_2";
				}
				include(Constants.basePath+"/sucaiku/materialstore2",function(text){
					$(".materialTabBd .materialTabBdItem").eq(i).show().html("").append(text);
				});
			}
			return false;
		});
	});
	
	
	
	
	//页面初始加载第一屏标签页  
	include(Constants.basePath+"/sucaiku/materialstore1",function(text){
       $(".materialTabBd .materialTabBdItem").eq(0).show().html("").append(text);
    });

	//加载下拉框组件
	var configs = [{
		id : "materialStoreComb_1",
		width : 204,
		url : Constants.basePath+"/sucaiku/xialakuang",
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
		id : "materialStoreComb_2",
		width : 140,
		isMultiple : true,
		url :Constants.basePath+"/sucaiku/xialakuang",
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
		id : "materialStoreComb_3",
		width : 140,
		isMultiple : true,
		url : Constants.basePath+"/sucaiku/xialakuang",
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
})