$(function(){
	
	//获取选中下拉框的值
	var roleID = "";
	var deptID = "";
	var regionID ="";
	
	//加载下拉框组件
	var configs = [{
		id : "accountInput_1",
		width : 204,
		url : Constants.basePath+"/salesmanUsermanagement/getAllRoleList",
		listeners:{
			render:function(){
				//console.log(this.id)
				$("#"+this.id).find(".r-combobox-slider").width($("#"+this.id).find(".r-combobox-slider").width()+2)
			}
		 },
		onSelect : function(combo,record){
			roleID = record["value"];
			//console.log(this)
			$("#"+this.id).find(".r-combobox-now").removeClass("r-combobox-now");
		}
	},{
		id : "accountInput_2",
		width : 204,
		url : Constants.basePath+"/salesmanUsermanagement/getAllDeptList",
		listeners:{
			render:function(){
				//console.log(this.id)
				$("#"+this.id).find(".r-combobox-slider").width($("#"+this.id).find(".r-combobox-slider").width()+2)
			}
		 },
		onSelect : function(combo,record){
			deptID = record["value"];
			//console.log(this)
			$("#"+this.id).find(".r-combobox-now").removeClass("r-combobox-now");
		}	
	},{
		id : "accountInput_3",
		width : 204,
		url : Constants.basePath+"/salesmanUsermanagement/getAllRegionList",
		listeners:{
			render:function(){
				//console.log(this.id)
				$("#"+this.id).find(".r-combobox-slider").width($("#"+this.id).find(".r-combobox-slider").width()+2)
			}
		 },
		onSelect : function(combo,record){
			regionID = record["value"];
			//console.log(this)
			$("#"+this.id).find(".r-combobox-now").removeClass("r-combobox-now");
		}	
	}
	];
	combobox(configs);
	
	$(".accountpublish").click(function(){
		
		//定义JSON对象存储添加的用户信息
		var jsonObject = {};
		
		//1、对账号进行校验
		var userAccount = $("#user_account").val();
		//不能为空
		if(getStrLength($.trim(userAccount))==0){
			jAlert("账号不能为空");
			return false;
		}
		//必须为小写字母
		if(! isLowString($.trim(userAccount))){
			jAlert("账号必须为小写字母");
			return false;
		}
		
		//账号长度4~9个字符
		if(getStrLength($.trim(userAccount))<4 ){
			jAlert("账号至少4个字符");
			return false;
		}
		if(getStrLength($.trim(userAccount)) > 20 ){
			jAlert("账号至多20个字符");
			return false;
		}
		
		
		if(sendAjax("account",$.trim(userAccount)) > 0){
			jAlert("账号已经存在，请重新输入");
			return false;
		}
	
		jsonObject["account"] = $.trim(userAccount);
		
		//2、对密码进行验证，纯数字（6~9）
		var userPassword = $("#user_password").val();
		
		if(getStrLength($.trim(userPassword))==0){
			jAlert("密码不能为空");
			return false;
		}
		if(! checkNum(userPassword)){
			jAlert("密码必须为6~9位纯数字");
			return false;
		}
		
		jsonObject["password"] = $.trim(userPassword);
		
		//3、姓名校验
		var userName = $("#user_name").val();
		
		if(getStrLength($.trim(userName))==0){
			jAlert("姓名不能为空");
			return false;
		}
		
		if(! isChinese($.trim(userName))){
			jAlert("姓名必须为汉字");
			return false;
		}
		
		if(getStrLength($.trim(userName)) >20 ){
			jAlert("姓名至多10个汉字");
			return false;
		}
		
		jsonObject["userName"] = $.trim(userName);
		
		//获得性别
		var gender = $("input[name = 'performance']:checked").val();
		
		jsonObject["gender"] = gender
		
		var job = $("#user_job").val();
		if(getStrLength($.trim(job)) >0){
			jsonObject["job"] = $.trim(job);
		}
		
		
		var identityCode = $("#user_identityCode").val();
		//对用户输入的身份证号码进行校验
		if(getStrLength($.trim(identityCode)) > 0){
			if(! isCardNo(identityCode)){
				jAlert("请输入正确格式的身份证号码");
				return false;
			}else{
				jsonObject["identityCode"] = identityCode;
			}
		}
		
		var telephone = $("#user_telephone").val();
		//对用户输入的手机号码进行校验
		if(getStrLength($.trim(telephone)) > 0){
			if(! checkMobile(telephone)){
				jAlert("请输入正确格式的手机号");
				return false;
			}
			jsonObject["telephone"] = telephone;
		}else{
			jAlert("手机号码不能为空");
			return false;
		}
		
		var email = $("#user_email").val();
		//对电子邮箱进行校验
		if(getStrLength($.trim(email)) > 0){
			if(! checkEmail(email)){
				jAlert("请输入正确格式的邮箱地址");
				return false;
			}
			jsonObject["email"] = email;
		}
		
		var mobileN = $("#user_mobileN").val();
		//对座机号进行校验
		if(getStrLength($.trim(mobileN)) > 0){
			if(! checkCompanyPhone(mobileN)){
				jAlert("请输入正确格式的座机号码")
			}
		}
		
		var extenNumber = $("#user_extenNumber").val();
		//对分机号进行校验
		if(getStrLength($.trim(extenNumber)) > 0){
			//对纯数字进行校验
			if(! checkOnlyNum(extenNumber)){
				jAlert("分机号为纯数字");
				return false;
			}
			jsonObject["extenNumber"] = extenNumber;
		}
		
		var userCode = $("#user_userCode").val();
		//对用户编号进行校验
		if(getStrLength($.trim(userCode)) > 0){
			if(sendAjax("userCode",$.trim(userCode)) > 0){
				jAlert("用户编号已经存在，请重新输入");
				return false;
			}
			jsonObject["userCode"] = userCode;
		}
		
		//获取用户选择的角色
		jsonObject["roleID"] = roleID[0]
		
		//获取用户选择所在地
		
		jsonObject["regionID"] = regionID[0];
		
		//获得用户所在组织机构
		jsonObject["deptID"] = deptID[0];
		
		sendAddUser(jsonObject);
		
	});
})
	

	// 向后台发送请求增加用户
function sendAddUser(jsonObject) {
	$.ajax({
		url:Constants.basePath +"/salesmanUsermanagement/addUser",
		type:"POST",
		data:JSON.stringify(jsonObject),
		dataType:"JSON",
		contentType:"application/json",
		success:function(data){
			if(data.status==200){
				jConfirm("添加用户成功",function(r){
					if(r){
						window.location.href = Constants.basePath+"/salesmanUsermanagement/showSalesmanPage"
					}
				})
			}else{
				jAlert("Status500:添加用户操作失败");
			}
		},
		error:function(){
			jAlert("添加用户操作失败");
		}
	});
}

	// 同步校验name的值是否唯一
function sendAjax(name, value) {
	var count = 0;
	$.ajax({
		async : false,
		type : "POST",
		url : Constants.basePath + "/salesmanUsermanagement/checkUnique",
		data : {
			"name" : name,
			"value" : value
		},
		dataType : "json",
		success : function(data) {
			if (data.count > 0) {
				count = 1;
			}
		},
		error : function() {
			jAlert("Request checkUnique Error");
		}
	});
	return count;
}
