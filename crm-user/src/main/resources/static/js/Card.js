/**
 *	@class Run.Widget.Card
 *	@extends Run.Widget
 *	@xtype cards
 *
 *	锐安前端组件库 卡片组件
 *
 *	@author mahonglu
 *	@new
 */


(function(){
	
    Run.DefaultCardsSuperClass = "Cards";
    
	Run.define("Cards",(function(){

		return {
			/**
			 * 	该类继承的父类名称，类定义时使用
			 *
			 *	@property {String} extend
			 *	@readonly
			 */
			extend : Run.DefaultWidgetSuperClass,
			
			/**
			 * 	配置传递后台的初始参数集合
			 *
			 *	@cfg {Array} query
			 */
			query : {},
			
			/**
			 * 	配置传递后台的参数集合
			 *
			 *	@cfg {Array} param
			 */
			param : {},
			
			/**
			 * 	配置是否需要复选框
			 *
			 *	@cfg {Boolean} isMultiple
			 */
			isMultiple : false,
			
			/**
			 * 	配置是否需要全选复选框
			 *
			 *	@cfg {String} checkAllId
			 */
			checkAllId : '',
			
			/**
			 * 	配置复选框按钮的class
			 *
			 *	@cfg {String} checkOneCls
			 */
			checkOneCls : '',
			
			/**
			 *	数据加载完执行的函数
			 *
			 *	@method dataSuccess
			 *	
			 */
			dataSuccess : null,
			/**
			 *	配置异步请求超时时间
			 *
			 *	@cfg {Number} timeout
			 *	
			 */
			timeout : null,
			/**
			 *	点击分页按钮在加载数据之前执行的方法，常用与记录分页中其他页内选中项的记录
			 *
			 *	@method beforePage
			 *	
			 */
			beforePage : Run.emptyFn,
			
			/**
			 *	点击分页按钮在加载数据之后执行的方法，常用与记录分页中其他页内选中项的记录
			 *
			 *	@method afterPage
			 *	
			 */
			afterPage : Run.emptyFn,
			
			/**
			 *	点击选中复选框事件
			 *
			 *	@method onCheck
			 *	
			 */
			/**
			 *	点击选中复选框时间
			 *
			 *	@method onCheck
			 *	
			 */
			onCheck : Run.emptyFn,
			
			/**
			 *	点击取消选中复选框时间
			 *
			 *	@method onUnCheck
			 *	
			 */
			onUnCheck : Run.emptyFn,
			
			/**
			 *	点击全选复选框事件
			 *
			 *	@method onCheckAll
			 *	
			 */
			onCheckAll : Run.emptyFn,
			
			/**
			 *	点击取消选中全选复选框事件
			 *
			 *	@method onUnCheckAll
			 *	
			 */
			onUnCheckAll : Run.emptyFn,
			
			/**
			 *	设置表格中某行选中
			 *
			 *	@method setCheck
			 * @param {Array} 需要设置选中行的数据id
			 *	
			 */
			setCheck : function(idArr){
				if(!Run.isArray(idArr)){
					alert("您输入的value格式不正确，请输入数组类型");
				}else{
					var setTot = 0,
						$chk = null;
					$('#'+this.checkAllId).prop('checked',false);	
					for(var i = 0 ; i < idArr.length ; i++){
						$chk = $("#" + this.id).find("." + this.checkOneCls + ":[value='"+idArr[i]+"']");
						if ($chk.length == 1) {
							setTot++;
							$chk.prop("checked",true);
						}
						if (setTot == this.data.data.length) {
							$('#'+this.checkAllId).prop('checked',true);
						}
					}
				}
			},
			
			/**
			 * 	json数据的链接
			 *
			 *	@cfg {String} url
			 */
			url : null,
			
			/**
			 * 	卡片数据
			 *
			 *	@cfg {obj} data
			 */
			data : null,
			
			/**
			 * 	是否需要分页
			 *
			 *	@cfg {obj} usepage
			 */
			usepage : null,
			
			/**
			 * 	卡片数据总页数
			 *
			 *	@property totalPage
			 */
			totalPage : null,
			
			/**
			 *	卡片数据总条数
			 *
			 *	@property total
			 *	
			 */
			total : 0,

			/**
			 *	当个单元格内容检索为undefined时使用临时替代字符
			 *
			 *	@property cellEmpty
			 *	
			 */
			cellEmpty : "-",
			
			/**
			 *	配置异步请求超时时间
			 *
			 *	@cfg timeout
			 *	
			 */
			timeout : null,
			
			/**
			 * 	配置每页显示多少条记录
			 *
			 *	@cfg {Number} pageSize
			 */
			pageSize : 10,
			
			/**
			 * 	配置表格当前显示页号
			 *
			 *	@cfg {Number} currentPage
			 */
			currentPage : 1,
			/**
			 * 	回调函数
			 *
			 *	@cfg {obj} callBacks
			 */
			callBacks : null,
			
			/**
			*	获取选中项，返回选中行的数据
			*
			*	@method getChecked
			* 
			*/
			getChecked : function(){
				var that = this;
				var chked = [];
				var $chks = $('#'+this.id).find('input[type=checkbox]');
				$chks.each(function (i, ochk) {
					if ($(ochk).prop('checked')) {
						chked.push(that.data.data[i]);
					}
				});
				return chked;
			},
			
			/**
			*	表格分页
			*
			*	@method 获取当前页选中的id
			* 
			*/
			getChkVal : function(){
				var arrChkVal = [];
				$('#'+this.id).find('input[type=checkbox]:checked').each(function (i,el) {
					arrChkVal.push($(el).val());
				});
				return arrChkVal;
			},
			
			/**
			 *	获取所有页选中的id
			 *
			 *	@method getChks
			 * 	
			 * 
			 */
			getChkVals : function(){
				return this.chks;
			},

			/**
			 *	获取数据总条数
			 *
			 *	@method getTotal
			 * 	
			 * 
			 */
			getTotal : function(){
				return this.total;
			},
			
			/**
			 *	获取数据
			 *
			 *	@method getData
			 * 	
			 * 
			 */
			getData : function(){
				return this.data;
			},
			
			/**
			 * 	创建私有方法 表格复选框全选功能
			 *
			 *	@method _checkAll
			 *  @private
			 * 
			 */
			_checkFnc : function(){
				var that = this;
				
				$("#" + that.checkAllId).off("click").on("click",function(e){
					if ($(this).prop("checked")) {
						$("#" + that.id).find("." + that.checkOneCls).prop("checked",true);
						//设置复选框选中项
						$.each(that.data.data, function(i,tmp) {
							that.chks.push(tmp.id);
						});
						//执行全选复选框点击选中事件
						that.onCheckAll(that,that.data.data);
					} else{
						$("#" + that.id).find("." + that.checkOneCls).prop("checked",false);
						//设置复选框选中项
						that.chks = [];
						//执行全选复选框点击取消选中事件
						that.onUnCheckAll(that,that.data.data);
					}
				
				});
				
				if ($.trim(that.checkOneCls) !== '') {
					$("#" + that.id).off("click", " ." + that.checkOneCls).on("click", " ." + that.checkOneCls, function(e){
						var $check_one = $("#" + that.id + " ." + that.checkOneCls),
						    $check_all = $("#" + that.checkAllId),
						    $check_one_cur = $(this),
							trIndex = $check_one.index($check_one_cur),
							thisRowData = that.data.data[trIndex];
						if ($check_one_cur.prop('checked')) {//选中
							if ($check_all.length==1) {
								if ($check_one.length==$check_one.filter(':checked').length) {//设置全选选中
									$check_all.prop('checked',true);
								}
							}
							//设置复选框选中项
							that.chks.push(thisRowData.id);
							that.onCheck(that,thisRowData);
						} else{//取消选中
							if ($check_all.length==1&&$check_all.prop('checked')) {
								$check_all.prop('checked',false);//设置全选取消选中
							}
							//设置复选框选中项
							that.chks.splice($.inArray(thisRowData.id, that.chks),1);
							that.onUnCheck(that,thisRowData);
						}    
					});
				}
				
			},
				
			
			/**
			*	表格分页 第一种表格形式，含有每页显示多少条、上页、下页、首页、末页和跳转等功能
			*
			*	@method pageFnc
			* 
			*/
			pageFnc : function(){
				var that = this,
					pageHtml = '../index.html',
					cssPrefix = 'r-page-',
					$content = $("#"+this.id).children('.r-page-content');
				this.totalPage = Math.ceil(this.total/this.pageSize);
				pageHtml = '<div class="'+cssPrefix+'container '+cssPrefix+'align-'+this.usepage.align+'">'
									+'<div class="'+cssPrefix+'pagebox">';
					
					if(this.usepage.pageSizeAble){
						pageHtml += '<select class="'+cssPrefix+'pageSize">'
										+'<option value="'+cssPrefix+'slt-10" '+(10==this.pageSize?'selected="selected"':'')+'>10</option>'
										+'<option value="'+cssPrefix+'slt-20" '+(20==this.pageSize?'selected="selected"':'')+'>20</option>'
										+'<option value="'+cssPrefix+'slt-30" '+(30==this.pageSize?'selected="selected"':'')+'>30</option>'
									+'</select>';
					};

					pageHtml+='<a href="#" class="'+cssPrefix+'fisrtPage">首页</a>'
									+'<a href="#" class="'+cssPrefix+'prePage">上一页</a>'
									+'<a href="#" class="'+cssPrefix+'nextPage">下一页</a>'
									+'<a href="#" class="'+cssPrefix+'lastPage">末页</a>';
					if(that.usepage.pageDescription){
						pageHtml += '<div class="'+cssPrefix+'pageDescription"><span>第</span>'
								+'<span class="'+cssPrefix+'pageNum">'+this.currentPage+'</span>'
								+'<span class="'+cssPrefix+'indexPage">/'+this.totalPage+'页</span></div>';
					}	
					if(this.usepage.pageGoAble){
						pageHtml+='<span>跳转至第</span>'
								+'<input type="text" class="'+cssPrefix+'pageNum" value="'+this.currentPage+'" />'
								+'<span>页</span>'
								+'<a href="#" class="'+cssPrefix+'pageGo">跳转</a>';
					}
					
					pageHtml+='</div>'
							+'</div>';												
				
				if(this.usepage.position == "bottom"){
					$content.after(pageHtml);
				}else if(this.usepage.position == "top"){
					$content.before(pageHtml);
				}else{
					throw new ReferenceError("config "+this.usepage.vertical+" is undefined;");
				};
				
				this._addUnable();
				
				//消息中心 关键词查询 点击事件触发方法 ----tongrongbing edit
				$("#searchBox").click(function(){
					that._deleteLoading();
					that.initialize();
				});
								
				//分页  每页显示条数   方法
				$("#" + this.id + " ."+cssPrefix+"pageSize").change(function(){
					if(that.total !== 0){
						that.currentPage=1;
						
						var selectVal = $(this).val().split("-");
						
						that.pageSize = parseInt(selectVal[selectVal.length-1]);
						
						that.totalPage = Math.ceil(that.total/that.pageSize);
	
						that._reloadData({"pageSize":that.pageSize});
						
						that._addUnable();
						$("#" + that.id + " input." + cssPrefix+"pageNum").val(that.currentPage);
						$("#" + that.id + " span." + cssPrefix+"pageNum").html(that.currentPage);
						$("#" + that.id + " ." + cssPrefix+"indexPage").html("/" + that.totalPage+"页");
						
					}
				});
				
				//分页  首页  点击效果
				$("#" + this.id + " ."+cssPrefix+"fisrtPage").click(function(){					
					if (that.total !== 0) {
						if(that.currentPage == 1){
							//alert("已经是第一页了");
						}else{
							that.currentPage =1;
							that._addUnable();
							that._reloadData();
							$("#" + that.id + " input." + cssPrefix+"pageNum").val(that.currentPage);
							$("#" + that.id + " span." + cssPrefix+"pageNum").html(that.currentPage);
						}
					}
					return false;
				});
				
				//分页  末页   点击效果
				$("#" + this.id + " ."+cssPrefix+"lastPage").click(function(){
					if(that.total !== 0){
						if(that.currentPage == that.totalPage){
							//alert("已经是最后一页了");
						}else{
							that.currentPage = that.totalPage;
							that._addUnable();
							that._reloadData();
							$("#" + that.id + " input." + cssPrefix+"pageNum").val(that.currentPage);
							$("#" + that.id + " span." + cssPrefix+"pageNum").html(that.currentPage);
						}
						return false;
					}
				});
				
				//分页  上一页   点击效果
				$("#" + this.id + " ."+cssPrefix+"prePage").click(function(){
					if(that.total !== 0){
						if(that.currentPage == 1){
							//alert("已经是第一页了");
						}else{
							that.currentPage = that.currentPage-1;
							that._addUnable();
							that._reloadData();
							$("#" + that.id + " input." + cssPrefix+"pageNum").val(that.currentPage);
							$("#" + that.id + " span." + cssPrefix+"pageNum").html(that.currentPage);
						}
					}
					return false;
				});
				
				//分页  下一页   点击效果
				$("#" + this.id + " ."+cssPrefix+"nextPage").click(function(){
					if(that.total !== 0){
						if(that.currentPage == that.totalPage){
							//alert("已经是最后一页了");
						}else{
							that.currentPage = that.currentPage+1;
							that._addUnable();
							that._reloadData();
							$("#" + that.id + " input." + cssPrefix+"pageNum").val(that.currentPage);
							$("#" + that.id + " span." + cssPrefix+"pageNum").html(that.currentPage);
						}
						return false;
					}
				});
				
				//分页  跳转   点击效果
				$("#" + this.id + " ."+cssPrefix+"pageGo").click(function(){
					var pageNumVal = $("#" + that.id + " input."+cssPrefix+"pageNum").val();
					if(isNaN(pageNumVal)){
						alert("请输入数字");
					}else if(pageNumVal <= 0){
						alert("请输入正整数");
					}else if(pageNumVal > that.totalPage){
						alert("输入错误");
					}else{
						that.currentPage = parseInt(pageNumVal);
						that._addUnable();
						that._reloadData();
						$("#" + that.id + " input." + cssPrefix+"pageNum").val(that.currentPage);
						$("#" + that.id + " span." + cssPrefix+"pageNum").html(that.currentPage);
					}
					return false;
				});
				
			},
			/**
			*	表格分页 第二种表格形式，含有上页、下页和具体数字页码以及跳转功能
			*
			*	@method pageWithNumFnc
			* 
			*/
			pageWithNumFnc : function(){
				var that = this,
					pageHtml = '',
					cssPrefix = 'r-page-',
					$content = $("#"+this.id).children('.r-page-content');
				this.totalPage = Math.ceil(this.total/this.pageSize);
				pageHtml = '<div class="' + cssPrefix + 'container ' + cssPrefix + 'align-'+this.usepage.align+'">'
								+'<div class="' + cssPrefix + 'pagebox">';
								
									if(this.usepage.pageSizeAble){
										pageHtml += '<select class="'+cssPrefix+'pageSize">'
														+'<option value="'+cssPrefix+'slt-10" '+(10==this.pageSize?'selected="selected"':'')+'>10</option>'
														+'<option value="'+cssPrefix+'slt-20" '+(20==this.pageSize?'selected="selected"':'')+'>20</option>'
														+'<option value="'+cssPrefix+'slt-30" '+(30==this.pageSize?'selected="selected"':'')+'>30</option>'
													+'</select>';
									};
									pageHtml+='<a href="#" class="' + cssPrefix + 'prePage">上一页</a><div class="' + cssPrefix + 'numbox">';
					
					pageHtml += '</div><a href="#" class="' + cssPrefix + 'nextPage">下一页</a>';
					if(that.usepage.pageDescription){
						pageHtml += '<div class="'+cssPrefix+'pageDescription"><span>第</span>'
								+'<span class="'+cssPrefix+'pageNum">'+this.currentPage+'</span>'
								+'<span class="'+cssPrefix+'indexPage">/'+this.totalPage+'页</span></div>';
					}
					if(that.usepage.pageGoAble){
						pageHtml += '<span>跳转至第</span>'
								+'<input type="text" class="'+cssPrefix+'pageNum" value="'+this.currentPage+'" />'
								+'<span>页</span>'
								+'<a href="#" class="'+cssPrefix+'pageGo">跳转</a>';
					}
					
					pageHtml += '</div>'
							+'</div>';
							
				if(this.usepage.position == "bottom"){
					$content.after(pageHtml);
				}else if(this.usepage.position == "top"){
					$content.before(pageHtml);
				}else{
					throw new ReferenceError("config "+this.usepage.vertical+" is undefined;");
				};
				
				this._createPageNum();
				
				this._addUnable();
				
				//分页  每页显示条数   方法
				$("#" + this.id + " ."+cssPrefix+"pageSize").change(function(){
					if(that.total !== 0){
						that.currentPage=1;
						
						var selectVal = $(this).val().split("-");
						
						that.pageSize = parseInt(selectVal[selectVal.length-1]);
						
						that.totalPage = Math.ceil(that.total/that.pageSize);
	
						that._reloadData({"pageSize":that.pageSize});
						
						that._refreshPagingToolbar(that.usepage.type);
						$("#" + that.id + " input." + cssPrefix+"pageNum").val(that.currentPage);
						$("#" + that.id + " span." + cssPrefix+"pageNum").html(that.currentPage);
						$("#" + that.id + " ." + cssPrefix+"indexPage").html("/" + that.totalPage+"页");
					}
				});
				
				//分页  首页  点击效果
				$("#" + this.id + " ."+cssPrefix+"firstPage").die("click").live("click",function(){
					if(that.currentPage == 1){
						//alert("已经是第一页了");
					}else{
						that.currentPage = 1;
						that._createPageNum();
						that._reloadData();
						that._addUnable();
						$("#" + that.id + " input." + cssPrefix+"pageNum").val(that.currentPage);
						$("#" + that.id + " span." + cssPrefix+"pageNum").html(that.currentPage);
					}
					return false;
				});
				
				//分页  末页   点击效果
				$("#" + this.id + " ."+cssPrefix+"lastPage").die("click").live("click",function(){
					if(that.currentPage == that.totalPage){
						//alert("已经是最后一页了");
					}else{
						that.currentPage = that.totalPage;
						that._createPageNum();
						that._reloadData();
						that._addUnable();
						$("#" + that.id + " input." + cssPrefix+"pageNum").val(that.currentPage);
						$("#" + that.id + " span." + cssPrefix+"pageNum").html(that.currentPage);
					}
					return false;
				});
				
				//分页  上一页   点击效果
				$("#" + this.id + " ."+cssPrefix+"prePage").die("click").live("click",function(){
					
					if(that.currentPage == 1){
						//alert("已经是第一页了");
					}else{
						that.currentPage = that.currentPage-1;
						that._createPageNum();
						that._reloadData();
						that._addUnable();
						$("#" + that.id + " input." + cssPrefix+"pageNum").val(that.currentPage);
						$("#" + that.id + " span." + cssPrefix+"pageNum").html(that.currentPage);
					}
					return false;
				});
				
				//分页  下一页   点击效果
				$("#" + this.id + " ."+cssPrefix+"nextPage").die("click").live("click",function(){
					if(that.total !== 0){
						if(that.currentPage == that.totalPage){
							//alert("已经是最后一页了");
						}else{
							that.currentPage = that.currentPage+1;
							that._createPageNum();
							that._reloadData();
							that._addUnable();
							$("#" + that.id + " input." + cssPrefix+"pageNum").val(that.currentPage);
							$("#" + that.id + " span." + cssPrefix+"pageNum").html(that.currentPage);
						}
						return false;
					}
				});
				
				//分页 数字  点击效果
				$("#" + this.id + " ."+cssPrefix+"num:not('."+cssPrefix+"firstPage,."+cssPrefix+"lastPage')").die("click").live("click",function(){
					if($(this).hasClass(cssPrefix+"cur")){
						return false;
					}
					that.currentPage = parseInt($(this).html());
					that._createPageNum();
					that._reloadData();
					that._addUnable();
					$("#" + that.id + " input." + cssPrefix+"pageNum").val(that.currentPage);
					$("#" + that.id + " span." + cssPrefix+"pageNum").html(that.currentPage);
					return false;
				});
				
				//分页  跳转   点击效果
				$("#" + this.id + " ."+cssPrefix+"pageGo").click(function(){
					var pageNumVal = $("#" + that.id + " input."+cssPrefix+"pageNum").val();
					if(isNaN(pageNumVal)){
						alert("请输入数字");
					}else if(pageNumVal <= 0){
						alert("请输入正整数");
					}else if(pageNumVal > that.totalPage){
						alert("输入错误");
					}else{
						that.currentPage = parseInt(pageNumVal);
						that._createPageNum();
						that._reloadData();
						that._addUnable();
						$("#" + that.id + " input." + cssPrefix+"pageNum").val(that.currentPage);
						$("#" + that.id + " span." + cssPrefix+"pageNum").html(that.currentPage);
					}
					return false;
				});
				
			},
			/**
			*	表格重新加载
			*
			*	@method reloadCards
			* 
			*/
			reloadCards : function(url,query){
				if(arguments.length == 1){
					if(typeof arguments[0] == "string"){
						this.url = arguments[0];
					}else if(typeof arguments[0] == "object"){
						this.param = arguments[0];
					};
				}else if(arguments.length > 1){
					if(typeof arguments[0] == "string"){
						this.url = arguments[0];
					}else if(typeof arguments[0] == "object"){
						this.param = arguments[0];
					};
					if(typeof arguments[1] == "string"){
						this.url = arguments[1];
					}else if(typeof arguments[1] == "object"){
						this.param = arguments[1];
					};
				}
				
				this.param["pageSize"] = this.pageSize;
				
				//判断reloadGrid  表格时，是否传入了currentPage，如果传入了，reloadGrid至重新加载前的页数，否则重新加载至第一页
				if(this.param["currentPage"]){
					this.currentPage = this.param["currentPage"];
					
				}else{
					this.param["currentPage"] = 1;
					this.currentPage = 1;
				}
				
				//加载、重新加载表格时生成loading图片和遮罩层
				this._createLoading();
				
				 Run.ajax({
                    //type:'post',
                    //cache:false,
                    //dataType:"json",
                    url:this.url,
                    data:this.param,
                    timeout : this.timeout,
					success:function(data){
						
						this.data = data;
						this.reloadOperation()
						
						//加载、重新加载表格成功时删除loading图片和遮罩层
						this._deleteLoading();
						
						//数据加载完成后执行的函数
						this.dataSuccess && this.dataSuccess(data);
						
						
					}.bind(this),
					error:function(xhr, textStatus, errorThrown){
						this._deleteLoading();
						
						if(textStatus == "timeout"){
							this._timeoutFnc();
							if(this.usepage){
								this._refreshPagingToolbar(this.usepage.type);
							}
						}
					}.bind(this)
				});
			},
			/**
			 *	获取数据后执行的操作集合
			 *
			 *	@method operation
			 * 
			 */
			operation : function(){
				var that = this;
				
				this.data = this.data;
				this.total = that.data.total;
				$('#'+this.id).empty().append('<div class="r-page-content clearfix"></div>');
				if (this.total == 0) {//无数据
					this.currentPage = 0;
					this._createNoData();
				} else {//有数据
					this._createDom();
				}
				
				if (this.usepage !== null) {
					if (this.usepage.type == 1) {
						this.pageFnc();
					} else{
						!this.usepage.type&&(this.usepage.type=2);//设置分页默认样式
						!this.usepage.position&&(this.usepage.position="bottom");//设置分页默认样式
						!this.usepage.align&&(this.usepage.align="center");//设置分页默认样式
						!this.usepage.pageGoAble&&(this.usepage.pageGoAble=false);//设置分页默认样式
						!this.usepage.pageSizeAble&&(this.usepage.pageGoAble=false);//设置分页默认样式
						this.pageWithNumFnc();
					}
				}
				
				if(this.isMultiple){
					this._checkFnc();
				};
				
				this._bindCallBacks();
				
				//渲染完成回调函数
                this.fireEvent("render");
                
			},
			
			/**
			 * 组件的构造函数，实例化时自动调用
			 *
			 * @constructors
			 *
			 * @param {Object} config 类的实例化配置属性
			 */
			constructors : function(config){
                this.initComponent(config);
                this.addEvents("reload");
                this.initialize(config);
			},
			
			defineInstanceProperties : function(){
				/**
				 * 	存储所有页复选框选中的值（id）
				 *
				 *	@property {Object} chks
				 */
				this.chks = [];
            },
			
			/**
			 *	组件的初始化渲染方法
			 *
			 *	@method initialize
			 *	@param {Object} config 类的实例化配置属性
			 */
            initialize : function(config){
            	//---tongrongbing edit
            	var keyword = $(".searchBox input").val(); //jquery 获取输入框关键词值
            	this.currentPage = 1;  //模糊查询的时候初始化当前页数。
            	
            	this.param["keyword"] = keyword;
				this.param = this.query;
				this.param["pageSize"] = this.pageSize;
				this.param["currentPage"] = 1;
				
				//Run.merge(this, arguments);
				//判断传入的数据，根据不同的条件，执行不同的操作
				if(this.data != null && keyword == null ){
					this.operation();
				}else if(this.url != null){
					//加载、重新加载表格时生成loading图片和遮罩层
					this._createLoading("isInitialize");
				    Run.ajax({
	                    //type:'post',
	                    //cache:false,
	                    //dataType:"json",
	                    url:this.url,
	                    data:this.param,
	                    timeout : this.timeout,
						success:function(data){
							
							this.data = data;
							this.operation();
							//加载、重新加载表格成功时删除loading图片和遮罩层
							this._deleteLoading();
							
							//数据加载完成后执行的函数
							this.dataSuccess && this.dataSuccess(data);
							
						}.bind(this),
						error:function(xhr, textStatus, errorThrown){
							this._deleteLoading();
						
							if(textStatus == "timeout"){

								this._timeoutFnc();
								if(this.usepage){
									this._refreshPagingToolbar(this.usepage.type);
								}
							}
						}.bind(this)
					});
				};

			},
			
			privates : {
				/**
				 * 	创建私有方法 创建类型1卡片
				 *
				 *	@method _createCard
				 *  @private
				 * 
				 */
				_createCard : function (data) {
					var html = '';
				    return _html;
				},
				/**
				 * 	创建私有方法 创建表格组件DOM结构
				 *
				 *	@method _createDom
				 *  @private
				 * 
				 */
				_createDom : function(){
					var data = this.data;
					var htmlTpl = '';
					
					var that=this;
					$.each(data.data, function(i,tmp) {
						htmlTpl +=that._createCard (tmp, i);
					});
					var $container = $('#'+that.id).children('.r-page-content');
					$container.empty();
					$container.append(htmlTpl);
					
				},
				/**
                 *	绑定回调函数
                 *
                 *	@method _bindCallBacks
                 * 	@private
                 *
                 */
				_bindCallBacks:function(){
					var that = this;
				},
				/**
                 *	更新页码区域，当分页的type为2的时候执行
                 *
                 *	@method _createPageNum
                 * 	@private
                 *
                 */
				_createPageNum : function(){
					var cssPrefix='r-page-';
                    $("#" + this.id + " ."+cssPrefix+"numbox").html("");
                    var pageNumDom = "";
                    if(this.totalPage <= 5){
                        for(var i = 1 ; i <= this.totalPage ; i++){
                            if(i == this.currentPage){
                                pageNumDom += '<a href="#" class="' + cssPrefix + 'cur '+cssPrefix+'num">'+(i)+'</a>';
                            }else{
                                pageNumDom += '<a href="#" class="'+cssPrefix+'num">'+(i)+'</a>';
                            }
                        }
                        $("#" + this.id + " ."+cssPrefix+"numbox").append(pageNumDom);

                    }else{
                        var current = '<a href="#" class="'+cssPrefix+'cur ' + cssPrefix + 'num">'+this.currentPage+'</a>';
                        var currentFirst = '<a href="#" class="'+cssPrefix+'cur ' + cssPrefix + 'num '+cssPrefix+'firstPage">'+this.currentPage+'</a>';
                        var currentLast = '<a href="#" class="'+cssPrefix+'cur ' + cssPrefix + 'num '+cssPrefix+'lastPage">'+this.currentPage+'</a>';
                        var first = '<a href="#" class="'+cssPrefix+'firstPage ' + cssPrefix + 'num">1</a>';
                        var last = '<a href="#" class="'+cssPrefix+'lastPage ' + cssPrefix + 'num">'+this.totalPage+'</a>';
                        var beforeC = '<a href="#" class="' + cssPrefix + 'num">'+(this.currentPage-1)+'</a>';
                        var afterC = '<a href="#" class="' + cssPrefix + 'num">'+(this.currentPage+1)+'</a>';
                        var point = '<span class="' + cssPrefix + 'point">...</span>';
                        var fistPage = 1;
                        var lastPage = this.totalPage;
                        if(this.currentPage - fistPage == 0){
                            pageNumDom += currentFirst + '<a href="#" class="' + cssPrefix + 'num">'+(this.currentPage+1)+'</a><a href="#" class="' + cssPrefix + 'num">'+(this.currentPage+2)+'</a><a href="#" class="' + cssPrefix + 'num">'+(this.currentPage+3)+'</a>' + point + last;
                        }else if(this.currentPage - fistPage == 1){
                            pageNumDom += first + current + '<a href="#" class="' + cssPrefix + 'num">'+(this.currentPage+1)+'</a><a href="#" class="' + cssPrefix + 'num">'+(this.currentPage+2)+'</a>' + point + last;
                        }else if(this.currentPage - fistPage == 2){
                            pageNumDom += first + beforeC + current + afterC + point + last;
                        }else if(Math.abs(this.currentPage - this.totalPage) == 0){
                            pageNumDom += first + point + '<a href="#" class="' + cssPrefix + 'num">'+(this.currentPage-3)+'</a><a href="#" class="' + cssPrefix + 'num">'+(this.currentPage-2)+'</a><a href="#" class="' + cssPrefix + 'num">'+(this.currentPage-1)+'</a>' + currentLast;
                        }else if(Math.abs(this.currentPage - this.totalPage) == 1){
                            pageNumDom += first + point + '<a href="#" class="' + cssPrefix + 'num">'+(this.currentPage-2)+'</a><a href="#" class="' + cssPrefix + 'num">'+(this.currentPage-1)+'</a>' + current + last;
                        }else if(Math.abs(this.currentPage - this.totalPage) == 2){
                            pageNumDom += first + point + beforeC + current + afterC + last;
                        }else{
                            pageNumDom += first + point + beforeC + current + afterC + point + last;
                        }

                        $("#" + this.id + " ." + cssPrefix + "numbox").append(pageNumDom);
                        if(this.currentPage == 1 && this.currentPage !== this.totalPage){
                            $("#" + this.id + " ." + cssPrefix + "nextPage").removeClass("unable");
                            $("#" + this.id + " ." + cssPrefix + "prePage").addClass("unable");
                        }else if(this.currentPage == this.totalPage && this.currentPage !== 1){
                            $("#" + this.id + " ." + cssPrefix + "prePage").removeClass("unable");
                            $("#" + this.id + " ." + cssPrefix + "nextPage").addClass("unable");
                        }else if(this.currentPage !== 1 && this.currentPage != this.totalPage){
                            $("#" + this.id + " ." + cssPrefix + "nextPage").removeClass("unable");
							$("#" + this.id + " ." + cssPrefix + "prePage").removeClass("unable");
                        }

                    }
                },
				
				/**
                 *	加载分页数据
                 *
                 *	@method _reloadData
                 * 	@private
                 *
                 */
                _reloadData : function(query){                	
                    //加载分页数据，统一设置当前页码
					this.param["currentPage"] = this.currentPage;
				    //更新查询参数--针对排序
					if(query){
						for(var i in query){
							this.param[i] = query[i];
						}
						//查询参数改变时，返回到第一页
						this.param["currentPage"] = 1;
					}
					this._createLoading()
					
					//分页重新加载数据前执行的函数
					this.beforePage(this);
					
                     Run.ajax({
	                    //type:'post',
	                    //cache:false,
	                    //dataType:"json",
	                    url:this.url,
	                    data:this.param,
	                    timeout : this.timeout,
                        success:function(data){
                        	this._deleteLoading();
                        	//删除全选状态
							if($("#"+this.checkAllId).prop("checked")){
								$("#"+this.checkAllId).prop("checked",false)
							}
                        	
							this.data = data;
                            this._reloadCallBack(data);
                            
                            //分页重新加载数据前执行的函数
							this.afterPage(this);
                            
                        	//数据加载完成后执行的函数
							this.dataSuccess && this.dataSuccess(data);

                        }.bind(this),
                        error:function(xhr, textStatus, errorThrown){
							this._deleteLoading();
						
							if(textStatus == "timeout"){

								this._timeoutFnc();
								if(this.usepage){
									this._refreshPagingToolbar(this.usepage.type);
								}
							}
						}.bind(this)
                    });
                },
				/**
				 *	获取数据后执行的操作集合
				 *
				 *	@method reloadOperation
				 * 
				 */
				reloadOperation : function(){
					var that = this;
					this.total = this.data.total;
					
					this._addUnable();
					if (this.total == 0) {//无数据
						this.currentPage = 0;
						this._createNoData();
					} else {//有数据
						this._reloadCallBack();
					}
           			this._refreshPagingToolbar(this.usepage.type);
					
					//渲染完成回调函数
	               this.fireEvent("reload");
				},
				 /**
                 *	重载表格数据，用于加载分页数据
                 *
                 *	@method _reloadCallBack
                 * 	@private
                 *
                 */
                _reloadCallBack : function(data){
					this._createDom();
					if(this.isMultiple){
                        this._checkFnc();
                    };
				},
				
                /**
                 *	重置分页工具栏
                 *
                 *	@method _refreshPagingToolbar
                 * 	@private
                 *
                 */
                _refreshPagingToolbar : function(pageType){
                	
                	var cssPrefix='r-page-';
                	
	                this.totalPage = Math.ceil(this.total/this.pageSize);
	                
					if(pageType == 1){
						this._addUnable();
						$("#" + this.id + " input." + cssPrefix+"pageNum").val(this.currentPage);
						$("#" + this.id + " span." + cssPrefix+"pageNum").html(this.currentPage);
	                    $("#" + this.id + " ." + cssPrefix+"indexPage").html('/'+this.totalPage+'页');
					}else if(pageType == 2){
	                    this._createPageNum();
                        $("#" + this.id + " input." + cssPrefix+"pageNum").val(this.currentPage);
                        $("#" + this.id + " span." + cssPrefix+"pageNum").html(this.currentPage);
                        $("#" + this.id + " ." + cssPrefix+"indexPage").html('/'+this.totalPage+'页');
					}
                    
               },
               /**
                 *	更新页码区域，当分页的type为1的时候执行
                 *
                 *	@method _addUnable
                 * 	@private
                 *
                 */
                _addUnable : function (){
                	var cssPrefix='r-page-';
					if(this.total !== 0){
						if(this.currentPage == 1 && this.currentPage !== this.totalPage){
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "nextPage").removeClass("unable");
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "prePage").addClass("unable");
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "fisrtPage").addClass("unable");
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "lastPage").removeClass("unable");
						}else if(this.currentPage == 1 && this.currentPage == this.totalPage){
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "prePage").addClass("unable");
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "nextPage").addClass("unable");
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "fisrtPage").addClass("unable");
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "lastPage").addClass("unable");
						}else if(this.currentPage !== 1 && this.currentPage == this.totalPage){
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "prePage").removeClass("unable");
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "nextPage").addClass("unable");
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "fisrtPage").removeClass("unable");
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "lastPage").addClass("unable");
						}else if(this.currentPage !== 1 && this.currentPage !== this.totalPage){
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "nextPage").removeClass("unable");
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "prePage").removeClass("unable");
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "fisrtPage").removeClass("unable");
							$("#" + this.getAttribute("id") + " ." + cssPrefix + "lastPage").removeClass("unable");
						}
					}else{
						$("#" + this.getAttribute("id") + " ." + cssPrefix + "nextPage").addClass("unable");
						$("#" + this.getAttribute("id") + " ." + cssPrefix + "prePage").addClass("unable");
						$("#" + this.getAttribute("id") + " ." + cssPrefix + "fisrtPage").addClass("unable");
						$("#" + this.getAttribute("id") + " ." + cssPrefix + "lastPage").addClass("unable");
					}
				},
               /**
                 *	加载、重新加载表格时生成遮罩层和loading图片
                 *
                 *	@method _createLoading
                 * 	@private
                 *
                 */
                _createLoading : function(from){
                	$("#" + this.id).find('.r-page-content').empty();
                	$("#" + this.id).addClass("r-loading-height");
//              	if(from === "isInitialize"){
//						$("#" + this.id).addClass("r-loading-height");
//					};
					
					var loadHtml = '<div class="r-loading"><span></span></div>';
					$("#" + this.id).css({'position':'static'}).append(loadHtml);
                },
                
                /**
                 *	加载、重新加载表格时删除遮罩层和loading图片
                 *
                 *	@method _deleteLoading
                 * 	@private
                 *
                 */
                _deleteLoading : function(){
                	var that = this;
					$("#"+that.id).removeClass("r-loading-height").css({'position':'static'}).find('.r-loading').remove();
                },
                /**
                 *	暂无数据
                 *
                 *	@method _createNoData
                 * 	@private
                 * 
                 */
                _createNoData : function(){
					var htmlTpl = '<div class="r-no-data"><span>暂无数据</span></div>';
					$('#'+this.id).children('.r-page-content').empty().append(htmlTpl);
				},
                /**
                 *	移除暂无数据
                 *
                 *	@method _deleteNoData
                 * 	@private
                 * 
                 */
                _deleteNoData : function(){
					$("#"+this.id).find('.r-no-data').remove();
				},
				 /**
                 *	异步加载超时时执行的方法
                 *
                 *	@method _timeoutFnc
                 * 	@private
                 * 
                 */
                _timeoutFnc : function(){
					var htmlTpl = '<div class="r-no-data">加载超时了。<a href="#" id="'+this.id+'_reload">重新加载</a></div>';
					var $container = $('#'+this.id).children('.r-page-content');
					if($container.length>0){
						$container.empty().append(htmlTpl);
					}else{
						$('#'+this.id).prepend('<div class="r-page-content clearfix">'+htmlTpl+'</div>');
					}
					
					$("#" + this.id + "_reload").click(function(){
						this.reloadCards();
					}.bind(this));
                }
				
			}
		};

	}()));

}());