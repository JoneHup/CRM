<div class="articleEditPop">
	<ul>
    	<li class="clearfix">
        	<label class="left"><span class="orange">*</span>素材标题：</label>
            <input type="text" class="left longInput" value="${sucaiku.title}" id="title"/>
        </li>
    	<li class="clearfix">
        	<label class="left">素材分类：</label>
            <div class="left smallComb marginR4" id="articleEditComb_1"></div>
            <div class="left smallComb" id="articleEditComb_2"></div>
        </li>
    	<li class="clearfix">
        	<label class="left"><span class="orange">*</span>素材内容:</label>
            <textarea class="left normalText">${sucaiku.content}</textarea>
        </li>
    </ul>
</div>
<script type="text/javascript" src="${basePath}/js/articleedit_pop.js"></script>