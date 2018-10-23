package com.run.manage.comm.http;

import com.alibaba.fastjson.JSONObject;

/**
 *
 * <p>Description: [API调用的结果json]</p>
 * Created on 2018年10月4日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
public class ApiResponse {

	/**
	 * <p>Discription:[获取标准格式返回结果]</p>
	 * @param required status APIStatus 
	 * @param data 结果集
	 * @return {"status":{"code":xxx,"message":"xxx"},"data":{xxx}}
	 */
	public static String data(APIStatus status, Object data) {
		JSONObject result = new JSONObject();
		JSONObject statusJson = new JSONObject();
		statusJson.put("code", status.code);
		statusJson.put("message", status.message);
		result.put("status", statusJson);
		result.put("data", data);
		return result.toJSONString();
	}
	/**
	 * 
	 * <p>Discription:[获取标准格式返回结果]</p>
	 * @param required status APIStatus 
	 * @param data 结果集
	 * @return {"status":{"code":xxx,"message":"xxx"},"data":{xxx}}
	 * @author[hanshixiong]
	 */
	public static JSONObject jsonData(APIStatus status, Object data) {
		JSONObject result = new JSONObject();
		JSONObject statusJson = new JSONObject();
		statusJson.put("code", status.code);
		statusJson.put("message", status.message);
		result.put("status", statusJson);
		result.put("data", data);
		return result;
	}
	/**
	 * 
	 * <p>Discription:[获取标准格式返回结果]</p>
	 * @param required status APIStatus 
	 * @return {"status":{"code":xxx,"message":"xxx"}}
	 */
	public static String data(APIStatus status) {
		JSONObject result = new JSONObject();
		JSONObject statusJson = new JSONObject();
		statusJson.put("code", status.code);
		statusJson.put("message", status.message);
		result.put("status", statusJson);
		return result.toJSONString();
	}
	/**
	 * 
	 * <p>Discription:[获取标准格式返回结果]</p>
	 * @param required status APIStatus 
	 * @return {"status":{"code":xxx,"message":"xxx"}}
	 */
	public static JSONObject jsonData(APIStatus status) {
		JSONObject result = new JSONObject();
		JSONObject statusJson = new JSONObject();
		statusJson.put("code", status.code);
		statusJson.put("message", status.message);
		result.put("status", statusJson);
		return result;
	}
	
	/**
	 * 
	 * <p>Discription:[获取请求处理成功返回结果]</p>
	 * @return {"status":{"code":200,"message":"ok"}}
	 */
	public static JSONObject success() {
		return jsonData(APIStatus.OK_200);
	}

	/**
	 * 
	 * <p>Discription:[获取请求处理成功返回结果]</p>
	 * @param required data
	 * @return {"status":{"code":200,"message":"ok"},"data":xxx}
	 */
	public static JSONObject success(Object data) {
		return jsonData(APIStatus.OK_200, data);
	}

	/**
	 * 
	 * <p>Discription:[获取请求参数错误返回结果]</p>
	 * @return {"status":{"code":400,"message":"Bad Request."}}
	 */
	public static JSONObject errorPara() {
		return jsonData(APIStatus.ERROR_400);
	}
	
	/**
	 * 
	 * <p>Discription:[获取请求参数错误返回结果]</p>
	 * @param required data
	 * @return {"status":{"code":400,"message":"Bad Request."},"data":xxx}
	 */
	public static JSONObject errorPara(Object data) {
		return jsonData(APIStatus.ERROR_400, data);
	}
}
