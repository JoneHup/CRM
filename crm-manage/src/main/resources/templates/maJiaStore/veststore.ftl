<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 马甲库</title>
<#include "/common/common-css.ftl">
<link rel="stylesheet" type="text/css" href="/style/Grid.css" />


<script type="text/javascript" src="/js/datePicker/WdatePicker.js"></script>
<script type="text/javascript" src="/js/date.js"></script>
<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/veststore.js"></script>
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
    	<h3 class="left">马甲任务</h3>
    </div>
    
    <div class="taskBox">
    
    	<div class="longBoxBtm marginL10">
        	<div class="longBoxTop">
            	<div class="longBoxCenter">
                	<ul class="vestStoreList">
                    	<li class="clearfix">
                        	<label class="left">马甲类型：</label>
                            <div id="vestStoreComb_1" class="left"></div>
                        	<label class="left">校验状态：</label>
                            <div id="vestStoreComb_2" class="left"></div>
                        	<label class="left">添加方式：</label>
                            <div id="vestStoreComb_3" class="left"></div>
                        	<label class="left">IP绑定情况：</label>
                            <div id="vestStoreComb_4" class="left"></div>
                            <a href="#" class="right schLink_2">查询</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
        
        <div class="normalGridBox">
        	<div class="clearfix materialCardTotal">
                <h4 class="left materialCardH4">共<em>56</em>条相关结果</h4>
                <a href="#" class="right createMaterialLink">素材马甲</a>
            </div>
        	<div id="vestStoreGrid" class="vestStoreGrid"></div>
        </div>
	
    </div>
    
</div>
</body>
</html>
