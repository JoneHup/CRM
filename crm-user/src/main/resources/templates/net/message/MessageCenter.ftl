<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 网评员 - 消息中心</title>
	<#include "/common/common-css.ftl">
	
	<script type="text/javascript" src="${staticPath}/js/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="${staticPath}/js/run-min.js"></script>
	<script type="text/javascript" src="${staticPath}/js/global.js"></script>
	<script type="text/javascript" src="${staticPath}/js/Card.js"></script>
	<script type="text/javascript" src="${staticPath}/js/CardMsg.js"></script>
	<script type="text/javascript" src="${staticPath}/js/netComment/net_messagecenter.js"></script>
	
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
    	<h3 class="left">网评员 - 消息中心</h3>
        <div id="" class="searchBox right">
      		  <input type="text" class="left" /><span id="searchBox" class="left schLink_1"></span>
        </div>
    </div>
      <div class="msgList">
    	<div id="netMsgCard" class="netMsgCard">      	
        	<div class="clearfix msgCartItem">
            	
            </div>    	         
        </div>
    </div>
  
    
</div>
</body>
</html>
