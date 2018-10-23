<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 网评员 - 绩效统计</title>
	<#include "/common/common-css.ftl">
	<#include "/common/common-js.ftl">
	<script type="text/javascript" src="${staticPath}/js/netComment/net_achievement.js"></script>
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
    	<h3 class="left">网评员-绩效统计</h3>
    </div>
    
    <div class="taskBox">
        
        <div class="normalGridBox">
        	<div class="clearfix organizationSift">
            	<a href="#" class="left exportLink">导出</a>
                <div class="achievementSift left marginL10">
                    <label class="left">日期范围：</label>
                    <label class="radioLabel left"><input type="radio" class="left" name="date" checked="checked" /><span class="left">年</span></label>
                    <label class="radioLabel left marginL10"><input type="radio" class="left" name="date" /><span class="left">月</span></label>
                    <div id="achievementComb_1" class="left smallComb marginL10"></div>
                    <span class="left">年</span>
                    <div id="achievementComb_2" class="left smallComb marginL10"></div>
                    <span class="left">月</span>
                    <em class="left marginL10">—</em>
                    <div id="achievementComb_3" class="left smallComb marginL10"></div>
                    <span class="left">年</span>
                    <div id="achievementComb_4" class="left smallComb marginL10"></div>
                    <span class="left">月</span>
                </div>
                <a href="#" class="right chartLink">图表视图</a>
                <a href="#" class="right gridLink">表格视图</a>
                <div class="right smallComb" id="achievementComb_5"></div>
                <label class="right">排列顺序：</label>	
            </div>
        	<div id="achievementGrid" class="achievementGrid"></div>
        	<div id="organizationChart" class="organizationChart"></div>
        </div>
	
    </div>
    
</div>
</body>
</html>
