<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 后台管理-业务人员管理-组织管理-新建组织机构</title>
<#include "/common/common-css.ftl">
<link rel="stylesheet" type="text/css" href="style/Grid.css" />
<!--<link rel="stylesheet" type="text/css" href="style/gs.css" />-->
<#include "/common/common-js.ftl">
<script type="text/javascript" src="js/datePicker/WdatePicker.js"></script>
<script type="text/javascript" src="js/date.js"></script>
<script type="text/javascript" src="js/admin_organizationadd.js"></script>
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
    	<h3 class="left">后台管理-业务人员管理-组织管理-新建组织机构</h3>
        <!--<a href="#" class="right backLink"></a>-->
    </div>
    
    <div class="userManage">
    	<ul class="accountAddList clearfix">
        	<li class="place clearfix">
            	<label class="left txt">所在地：</label>
                <input type="text" class="left smallinput"/>
                <input type="text" class="left smallinput"/>
                <input type="text" class="left smallinput"/>
                <input type="text" class="left smallinput"/>
           </li>
        	<li class="clearfix">
            	<label class="left txt">组织机构：</label>
                <input type="text" class="left accountInput"/>
          </li>
        </ul>
    </div>
    
    <div class="footerBtn">
    	<a href="#" class="right accountcancel">返回</a>
		<a href="#" class="right accountpublish">提交</a>
    </div>
    
</div>
</body>
</html>
