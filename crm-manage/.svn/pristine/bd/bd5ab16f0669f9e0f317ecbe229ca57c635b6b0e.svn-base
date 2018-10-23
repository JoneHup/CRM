<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 消息中心 - 消息详情页</title>
	<!-- 引入css-->
	<#include "/common/common-css.ftl">
	<script type="text/javascript" src="${staticPath}/js/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="${staticPath}/js/run-min.js"></script>
	<script type="text/javascript" src="${staticPath}/js/jquery.placeholder.js"></script>
	<script type="text/javascript" src="${staticPath}/js/global.js"></script>
	<script type="text/javascript" src="${staticPath}/js/messagecenter/messagecenteredit.js"></script>
	<script type="text/javascript" charset="utf-8" src="${staticPath}/js/ueditor/ueditor.config.js"></script>
	<script type="text/javascript" charset="utf-8" src="${staticPath}/js/ueditor/ueditor.all.min.js"></script>
	

</head>

<body>
	<!--引入头部 start -->
	<#include "/common/common-header.ftl">
	
	<!--引入nav -->
	<#include "/common/common-nav.ftl">

<div class="newsCenterBox">
	<div class="newsCenter">
		<div class="title clearfix">
	    	<h3 class="left">消息中心-消息编辑页</h3>
	        <!--<a href="messagecenter.html" class="right backLink"></a>-->
	    </div>
		<div class="editContent">
			<ul class="editList">
				<li class="clearfix spec_1">
					<label class="left txt"><em class="orange">*</em>消息标题：</label>
					<input class="left editInput" type="text" id="title" placeholder="请输入消息标题"/><br />
				</li>
				<li class="clearfix">
					<label class="left txt messagecontent"><em class="orange">*</em>消息内容： </label>
					<script id="editor" type="text/plain" class="left "></script>
				</li>
				<li class="clearfix spec upBox">
					<label class="left txt">消息附件： </label>
					<div class="inputImg left">
						<input type="file" style="display:none;" class="likeFile" />
						<input class="left likeFileInput" type="text" placeholder="请输入消息标题" />
						<a href="#" class="inputup right"></a>
					</div>
				</li>
				<li class="clearfix spec">
					<label class="left txt"><em class="orange">*</em>消息分类：</label>
					<div class="left" id="editInput_1"></div>
					<a href="#" class="classifyBtn">分类设置</a>
				</li>
			</ul>
		</div>
		<!--newsCenter部分結束-->
		<div class="editfooterBtn">
			<a href="#" class="right editpublish">发布</a>
			<a href="messagecenter.html" class="right back">返回</a>
		</div>
	</div>	
</div>

<!--弹窗-->
<div class="showAlert" id="showAlert"></div>

</body>
<script>
	var ue = UE.getEditor('editor');
</script>
</html>
