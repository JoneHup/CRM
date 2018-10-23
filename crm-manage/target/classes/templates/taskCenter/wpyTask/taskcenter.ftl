<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 任务中心 - 网评员任务</title>
<#include "/common/common-css.ftl">
<link rel="stylesheet" type="text/css" href="${staticPath}/style/Grid.css" />
<link rel="stylesheet" href="${staticPath}/style/Window.css" />

<#include "/common/common-js.ftl">
<script type="text/javascript" src="${staticPath}/js/datePicker/WdatePicker.js"></script>
<script type="text/javascript" src="${staticPath}/js/date.js"></script>
<script type="text/javascript" src="${staticPath}/js/taskcenter.js"></script>
<script type="text/javascript" charset="utf-8" src="${staticPath}/js/ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="${staticPath}/js/ueditor/ueditor.all.min.js"></script>

</head>

<body>
<#include "/common/common-header.ftl">
<div class="navBox">
	<div class="navWrap">
    	<ul class="nav clearfix">
        	<li class="left outerLi">
            	<a href="#" class="outerA navLink_1">消息中心</a>
            </li>
        	<li class="left outerLi slt">
            	<a href="#" class="outerA navLink_2">任务中心</a>
                <ul class="innerUl">
                	<li class="innerLi"><a href="taskcenter.html" class="innerA">网评员任务</a></li>
                	<li class="innerLi"><a href="vesttask.html" class="innerA">马甲任务</a></li>
                </ul>
            </li>
        	<li class="left outerLi">
            	<a href="#" class="outerA navLink_3">绩效统计</a>
                <ul class="innerUl">
                	<li class="innerLi"><a href="organization.html" class="innerA">组织绩效</a></li>
                	<li class="innerLi"><a href="commentator.html" class="innerA">网评员绩效</a></li>
                </ul>
            </li>
        	<li class="left outerLi">
            	<a href="#" class="outerA navLink_4">素材库</a>
                <ul class="innerUl">
                	<li class="innerLi"><a href="materialstore.html" class="innerA">公共素材</a></li>
                	<li class="innerLi"><a href="sharestore.html" class="innerA">共享素材</a></li>
                </ul>
            </li>
        	<li class="left outerLi">
            	<a href="#" class="outerA navLink_5">马甲库</a>
                <ul class="innerUl">
                	<li class="innerLi"><a href="veststore.html" class="innerA">马甲库</a></li>
                	<li class="innerLi"><a href="#" class="innerA"></a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
<div class="wrap">
	<div class="title clearfix">
    	<h3 class="left">任务中心-网评员任务</h3>
        <a href="commenttask.html" class="right taskLink_2">评论任务</a>
        <a href="#" class="right taskLink_1">发文任务</a>
    </div>
    
    <div class="taskBox">
    
    	<div class="longBoxBtm marginL10">
        	<div class="longBoxTop">
            	<div class="longBoxCenter">
                	<ul class="taskList_1">
                    	<li class="clearfix">
                        	<label class="left">任务类型：</label>
                            <div id="taskCenterComb_1" class="left"></div>
                        	<label class="left taskName">任务名称：</label>
                        	<input type="text" class="left taskInput"/>
                            <!--<div id="taskCenterComb_2" class="left"></div>-->
                        	<label class="left taskStatu">任务状态：</label>
                            <div id="taskCenterComb_3" class="left"></div>
                        </li>
                        <li class="clearfix">
                        	<label class="left">发布时间：</label>
                            <input type="text" class="left timeInput j_toTimeSS" />
                            <span class="left timeSep">—</span>
                            <input type="text" class="left timeInput j_toTimeSS" />
                        	<label class="left">网评员截止时间：</label>
                            <input type="text" class="left timeInput j_toTimeSS" />
                            <span class="left timeSep">—</span>
                            <input type="text" class="left timeInput j_toTimeSS" />
                        </li>
                        <li class="clearfix">
                        	<label class="left">阅评员截止时间：</label>
                            <input type="text" class="left timeInput j_toTimeSS" />
                            <span class="left timeSep">—</span>
                            <input type="text" class="left timeInput j_toTimeSS" />
                            <a href="#" class="right schLink_2">查询</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
        <div class="createtaskBox clearfix">
			<a href="#" class="createtask right">任务创建</a>
		</div>
        
        <div class="normalGridBox">
        	<div id="taskCenterGrid" class="taskCenterGrid"></div>
        </div>
    </div>
</div>


<!--弹窗-->
<div class="showAlert" id="showtaskAlert"></div>
</body>
<!--<script>
	var ue = UE.getEditor('editor');
</script>-->
</html>
