<div class="createAlertNews clearfix">
		<div class="createContent">
			<ul class="createList">
				<li class="clearfix spec_1">
					<label class="left txt">任务类型：</label>
					<div id="cretataskInput_1" class="left" id="taskType"></div>
				</li>
				<li class="clearfix spec upBox">
					<label class="left txt"><em class="orange">*</em>任务名称： </label>
					<input type="text" class="left accountInput" id="taskTitle"/>
				</li>
				<li class="clearfix spec upBox">
					<label class="left txt"><em class="orange">*</em>任务主贴URL： </label>
					<input type="text" class="left accountInput" />
				</li>
				<li class="clearfix">
					<label class="left txt"><em class="orange">*</em>任务要求： </label>
					<script id="editor" type="text/plain" class="left "></script>
				</li>
				<li class="clearfix spec">
					<label class="left txt"><em class="orange">*</em>任务截止时间：</label>
					<input type="text" class="left accountInput" id="fatieEndTime"/>
				</li>
			</ul>
		</div>
</div>

<script>
	var ue = UE.getEditor('editor');
</script>
<script type="text/javascript" charset="utf-8" src="${staticPath}/js/createtaskAlert.js"></script>
