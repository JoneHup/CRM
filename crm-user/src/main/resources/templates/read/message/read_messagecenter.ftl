<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 阅评员 - 消息中心</title>
<#include "/common/common-css.ftl">
<script type="text/javascript" src="${staticPath}/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="${staticPath}/js/run-min.js"></script>
<script type="text/javascript" src="${staticPath}/js/Card.js"></script>
<script type="text/javascript" src="${staticPath}/js/CardMsg.js"></script>
<script type="text/javascript" src="${staticPath}/js/global.js"></script>
<script type="text/javascript" src="${staticPath}/js/read_messagecenter.js"></script>
</head>

<body>
<!--引入头部 start -->
	<#include "/common/common-header.ftl">
<!--引入头部 end -->
<div class="navBox">
	<div class="navWrap">
    	<ul class="nav clearfix">
        	<li class="left outerLi slt">
            	<a href="#" class="outerA navLink_1">消息中心</a>
                <ul class="innerUl">
                	<li class="innerLi"><a href="#" class="innerA">消息详情页</a></li>
                	<li class="innerLi"><a href="#" class="innerA">消息发布页</a></li>
                </ul>
            </li>
        	<li class="left outerLi">
            	<a href="#" class="outerA navLink_2">任务中心</a>
                <ul class="innerUl">
                	<li class="innerLi"><a href="#" class="innerA">网评员任务</a></li>
                	<li class="innerLi"><a href="#" class="innerA">马甲任务</a></li>
                </ul>
            </li>
        	<li class="left outerLi">
            	<a href="#" class="outerA navLink_3">绩效统计</a>
                <ul class="innerUl">
                	<li class="innerLi"><a href="#" class="innerA">组织绩效</a></li>
                	<li class="innerLi"><a href="#" class="innerA">网评员绩效</a></li>
                </ul>
            </li>
        	<li class="left outerLi">
            	<a href="#" class="outerA navLink_4">素材库</a>
                <ul class="innerUl">
                	<li class="innerLi"><a href="#" class="innerA">公共素材</a></li>
                	<li class="innerLi"><a href="#" class="innerA">共享素材</a></li>
                </ul>
            </li>
        	<li class="left outerLi">
            	<a href="#" class="outerA navLink_5">马甲库</a>
                <!--<ul class="innerUl">
                	<li class="innerLi"><a href="#" class="innerA"></a></li>
                	<li class="innerLi"><a href="#" class="innerA"></a></li>
                </ul>-->
            </li>
        </ul>
    </div>
</div>
<div class="wrap">
	<div class="title clearfix">
    	<h3 class="left">阅评员 - 消息中心</h3>
        <div class="searchBox right"><input type="text" class="left" /><a href="#" class="left schLink_1"></a></div>
    </div>
    
    <div class="msgList">
    	<div id="readMsgCard" class="readMsgCard">
        	<!--
        	<div class="clearfix msgCartItem">
            	<a href="#" class="left msgCardTitle">
                	<span class="left">网评员考核公告2018-08-21</span>
                    <em class="left">通知类</em>
                </a>
                <span class="msgCardUser left">admn</span>
                <span class="msgCartTime left">2018--08--21</span>
                <a href="#" class="left setFirsLink"></a>
                <a href="#" class="left deleteLink"></a>
            </div>
        	<div class="clearfix msgCartItem">
            	<a href="#" class="left msgCardTitle">
                	<span class="left">网评员考核公告2018-08-21</span>
                    <em class="left">通知类</em>
                </a>
                <span class="msgCardUser left">admn</span>
                <span class="msgCartTime left">2018--08--21</span>
                <a href="#" class="left setFirsLink"></a>
                <a href="#" class="left deleteLink"></a>
            </div>
            -->
        </div>
    </div>
    
</div>
</body>
</html>
