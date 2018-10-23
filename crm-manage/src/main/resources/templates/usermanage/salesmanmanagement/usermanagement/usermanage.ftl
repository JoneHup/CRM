<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 业务人员 - 用户管理</title>
<#include "/common/common-css.ftl">
    <link rel="stylesheet" type="text/css" href="/style/Grid.css" />
<#include "/common/common-js.ftl">
    <script type="text/javascript" src="/js/accountadd.js"></script>
    <script type="text/javascript" src="/js/datePicker/WdatePicker.js"></script>
    <script type="text/javascript" src="/js/date.js"></script>
</head>

<body>
<#include "/common/common-header.ftl">
<div class="navBox">
	<div class="navWrap">
    	<ul class="nav clearfix">
        	<li class="left outerLi">
            	<a href="#" class="outerA navLink_1">消息中心</a>
                <ul class="innerUl">
                	<li class="innerLi"><a href="#" class="innerA">消息详情页</a></li>
                	<li class="innerLi"><a href="#" class="innerA">消息发布页</a></li>
                </ul>
            </li>
        	<li class="left outerLi slt">
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
    	<h3 class="left">后台管理-业务人员管理</h3>
    </div>
    
    <div class="userManage">
    
    	<!--<div class="longBoxBtm marginL10">
        	<div class="longBoxTop">
            	<div class="longBoxCenter">
                	<ul class="taskList_1">
                    	<li class="clearfix">
                        	<label class="left">素材标题/内容：</label>
                            <div id="materialStoreComb_1" class="left"></div>
                        	<label class="left">发布时间：</label>
                            <input type="text" class="left timeInput j_toTimeSS" />
                        	<label class="left">绩效地点：</label>
                            <div id="materialStoreComb_2" class="left marginR4"></div>
                            <div id="materialStoreComb_3" class="left"></div>
                            <a href="#" class="right schLink_2">查询</a>
                        </li>
                   </ul>
                </div>
            </div>
        </div>-->
        
        <div class="userManageTab">
        	<div class="userManageTabHd">
            	<ul class="clearfix">
                	<li class="left slt"><a href="#" class="tabHdLink_3">用户管理</a></li>
                    <li class="left"><a href="#" class="tabHdLink_4">组织管理</a></li>
                    <li class="left"><a href="#" class="tabHdLink_5">角色管理</a></li>
                </ul>
            </div>
            <div class="userManageTabBd">
            	<div class="userManageTabBdItem"></div>
                <div class="userManageTabBdItem"></div>
                <div class="userManageTabBdItem"></div>
            </div>
        </div>
        
    </div>
    
    
    
</div>
</body>
</html>
