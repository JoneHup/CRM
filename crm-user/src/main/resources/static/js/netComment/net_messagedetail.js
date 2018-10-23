/**
 * 点击附件下载
 * author:tongrongbing
 * @param param 附件路径
 */
function downLoadFile(param){
	$(".bp-jumb-text").text("确定要下载吗？");
	$(".bp-jumb-double-btn").show();
	$(".bp-jumb-angle-btn").hide();
	$(".bp-jumb-box").fadeIn(500);
	$(".bp-jumb-box").find(".bp-jumb-confirm").attr("onclick","jumbDown('"+param+"')");
}
function jumbDown(param){
	$(".bp-jumb-box").fadeOut(500);
	window.location.href = param;	
}
