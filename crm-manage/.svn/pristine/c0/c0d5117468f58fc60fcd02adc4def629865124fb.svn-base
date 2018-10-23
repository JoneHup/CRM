package com.run.manage.controller.sucai;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSONObject;
import com.run.manage.comm.entity.ComboBox;
import com.run.manage.comm.entity.DataGrid;
import com.run.manage.comm.entity.ExecuteResult;
import com.run.manage.comm.http.APIStatus;
import com.run.manage.model.YSuCai;
import com.run.manage.service.ParameterService;
import com.run.manage.service.SuCaiKuService;


/**
 * <p>
 * Description: [素材库Controller]
 * </p>
 * 
 * @author wuweiguang Created on 2018年10月16日 Copyright (c) 2018 BJRUN
 */

@RestController
@RequestMapping("/sucaiku")
public class PublicMaterialController {
	@Autowired
	private SuCaiKuService sucaiService;
	
	@Autowired
	private  ParameterService parameterService;
	
	/** 
	 * 素材库首页
	 * 
	 * @return
	 */
	@GetMapping("gongxiangsucai")
	public ModelAndView GongGongSuCai() {
		ModelAndView model = new ModelAndView("materialStore/materialstore");
		return model;
	}

	/**
	 * 嵌套页面素材创建
	 * 
	 * @return
	 */
	@RequestMapping("/materialstore1")
	public ModelAndView materialstore1() {
		ModelAndView model = new ModelAndView("include/materialstore_1");
		return model;
	}

	/**
	 * 嵌套页面2
	 * 
	 * @return
	 */
	@RequestMapping("/materialstore2")
	public ModelAndView materialstore2() {
		ModelAndView model = new ModelAndView("include/materialstore_2");
		return model;
	}

	/**
	 * 嵌套页面素材创建内容
	 * 
	 * @return
	 */
	@RequestMapping("/articletaskAlert") 
	public ModelAndView articletaskAlert() {
		ModelAndView model = new ModelAndView("include/articletaskAlert");
		return model;
	}

	/**
	 * 素材详情 wuweiguang
	 * 
	 * @return
	 */
	@RequestMapping("/materialdetailAlert")      
	public ModelAndView materialdetailAlert() {
		ModelAndView model = new ModelAndView("include/materialdetailAlert");
		return model;
	}   

	/**
	 * 评论素材创建 wuweiguang
	 * 
	 * @return
	 */
	@PostMapping("/commentcreatetaskAlert")
	public ModelAndView commentcreatetaskAlert() {
		ModelAndView model = new ModelAndView("include/commentcreatetaskAlert");
		return model;
	}

	/**
	 * 文章素材创建 wuweiguang
	 * 
	 * @return 
	 */
 @PostMapping("/articleeditpop")  
	public ModelAndView articleedit_pop() {
	 
		ModelAndView model = new ModelAndView("include/articleedit_pop");
		return model;
		
		
	/*	YSuCai querySuCaiKuById = sucaiService.querySuCaiKuById(id);
		ModelAndView modelAndView = new ModelAndView("sucaiku/articleedit_pop");
		modelAndView.addObject("sucaiku",querySuCaiKuById);		
		return modelAndView;
		*/
		
		
	}
	

	/**
	 * 评论素材创建 wuweiguang
	 * 
	 * @return 
	 */
	@PostMapping("/articleeditpop1") 
	public ModelAndView articleedit_pop1() {
		ModelAndView model = new ModelAndView("include/articleedit_pop");
		return model;
	}
	
	/**
	 * 文章页面数据
	 * @return
	 */  
	@RequestMapping(value ="/getAllList", produces="application/json;charset=utf-8")
	@ResponseBody
	public String getAllList(@RequestParam Map<String,String> param){
		YSuCai sucai = new YSuCai();
		Integer pageSize = Integer.valueOf(param.get("pageSize"));
		Integer currentPage = Integer.valueOf(param.get("currentPage"));
		String keyword = param.get("keyword");
		sucai.setTitle(keyword);
		DataGrid<YSuCai> cardList = sucaiService.queryList(sucai, currentPage, pageSize);
		System.out.println("数据：："+JSONObject.toJSONString(cardList));
		return JSONObject.toJSONString(cardList);
	}
	
	
	/**
	 * 下拉框展示数据
	 * @return
	 */  
	@RequestMapping(value="/xialakuang",produces="application/json;charset=utf-8")
    public Object queryTaskType() {
        List<ComboBox> comboBoxes = sucaiService.queryTypeList();
        Map<String, List<ComboBox>> comboBoxMap = new HashMap<>();
        comboBoxMap.put("result",comboBoxes);
        return JSONObject.toJSONString(comboBoxMap);
    }

	/**
	 * 删除素材
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/deleteSuCaiById" ,method=RequestMethod.GET)
	public String deleteSuCaiById(@RequestParam(value = "id") Integer id){
		
	 ExecuteResult<APIStatus> result=sucaiService.deleteSuCaiById(id);
		return "";
	}	
	
	/**
	 * <p>Description:[通过消息id 获取文章素材详情]</p>
	 * Created on 2018年10月22日
	 * @param id
	 * @return ModelAndView
	 * @author:[wuweiguang]
	 */
	
	@GetMapping("/articleeditpop")
	public ModelAndView querySuCaiById(@RequestParam("id") Integer id){
		YSuCai querySuCaiKuById = sucaiService.querySuCaiKuById(id);
		ModelAndView modelAndView = new ModelAndView("sucaiku/articleedit_pop");
		modelAndView.addObject("sucaiku",querySuCaiKuById);		
		return modelAndView;
	}
}
