<div class="createAlertNews clearfix">
		<div class="createContent">
			<ul class="createList">
                <input type="hidden" id="id"/>
				<li class="clearfix spec_1">
					<label class="left spectxt">任务类型：</label>
					<div id="cretataskInput_1" class="left"></div>
				</li>
				<li class="clearfix spec upBox">
					<label class="left spectxt"><em class="orange">*</em>任务名称： </label>
					<input type="text" class="left accountInput" placeholder="编辑时所填" value="${task.taskTitle}"/>
				</li>
				<li class="clearfix">
					<label class="left spectxt"><em class="orange">*</em>任务要求： </label>
					<script id="editor" type="text/plain" class="left ">
						${task.taskDesc}
					</script>
				</li>
				<li class="clearfix spec">
					<label class="left spectxt"><em class="orange">*</em>发文任务截止时间：</label>
					<input type="text" class="left specInput timeInput j_toTimeSS" value="${task.fatieEndTime?string('yyyy-MM-dd HH:mm:ss')}" />
					<label class="left spectxt"><em class="orange">*</em>阅评员任务截止时间：</label>
					<input type="text" class="left specInput timeInput j_toTimeSS" value="${task.pinglunEndTime?string('yyyy-MM-dd HH:mm:ss')}"/>
				</li>
				<li class="clearfix spec upBox">
					<label class="left spectxt" for="file"><em class="orange">*</em>任务附件： </label>
					<input type="text" class="left accountInput" placeholder="编辑时上传"/>
					<input type="file" name="file" id="file" value="" style="display: none;"/>
				</li>
			</ul>
		</div>
</div>

<script>
	var ue = UE.getEditor('editor');
</script>
<script type="text/javascript" charset="utf-8" src="${staticPath}/js/createtaskAlert.js"></script>
<script type="text/javascript" src="${staticPath}/js/date.js"></script>
