<div class="longBoxBtm marginL10">
	<div class="longBoxTop">
    	<div class="longBoxCenter">
			<ul class="searchCenter">
            	<li class="clearfix">
                	<label class="left" for="">账号：</label>
					<input type="text" class="userManageInput left" id="account"  name="account"/>
					<label class="left" for="">姓名：</label>
					<input type="text" class="userManageInput left" id="userName" name = "userName"/>
					<label class="left" for="">组织结构：</label>
					<div class="zzteam left" id="input_3"></div>
                </li>
                <li class="clearfix">
                	<label class="left" for="">角色：</label>
					<div class="js left" id="input_4"></div>
					<label class="left" for="">状态：</label>
					<div class="attitude left" id="input_5"></div>
					<a href="#" class="check right" id="query">查询</a>
                </li>
            </ul>	
			<form action="" style="display:none" id="form">
				<input type="text" name="account"  id="form_account" />
				<input type="text" name="userName"  id="form_userName" />
				<input type="text" name="deptID"  id="form_dept" />
				<input type="text" name="roleID" id="form_role" />
				<input type="text" name="status"  id="form_status" />
			</form>
		</div>
	</div>
</div>
<div class="btnBox clearfix">
	<a href="#" class="delete left">删除</a>
	<a href="#" class="addMore right">批量添加</a>
	<a href="/salesmanUsermanagement/showAccountAddPage" class="addUser right">添加用户</a>
</div>

<div class="taskgridBox">
	<div class="gridBox" id="gridBox"></div>
</div>
<!--批量添加弹窗-->
<div id="showaddmoreAlert"></div>
<script type="text/javascript" src="/js/admin_usermanage_1.js"></script>
