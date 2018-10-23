<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 后台管理-网评员管理-角色管理-新建角色</title>
<#include "/common/common-css.ftl">
<link rel="stylesheet" href="/style/Window.css" />
<link rel="stylesheet" href="/style/gs.css" />
<#include "/common/common-js.ftl">
</head>

<body>
<#include "/common/common-header.ftl">
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
<div class="newsCenterBox">
	<div class="newsCenter">
		<div class="title clearfix">
	    	<h3 class="left">后台管理-网评员管理-角色管理-新建角色</h3>
	        <a href="#" class="right backLink"></a>
	    </div>
	    <div class="roleInfoTitle">
	    	<h3 class="organizationName">基本信息&nbsp;<em>|</em>&nbsp;权限设置</h3>
	    </div>
		<div class="editContent roleInfoBox">
			<ul class="editList">
				<li class="clearfix spec_1">
					<label class="left txt">角色名称：</label>
					<input class="left editInput" type="text" id="title" placeholder="角色1"/><br />
				</li>
				<li class="clearfix">
					<label class="left txt messagecontent">描述： </label>
					<textarea class="left writeRoleInfos"></textarea>
				</li>
			</ul>
		</div>
		<!--newsCenter部分結束-->
		<div class="editfooterBtn">
			<a href="#" class="right editcancel">重置</a>
			<a href="#" class="right editpublish">提交</a>
		</div>
	</div>	
</div>
</body>
</html>
