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
	
	
	Run.define("CardArticle",(function(){

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
				 * 	创建私有方法 创建类型1卡片
				 *
				 *	@method _createCard
				 *  @private
				 * 
				 */
				_createCard : function (data, i) {
					var _html = '<ul class="otherDetailList">'
                    	+'<li class="clearfix">'
                        	+'<label class="left otherDetailLabel">文章标题：</label>'
                            +'<span class="left otherDetailSpan">'+data.title+'</span>'
                        +'</li>'
                    	+'<li class="clearfix">'
                        	+'<label class="left otherDetailLabel">文章内容：</label>'
                            +'<div class="left otherDetailDiv">'
                            	+'<p>'+data.content+'</p>'
                            +'</div>'
                        +'</li>'
                    +'</ul>';
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
						class_card = 'CardArticle',
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