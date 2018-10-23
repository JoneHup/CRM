<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 素材库 - 公共素材</title>
	<#include "/common/common-css.ftl">
	<script type="text/javascript" src="${staticPath}/js/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="${staticPath}/js/run-min.js"></script>
	<script type="text/javascript" src="${staticPath}/js/global.js"></script>
	<script type="text/javascript" src="${staticPath}/js/date.js"></script>
	<script type="text/javascript" src="${staticPath}/js/datePicker/WdatePicker.js"></script>
	<script type="text/javascript" src="${staticPath}/js/jquery.placeholder.js"></script>
	<script type="text/javascript" src="${staticPath}/js/netComment/net_materialstore.js"></script>
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
    	<h3 class="left">素材库-公共素材</h3>
    </div>
    
    <div class="taskBox">
    
    	<div class="longBoxBtm marginL10">
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
        </div>
        
        <div class="materialTab">
        	<div class="materialTabHd">
            	<ul class="clearfix">
                	<li class="left slt"><a href="#" class="tabHdLink_1">文章素材</a></li>
                    <li class="left"><a href="#" class="tabHdLink_2">评论素材</a></li>
                </ul>
            </div>
            <div class="materialTabBd">
            	<div class="materialTabBdItem"></div>
                <div class="materialTabBdItem"></div>
            </div>
        </div>
	
    </div>
    
</div>
</body>
</html>
