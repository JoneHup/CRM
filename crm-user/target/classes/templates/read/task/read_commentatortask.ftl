<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 阅评员 - 任务中心</title>
<#include "/common/common-css.ftl">

<script type="text/javascript" src="${staticPath}/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="${staticPath}/js/run-min.js"></script>
<script type="text/javascript" src="${staticPath}/js/jquery.placeholder.js"></script>
<script type="text/javascript" src="${staticPath}/js/datePicker/WdatePicker.js"></script>
<script type="text/javascript" src="${staticPath}/js/date.js"></script>
<script type="text/javascript" src="${staticPath}/js/global.js"></script>
<script type="text/javascript" src="${staticPath}/js/read_commentatortask.js"></script>
</head>

<body>
<!--引入头部 start -->
	<#include "/common/common-header.ftl">
<!--引入头部 end -->
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
    	<h3 class="left">阅评员 - 任务中心</h3>
        <a href="#" class="right finishTaskLink_1">已归档任务</a>
        <a href="#" class="right doingTaskLink_1">进行中任务</a>
    </div>
    
    <div class="taskBox">
    
    	<div class="longBoxBtm marginL10">
        	<div class="longBoxTop">
            	<div class="longBoxCenter">
                	<ul class="taskList_1">
                    	<li class="clearfix">
                        	<label class="left">任务类型：</label>
                            <div id="taskCenterComb_1" class="left"></div>
                        	<label class="left">任务名称：</label>
                            <div id="taskCenterComb_2" class="left"></div>
                        </li>
                        <li class="clearfix">
                        	<label class="left">发布时间：</label>
                            <input type="text" class="left timeInput j_toTimeSS" />
                            <span class="left timeSep">—</span>
                            <input type="text" class="left timeInput j_toTimeSS" />
                        	<label class="left">截止时间：</label>
                            <input type="text" class="left timeInput j_toTimeSS" />
                            <span class="left timeSep">—</span>
                            <input type="text" class="left timeInput j_toTimeSS" />
                            <a href="#" class="right schLink_2">查询</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
        
        <div class="normalGridBox">
        	<div id="taskCenterGrid" class="taskCenterGrid"></div>
        </div>
	
    </div>
    
</div>
</body>
</html>
