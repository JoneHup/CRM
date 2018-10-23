<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>网评管理系统 - 任务中心 - 发布任务详情</title>
<link rel="stylesheet" type="text/css" href="${staticPath}/style/global.css" />
<link rel="stylesheet" type="text/css" href="${staticPath}/style/Grid.css" />
<link rel="stylesheet" type="text/css" href="${staticPath}/style/style.css" />
<#include "/common/common-js.ftl">
<script type="text/javascript" src="${staticPath}/js/Card.js"></script>
<script type="text/javascript" src="${staticPath}/js/CardArticle.js"></script>
<script type="text/javascript" src="${staticPath}/js/taskcenterdetail_1.js"></script>
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
    	<h3 class="left">任务中心-网评任务-发布任务详情</h3>
        <!--<a href="taskcenter.html" class="right backLink"></a>-->
    </div>
    
    <div class="otherDetail">
    
	    <div class="otherTitle clearfix"><h3 class="left">任务情况</h3></div>
        <div class="boxBtm marginL10">
        	<div class="boxTop">
            	<div class="boxCenter">
                	<ul class="otherDetailList">
                    	<li class="clearfix">
                        	<label class="left otherDetailLabel">任务类型：</label>
                            <span class="left otherDetailSpan">${task.taskType}</span>
                        </li>
                    	<li class="clearfix">
                        	<label class="left otherDetailLabel">任务名称：</label>
                            <span class="left otherDetailSpan">${task.taskTitle}</span>
                        </li>
                    	<li class="clearfix">
                        	<label class="left otherDetailLabel">任务要求：</label>
                            <div class="left otherDetailDiv">
                            	<p>${task.taskDesc}</p>
                                <a href="/${task.filePath}" class="appendixLink">附件下载</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
	    <div class="otherTitle clearfix"><h3 class="left">文章情况</h3></div>
        <div class="boxBtm marginL10">
        	<div class="boxTop">
            	<div class="boxCenter">
                	<div class="cardArticle" id="cardArticle">
                    <div class="likePagenation clearfix"><a href="#" class="right">下一页</a><a href="#" class="right">上一页</a></div>
                	<ul class="otherDetailList">
                    	<li class="clearfix">
                        	<label class="left otherDetailLabel">网评员姓名：</label>
                            <span class="left otherDetailSpan nameIcon">王海</span>
                        </li>
                    	<li class="clearfix">
                        	<label class="left otherDetailLabel">文章标题：</label>
                            <span class="left otherDetailSpan">XXXXXXXXXXXXXXXXX</span>
                        </li>
                    	<li class="clearfix">
                        	<label class="left otherDetailLabel">文章内容：</label>
                            <div class="left otherDetailDiv">
                            	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    
	    <div class="otherTitle clearfix"><h3 class="left">跟踪情况</h3></div>
        <div class="boxBtm marginL10">
        	<div class="boxTop">
            	<div class="boxCenter">
                	<ul class="otherDetailList">
                    	<li class="clearfix">
                        	<label class="left otherDetailLabel">阅评员评分：</label>
                            <dl class="left pointList">
                            	<dd class="left"><label class="left">主旨鲜明：</label><span class="left">56</span></dd>
                            	<dd class="left"><label class="left">行文流畅：</label><span class="left">56</span></dd>
                            	<dd class="left"><label class="left">视角广泛：</label><span class="left">56</span></dd>
                            	<dd class="left"><label class="left">主旨鲜明：</label><span class="left">56</span></dd>
                            	<dd class="left"><label class="left">言辞通俗：</label><span class="left">56</span></dd>
                            	<dd class="left"><label class="left">总得分：</label><span class="left">56</span></dd>
                            </dl>
                        </li>
                    	<li class="clearfix">
                        	<label class="left otherDetailLabel">网络反响：</label>
                            <div class="left otherDetailDiv echoBox">
                            	<div class="netEcho clearfix">
                                	<div class="echoImg left">
                                    	<img src="images/echotemp_1.png" alt="" />
                                        <span>今日头条</span>
                                    </div>
                                    <dl class="echoList left">
                                    	<dt>文章URL：<a href="taskcenterdetail_1.html" class="articleLink">www.baidu.com</a></dt>
                                        <dd class="clearfix">
                                        	<label class="left echoLabel_1">点赞量：</label>
                                            <span class="left">56</span>
                                            <label class="left echoLabel_2">评论量：</label>
                                            <span class="left">56</span>
                                            <label class="left echoLabel_3">阅读量：</label>
                                            <span class="left">56</span>
                                        </dd>
                                    </dl>
                                </div>
                            
                            	<div class="netEcho clearfix">
                                	<div class="echoImg left">
                                    	<img src="images/echotemp_2.png" alt="" />
                                        <span>今日头条</span>
                                    </div>
                                    <dl class="echoList left">
                                    	<dt>文章URL：<a href="taskcenterdetail_1.html" class="articleLink">www.baidu.com</a></dt>
                                        <dd class="clearfix">
                                        	<label class="left echoLabel_1">点赞量：</label>
                                            <span class="left">56</span>
                                            <label class="left echoLabel_2">评论量：</label>
                                            <span class="left">56</span>
                                            <label class="left echoLabel_3">阅读量：</label>
                                            <span class="left">56</span>
                                        </dd>
                                    </dl>
                                </div>
                            
                            	<div class="netEcho clearfix">
                                	<div class="echoImg left">
                                    	<img src="images/echotemp_1.png" alt="" />
                                        <span>今日头条</span>
                                    </div>
                                    <dl class="echoList left">
                                    	<dt>文章URL：<a href="taskcenterdetail_1.html" class="articleLink">www.baidu.com</a></dt>
                                        <dd class="clearfix">
                                        	<label class="left echoLabel_1">点赞量：</label>
                                            <span class="left">56</span>
                                            <label class="left echoLabel_2">评论量：</label>
                                            <span class="left">56</span>
                                            <label class="left echoLabel_3">阅读量：</label>
                                            <!--<input type="text" class="left"/>-->
                                            <span class="left">56</span>
                                        </dd>
                                    </dl>
                                </div>
                                
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="backBtnBox"><a href="#" class="backBtn">返回</a></div>
        
    </div>
    
</div>
</body>
</html>
