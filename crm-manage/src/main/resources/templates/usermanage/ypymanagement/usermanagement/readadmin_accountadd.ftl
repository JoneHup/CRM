<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 -后台管理-阅评员管理-用户管理-新建账号</title>
<#include "/common/common-css.ftl">
    <link rel="stylesheet" type="text/css" href="/style/Grid.css" />
    <link rel="stylesheet" type="text/css" href="/style/gs.css" />
<#include "/common/common-js.ftl">
    <script type="text/javascript" src="/js/datePicker/WdatePicker.js"></script>
    <script type="text/javascript" src="/js/date.js"></script>
    <script type="text/javascript" src="/js/readadmin_accountadd.js"></script></head>
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
    	<h3 class="left">后台管理-阅评员管理-用户管理-新建账号</h3>
        <a href="#" class="right backLink"></a>
    </div>
    
    <div class="userManage">
    	<ul class="accountAddList clearfix">
        	<li class="clearfix">
            	<label class="left txt"><em class="orange">*</em>账号：</label>
                <input type="text" class="left accountInput" placeholder="XXXXXXX"/>
                <label class="left txt"><em class="orange">*</em>密码：</label>
                <input type="password" class="left accountInput" placeholder="XXXXXXX"/>
           </li>
        	<li class="clearfix">
            	<label class="left txt"><em class="orange">*</em>姓名：</label>
                <input type="text" class="left accountInput" placeholder="XXXXXXX"/>
                <label class="left txt">性别：</label>
                <!--<input name="sex" type="radio" class="sex guy" value="1" checked/>男
                <input name="sex" type="radio" class="sex gril" value="2"/>女-->
                <label class="radioLabel left"><input type="radio" class="left" name="performance" /><span class="left">男</span></label>
				<label class="radioLabel left marginL10"><input type="radio" class="left" name="performance" /><span class="left">女</span></label>
           </li>
        	<li class="clearfix">
            	<label class="left txt">职务：</label>
                <input type="text" class="left accountInput" placeholder="XXXXXXX" />
                <label class="left txt">身份证号：</label>
                <input type="text" class="left accountInput" placeholder="XXXXXXX" />
           </li>
        	<li class="clearfix">
            	<label class="left txt"><em class="orange">*</em>手机：</label>
                <input type="text" class="left accountInput" placeholder="XXXXXXX" />
                <label class="left txt">电子邮箱：</label>
                <input type="text" class="left accountInput" placeholder="XXXXXXX" />
           </li>
        	<li class="clearfix">
            	<label class="left txt">座机：</label>
                <input type="text" class="left accountInput" placeholder="XXXXXXX" />
                <label class="left txt">分机号：</label>
                <input type="text" class="left accountInput" placeholder="XXXXXXX" />
           </li>
        	<li class="clearfix">
            	<label class="left txt">编号：</label>
                <input type="text" class="left accountInput" placeholder="XXXXXXX" />
                <label class="left txt">角色：</label>
                <div class="left" id="accountInput_1"></div>
           </li>
        	<li class="clearfix">
            	<label class="left txt"><em class="orange">*</em>所在地：</label>
                <div class="left" id="accountInput_2"></div>
                <label class="left txt">组织机构：</label>
                <div class="left" id="accountInput_3"></div>
           </li>
        </ul>
    </div>
    
    <div class="footerBtn">
    	<a href="#" class="right accountcancel">取消</a>
		<a href="#" class="right accountpublish">发布</a>
    </div>
    
</div>
</body>
</html>
