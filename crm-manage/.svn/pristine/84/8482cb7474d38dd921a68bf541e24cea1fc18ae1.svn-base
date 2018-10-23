<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 消息中心 - 消息详情页</title>
	<!-- 引入css-->
	<#include "/common/common-css.ftl">
	
	<!-- 引入js-->
	<#include "/common/common-js.ftl">
	<script type="text/javascript" src="${staticPath}/js/messagecenter/messagedetail.js"></script>
	
</head>

<body>
	<!-- 引入头部-->
	<#include "/common/common-header.ftl">
	
	<!-- 引入导航栏-->
	<#include "/common/common-nav.ftl">
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
        	<span class="msgCardUser right">${message.userAccount}</span>
            <span class="msgCartTime right">${message.createTime?string("yyyy-MM-dd HH:mm:ss")}</span>
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
</div>	
</body>
</html>
