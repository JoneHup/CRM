/**
 *	@class Run.Widget.Card
 *	@extends Run.Cards
 *	@xtype cardExample
 *
 *	锐安前端组件库  具体卡片组件
 *
 *	@author mahonglu
 *	@new
 */


(function(){
	
	
	Run.define("CardMsg",(function(){

		return {
			/**
			 * 	该类继承的父类名称，类定义时使用
			 *
			 *	@property {String} extend
			 *	@readonly
			 */
			extend : Run.DefaultCardsSuperClass,
			
			privates : {
				/**
				 * 	创建私有方法 创建类型item
				 *
				 *	@method _createItem
				 *  @private
				 * 
				 */
				_createItem: function(tmp) {
			    	var _mtheme = tmp.theme?tmp.theme:'';
			    	var _mval = tmp.val;
			    	if (_mtheme == 'keyword') {
			    		_mtheme = '';
			    		_mval = _mval.replace(tmp.keyword,'<em class="'+tmp.theme+'">'+tmp.keyword+'</em>');
			    	}
			    	return  '<li class="item left"><span class="labTxt left">【'+tmp.lab+'】</span><span class="'+_mtheme+' left labTxtVal" title="'+tmp.val+'">'+_mval+'</span>'+(tmp.axis?'<a href="javascript:;" class="opMap left" data-axis ="'+tmp.axis+'"></a>':'')+'</li>';
				},
				
				/**
				 * 	创建私有方法 创建同一身份、联系人
				 *
				 *	@method _createInfoList
				 *  @private
				 * 
				 */
				_createInfoList: function(data) {
					var that = this,
						_html = '',
						_infos = '';
					$.each(data.list, function(i,tmp) {
				    	if ($.type(tmp.val)=="array") {
				    		var _infosB = '';
				    		 $.each(tmp.val, function (j, val) {
				    		 	var sTheme = '',
				    		 		sItem = val.item;
				    		 	if (val.theme) {
				    		 		sTheme = val.theme;
				    		 		if (val.keyword) {
				    		 			sItem = sItem.replace(val.keyword,'<em class="'+val.theme+'">'+val.keyword+'</em>');
				    		 		} else{
				    		 			sItem = '<em class="'+val.theme+'">'+sItem+'</em>'
				    		 		}
				    		 	} 
				    		 	if (j !== 0) {
				    		 		_infosB += '<em class="left">、</em>';
				    		 	}
				    		 	_infosB += '<span class="valItem left"><em class="left">'+sItem+'</em></span>';
				    		 	if (j >= 2) {
				    		 		return false;
				    		 	}
				    		 });
				    		 if (tmp.tot > 3) {
				    		 	_infosB += '<em class="left">.....</em>';
				    		 }
				    		 _infosB += '<em class="tot">（共'+tmp.tot+'个）</em>';
			    		 	_infos += '<li class="item left">'+
										'<span class="labTxt left">【'+tmp.lab+'】</span>'+
										'<div class="valItemWrap left">'+
											_infosB+
										'</div>'+
									'</li>';
				    	} else {
				    		_infos += that._createItem(tmp);
				    	}
				    });
				    if (_infos!='') {
					    _html = '<div class="infos">'+
									'<span class="infos_tit">'+data.tit+'：</span>'+
									'<ul class="clearfix">'+
										_infos+
									'</ul>'+	
							   '</div>';
					}
				    return _html;
				},
				
				/**
				 * 	创建私有方法 创建类型1卡片
				 *
				 *	@method _createCard
				 *  @private
				 * 
				 */
				_createCard : function (data, i) {
					var notice;
					switch(data.noticeType){
						case 1 :
							notice = '通知类';
						break;
						default :
							notice = '其他';
					}
					/*var _html = '<div class="numDetail">'
									+'<div class="leftBox">'
										+'<span class="wechat">'+data.title+'</span>'
										+'<span class="spec left">'+data.notice+'</span>'
									+'</div>'
									+'<div class="right">'
										+'<span class="admin">'+data.userName+'</span>'
										+'<span class="time">'+data.time+'</span>'
										+'<a href="" class="upBtn"></a>'
                                    	+'<a href="" class="downBtn"></a>'
									+'</div>'
								+'</div>';
								*/
					var _html = '<div class="clearfix msgCartItem">'
									+'<a href="#" class="left msgCardTitle">'
										+'<span class="left">'+data.title+'</span>'
										+'<em class="left">'+notice+'</em>'
									+'</a>'
									+'<span class="msgCardUser left">'+data.userAccount+'</span>'
									+'<span class="msgCartTime left">'+data.createTime+'</span>'
									+'<a href="#" class="left setFirsLink"></a>'
									+'<a href="#" class="left deleteLink"></a>'
								+'</div>';
				    return _html;	
				},
				/**
                 *	绑定回调函数
                 *
                 *	@method _bindCallBacks
                 * 	@private
                 *
                 */
				_bindCallBacks:function(){
					var that = this,
						class_card = 'msgCartItem',
						$container = $('#' + this.id);
						
					//卡片：置顶
					$container.off('click','#'+that.id+' .msgCardTitle').on('click','#'+that.id+' .msgCardTitle',function (ev){
						var card = $(this).closest('.'+class_card),
							index = $('#' + that.id).find('.'+class_card).index(card);
						that.callBacks.msgCardTitleFnc.apply(card,[ev,that.data.data[index]]);
					});
						
					//卡片：置顶
					$container.off('click','#'+that.id+' .setFirsLink').on('click','#'+that.id+' .setFirsLink',function (ev){
						var card = $(this).closest('.'+class_card),
							index = $('#' + that.id).find('.'+class_card).index(card);
						that.callBacks.setFirsLinkFnc.apply(card,[ev,that.data.data[index]]);
					});
					
					//卡片：删除
					$container.off('click','#'+that.id+' .deleteLink').on('click','#'+that.id+' .deleteLink',function (ev){
						var card = $(this).closest('.'+class_card),
							index = $('#' + that.id).find('.'+class_card).index(card);
						that.callBacks.deleteLinkFnc.apply(card,[ev,that.data.data[index]]);
					});
				}
				
			}
		};

	}()));

}());