<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 网评员 - 消息中心 - 消息详情页</title>
	<#include "/common/common-css.ftl">
	<script type="text/javascript" src="${staticPath}/js/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="${staticPath}/js/global.js"></script>
	<script type="text/javascript" src="${staticPath}/js/global.js"></script>
	<script type="text/javascript" src="${staticPath}/js/netComment/net_messagedetail.js"></script>
</head>

<body>
	<!--引入头部 start -->
	<#include "/common/common-header.ftl">
	<!--引入头部 end -->
	
	<!--引入导航栏 start -->
	<#include "/common/net-common-nav.ftl">
	<!--引入导航栏 end -->
	
<div class="wrap">
	<div class="title clearfix">
    	<h3 class="left">网评员-消息中心-消息详情页</h3>
        <a href="#" class="right backLink"></a>
    </div>
    <#if message??>
    <div class="detailBox">
    	<h3 class="detailTitle">${message.title}</h3>
        <div class="detailDes clearfix">
        	<span class="detailSubTitle">
        		<#if message.noticeType == 1>
        			通知
        		<#else>
        			其他
        		</#if>
        	</span>
        	<span class="msgCardUser right">${message.account}</span>
            <span class="msgCartTime right">${message.createTime?string("yyyy-MM-dd")}</span>
        </div>
        <div class="detailContent">${message.content}</div>
        
        <ul class="appendixBox">       	               	
        	<#if message.fileInfo?exists>
        		<#list message.fileInfo?keys as key>     
        			<li class="clearfix">
        				<a href="javascript:void(0);" onclick="downLoadFile('${key}');">${message.fileInfo[key]}</a>
        			</li>       			       			                   
        		</#list>
        	</#if>
        	
        </ul>       
    </div>
    </#if>
      
    <div class="bp-jumb-box">
	   	<div class="bp-jumb-content">
		   	<div class="bp-jumb-title">提示</div>
		   	<div class="bp-jumb-text">确定要删除吗</div>
		   	<div class="bp-jumb-double-btn">
		   		<div class="bp-jumb-btn bp-jumb-cancle" onclick="$(this).parent().parent().parent('.bp-jumb-box').fadeOut(500)">取消</div>
		   		<div class="bp-jumb-btn bp-jumb-confirm">确认</div>
		   	</div>
		   	<div class="bp-jumb-angle-btn"  onclick="$(this).parent().parent().parent('.bp-jumb-box').fadeOut(500)">我知道了</div>
	   	<div>
   </div>
</div>
</body>
</html>
