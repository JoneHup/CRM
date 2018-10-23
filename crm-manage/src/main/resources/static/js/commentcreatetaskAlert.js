$(function(){
	
	$('.r-window-title-close').click(function(){
		$('#showtaskAlert').remove();
		$('#edui_fixedlayer').remove();
		$('#global-zeroclipboard-html-bridge').remove();
		$("script:contains('ueditor')").hide();
		ue = null;
		$("script[src='file:///G:/2018%E5%B7%A5%E4%BD%9C%E6%88%90%E6%9E%9C/0920%E7%BD%91%E8%AF%84%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/js/ueditor/lang/zh-cn/zh-cn.js']").remove();
		$("link[href='file:///G:/2018%E5%B7%A5%E4%BD%9C%E6%88%90%E6%9E%9C/0920%E7%BD%91%E8%AF%84%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/js/ueditor/third-party/codemirror/codemirror.css']").remove();
		$("script[src='file:///G:/2018%E5%B7%A5%E4%BD%9C%E6%88%90%E6%9E%9C/0920%E7%BD%91%E8%AF%84%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/js/ueditor/third-party/codemirror/codemirror.js']").remove();
		$("script[src='file:///G:/2018%E5%B7%A5%E4%BD%9C%E6%88%90%E6%9E%9C/0920%E7%BD%91%E8%AF%84%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/js/ueditor/third-party/zeroclipboard/ZeroClipboard.js']").remove();
		$("link[href='file:///G:/2018%E5%B7%A5%E4%BD%9C%E6%88%90%E6%9E%9C/0920%E7%BD%91%E8%AF%84%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/js/ueditor/themes/default/css/ueditor.css']").remove();
		
	});
	//加载下拉框组件
	var configs = [{
		id : "cretataskInput_1",
		width : 204,
		url : "json/messagecenteredit.json",
		placeholder:"xxxxxxxxxx",
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
		id : "cretataskInput_2",
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
})

//<script type="text/javascript" charset="utf-8" src="js/ueditor/ueditor.config.js"></script>
//<script type="text/javascript" charset="utf-8" src="js/ueditor/ueditor.all.min.js"></script>