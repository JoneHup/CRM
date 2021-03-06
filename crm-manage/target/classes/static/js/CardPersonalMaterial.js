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
	
	
	Run.define("CardMaterial",(function(){

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
					var _html = '<div class="materialCardItem clearfix">'
									+'<dl class="left materialCardDl">'
										+'<dt class="clearfix">'
											+'<span class="left materialName">xxxxxxxxxxxx</span>'
											+'<em class="left materialClassify">社会类 - 二级类</em>'
										+'</dt>'
										+'<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </dd>'
										+'<a href="#" class="right handicon"title="共享"></a>'
										+'<a href="#" class="right deleteLink_1" title="删除"></a>'
										+'<a href="#" class="right editLink_1" title="编辑"></a>'
										
									+'</dl>'
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
						class_card = 'CardMaterial',
						$container = $('#' + this.id);
						
					//卡片：删除
					$container.off('click','#'+this.id+' .deleteLink_1').on('click','#'+this.id+' .deleteLink_1',function (ev){
						var card = $(this).closest('.'+class_card),
							index = $('#' + that.id).find('.'+class_card).index(card);
						that.callBacks.materialDltFnc.apply(card,[ev,that.data.data[index]]);
					});
						
					//卡片：编辑
					$container.off('click','#'+this.id+' .editLink_1').on('click','#'+this.id+' .editLink_1',function (ev){
						var card = $(this).closest('.'+class_card),
							index = $('#' + that.id).find('.'+class_card).index(card);
						that.callBacks.materialEditFnc.apply(card,[ev,that.data.data[index]]);
					});
				}
				
			}
		};

	}()));

}());