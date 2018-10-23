/**
 * 身份证号码验证
 * @param card
 * @returns {Boolean}
 */
function isCardNo(card)  
{  
   // 身份证号码为18位，前17位为数字，最后一位是校验位，可能为数字或字符X  
   var reg = /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/;  
   return reg.test(card);
} 
/**
 * icp校验
 * @param ICP
 * @returns
 */
function checkICP(ICP){
	// 京ICP+6位数字
	var reg = /^京ICP证+[0-9]{6}$/;
	return reg.test(ICP);
}

/**
 * 域名验证
 * @param dmn
 * @returns {Boolean}
 */
function checkDomainName(dmn){
	var re = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
	return re.test(dmn);
}


/**
 * ip校验
 * @param ip
 * @returns
 */
function isValidIP(ip) {
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    return reg.test(ip);
} 



/**
 * 时间格式验证
 * @param df
 * @returns {Boolean}
 */
function checkDateFormat(df){
	var re = /^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/;
	return re.test(df);
}

/**
 * 纯数字验证6~9位
 * @param n
 * @returns {Boolean}
 */
function checkNum(n){
	var re = /^[0-9]{6,9}$/;
	return re.test(n);
}

/**
 * 纯数字验证
 * @param n
 * @returns {Boolean}
 */
function checkOnlyNum(n){
	var re = /^[0-9]*$/;
	return re.test(n);
}

/**
 * 电子邮箱验证
 * @param e
 * @returns {Boolean}
 */
function checkEmail(e){
	var re = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+([a-zA-Z0-9_-])+/;
	return re.test(e);
}

/**
 * 判断是否含有特殊字符（即非字母、数字、汉字、下横线、空格）
 * @param word
 * @returns {Boolean}
 */
function checkIllegalWord(word){  
	var re = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5\w-\s]/;  
	return re.test(word);
}

/**
 * 手机号验证
 * @param m
 * @returns {Boolean}
 */
function checkMobile(m){
	var re = /(^[1][3-8][0-9]\d{4}\d{4}$)|(^15[0-35-9]\d{4}\d{4}$)|(^[1][8][0-9]\d{4}\d{4}$)/;
	return re.test(m);
}

/**
 * 公司电话验证（即数字、中划线）
 * @param cp
 * @returns {Boolean}
 */
function checkCompanyPhone(cp){
	var re = /^\d{1,}(-)?\d{1,}(-)?\d{1,}$/;
	return re.test(cp);
}

/**
 * 公司电话验证（格式：xxx-xxxxxxxx-分机号/xxxx-xxxxxxx-分机号）
 * @param cp
 * @returns {Boolean}
 */
function checkCompanyPhone2(cp2){
	var re = /^(\d{3,4}-)?\d{7,8}(-\d{1,4})?$/;
	return re.test(cp2);
}

/**
 * 验证val是否为小写字母
 */
function isLowString(val){
	var re = /^[a-z]+$/;
	return re.test(val);
}

/**
 * 验证val是否为纯汉字（不包括数字和字母、特殊字符）
 */
function isChinese(val){
	var re = /^[\u4e00-\u9fa5]+$/;
	return re.test(val);
}

/**
 * 挑选出选中的复选框
 * @param checkName
 * @returns domains
 */

function judgeIsChecked(checkName){
	var length = $("[name='"+checkName+"']").length;
	var ids = "";
	for(var i=0;i<length;i++){
		var checkOne = $("[name='"+checkName+"']").eq(i);
		if(checkOne.attr("checked") != undefined){
			if(ids ==""){
				ids = checkOne.attr("id");
			}else{
				ids = ids+","+checkOne.attr("id");
			}
		}
	}
	return ids;
}

/**
 * 查询字符串的长度，中文算两个字符
 * @param str
 * @returns {Number}
 */
function getStrLength(str){
	var l = str.length; 
	var blen = 0; 
	for(var i=0; i<l; i++) { 
		if ((str.charCodeAt(i) & 0xff00) != 0) { 
			blen ++; 
		} 
		blen ++;
	}
	return blen;
}

(function($){
    $.fn.serializeJson=function(){
        var serializeObj={};
        var array=this.serializeArray();
        var str=this.serialize();
        $(array).each(function(){
            if(serializeObj[this.name]){
                if($.isArray(serializeObj[this.name])){
                    serializeObj[this.name].push(this.value);
                }else{
                    serializeObj[this.name]=[serializeObj[this.name],this.value];
                }
            }else{
                serializeObj[this.name]=this.value;
            }
        });
        return serializeObj;
    };
})(jQuery);

