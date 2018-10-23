<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 后台管理-业务人员管理-角色管理-查看角色成员</title>
<#include "/common/common-css.ftl">
<link rel="stylesheet" type="text/css" href="style/Grid.css" />
<!--<link rel="stylesheet" type="text/css" href="style/gs.css" />-->

<#include "/common/common-js.ftl">
<script type="text/javascript" src="js/datePicker/WdatePicker.js"></script>
<script type="text/javascript" src="js/date.js"></script>
<script type="text/javascript" src="js/admin_rolecheckperson.js"></script>
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
    	<h3 class="left">后台管理-业务人员管理-角色管理-查看角色成员</h3>
    </div>
    
    <div class="taskBox">
    
    	<div class="longBoxBtm marginL10">
        	<div class="longBoxTop">
            	<div class="longBoxCenter">
                	<ul class="taskList_1">
                		 <li class="clearfix">
                        	<label class="left" for="">账号：</label>
							<input type="text" class="userManageInput left"/>
							<label class="left" for="">姓名：</label>
							<input type="text" class="userManageInput left"/>
                        </li>
                    	<li class="clearfix">
                        	<label class="left">组织机构：</label>
                            <div id="taskCenterComb_1" class="left"></div>
                            <a href="#" class="right schLink_2">查询</a>
                       </li>
                   </ul>
                </div>
            </div>
        </div>
        <div class="organizationNameBox">
	    	<h4 class="organizationName">角色1</h4>
    	</div>
        <div class="normalGridBox">
        	<div id="taskCenterGrid" class="taskCenterGrid"></div>
        </div>
	
    </div>
    
</div>
</body>
</html>
