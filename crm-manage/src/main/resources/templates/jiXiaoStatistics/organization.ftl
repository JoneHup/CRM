<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 绩效统计 - 组织绩效</title>
<link rel="stylesheet" type="text/css" href="style/global.css" />
<link rel="stylesheet" type="text/css" href="style/Combobox.css" />
<link rel="stylesheet" type="text/css" href="style/Grid.css" />
<link rel="stylesheet" type="text/css" href="style/style.css" />

<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="js/run-min.js"></script>
<script type="text/javascript" src="js/jquery.placeholder.js"></script>
<script type="text/javascript" src="js/datePicker/WdatePicker.js"></script>
<script type="text/javascript" src="js/date.js"></script>
<script type="text/javascript" src="js/echarts.js"></script>
<script type="text/javascript" src="js/global.js"></script>
<script type="text/javascript" src="js/organization.js"></script>
</head>

<body>
<div class="head">
	<div class="logoBox clearfix">
    	<a href="#" class="left logo"><img src="images/logo.png" alt="网评管理系统" /></a>
    </div>
    <div class="headOpe clearfix">
    	<span class="headUser left">用户名：admin</span>
        <a href="#" class="left headSetLink">设置</a>
    </div>
</div>
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
    	<h3 class="left">绩效统计-组织绩效</h3>
    </div>
    
    <div class="taskBox">
    
    	<div class="longBoxBtm marginL10">
        	<div class="longBoxTop">
            	<div class="longBoxCenter">
                	<ul class="taskList_1">
                    	<li class="clearfix">
                        	<label class="left">日期范围：</label>
                            <div id="organizationComb_1" class="left smallComb marginR4"></div>
                            <div id="organizationComb_2" class="left smallComb marginR4"></div>
                        </li>
                        <li class="clearfix">
                        	<label class="left">绩效地点：</label>
                            <label class="radioLabel left"><input type="radio" class="left" name="performance" /><span class="left">地域</span></label>
                            <label class="radioLabel left"><input type="radio" class="left" name="performance" /><span class="left">组织</span></label>
                            <div id="organizationComb_3" class="left smallComb marginR4"></div>
                            <div id="organizationComb_4" class="left smallComb marginR4"></div>
                            <div id="organizationComb_5" class="left smallComb marginR4"></div>
                            <div id="organizationComb_6" class="left smallComb marginR4"></div>
                            <div id="organizationComb_7" class="left smallComb marginR4"></div>
                            <div class="left smallComb marginR4 organizationLikeComb">
                            	<div class="r-combobox-box r-combobox-now">
                                	<input type="text" placeholder="请选择" class="r-combobox-input">
                                    <a href="#" class="r-combobox-handle r-combobox-handle-up"></a>
                                    <dl class="r-combobox-slider">
                                    	<dd class="clearfix"><span class="left" title="全部" value="1">全部</span></dd>
                                        <dd class="clearfix"><span class="left" title="下拉框选项一" value="2">下拉框选项一</span></dd>
                                        <dd class="clearfix likeCombIcon_1"><span class="left" title="下拉框选项二" value="3">下拉框选项二</span></dd>
                                        <dd class="clearfix likeCombIcon_2"><span class="left" title="下拉框选项三" value="4">下拉框选项三</span></dd>
                                    </dl>
                                    <input type="hidden" name="organizationComb_5" value="">
                                </div>
                            </div>
                            <a href="#" class="right schLink_2">查询</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="normalGridBox">
        	<div class="clearfix organizationSift">
            	<a href="#" class="left exportLink">导出</a>
                <a href="#" class="right chartLink">图表视图</a>
                <a href="#" class="right gridLink">表格视图</a>
                <div class="right smallComb" id="organizationComb_8"></div>
                <label class="right">排列顺序：</label>	
            </div>
        	<div id="organizationGrid" class="organizationGrid"></div>
        	<div id="organizationChart" class="organizationChart"></div>
        </div>
	
    </div>
    
</div>
</body>
</html>
