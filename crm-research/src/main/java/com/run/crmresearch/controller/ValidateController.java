package com.run.crmresearch.controller;

import com.run.crmresearch.utils.SinaCookieSelfRefresxhCookie;
import com.run.crmresearch.utils.SinaNewsCookieGenerateUtil;
import com.run.crmresearch.utils.WeiBoId2MidUtil;
import net.sf.json.JSON;
import net.sf.json.JSONObject;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Controller
public class ValidateController {
	public static final Log logger = LogFactory.getLog(ValidateController.class);
	@Autowired
	private SinaMWeiboLogin login;

	@RequestMapping("/consume_cookie")
	@ResponseBody
	public String consumeCookie(@RequestParam(value = "account", required = true) String account,
								@RequestParam(value = "password", required = true) String password,
								@RequestParam(value = "text", required = true) String text,
								@RequestParam(value = "title", required = false) String title,
                                @RequestParam(value = "url", required = false) String url) throws Exception {
        Map<String, Object> map = SinaCookieSelfRefresxhCookie.getSinaCookie(account, password);
		//Map<String, Object> map = SinaNewsCookieGenerateUtil.getSinaNewsCookie(account, password);

		Map<String ,String> paramMap = new HashMap<>();
		paramMap.put("title",title);
		paramMap.put("content",text);
        if (null != map) {
            String cookie = (String)map.get("cookie");
            String uid = (String)map.get("uid");
            if (StringUtils.isNotBlank(url)){
				//发送微博评论
                //String mid  = url.substring(url.lastIndexOf("/") + 1 , url.length());
                //sendWeiBoComment(mid,uid,text,cookie);

				//发送新浪新闻评论
                String shareUrl = url;
                /*String newsId = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."));
                newsId = newsId.substring(newsId.length() - 7 , newsId.length());
                sendSinaNewsComment("comos-hitesuz" +  newsId , shareUrl , text , cookie);*/

                //发送新浪博客评论
				String referer = url;
				String newsId = url.substring(url.indexOf("_") + 1 , url.lastIndexOf("."));
				paramMap.put("newsid" , newsId);
				paramMap.put("referer" , referer);

				paramMap.put("cookie" , cookie);
				sendSinaBlogComment(paramMap);

            } else { //发微博
                //sendWeiBoMessage(text, cookie);
				paramMap.put("cookie",cookie);
				sendSinaBlog(paramMap);
            }
        }
		return "发送成功！";
	}

	@RequestMapping("/")
	public String index() {
		return "index";
	}

	/*public static String getLoginParams(String cookies) throws IOException{

    }*/

	/**
	 * @Author hupeng
	 * @Description //TODO
     *              发送新浪微博
	 * @Date 10:25 2018/9/7
	 * @Param [message, cookies]
	 * @return java.lang.String
	 **/
	public static String sendWeiBoMessage(String message, String cookies) throws IOException {
		HttpURLConnection conn = (HttpURLConnection) new URL(
				"https://weibo.com/aj/mblog/add?ajwvr=6&__rnd=1533884011876").openConnection();
		conn.setDoInput(true);
		conn.setDoOutput(true);
		conn.setRequestMethod("POST");
		conn.setRequestProperty("Cookie", cookies);
		conn.setRequestProperty("Referer", "https://weibo.com/u/3964343118/home?wvr=5");
		conn.setRequestProperty("X-Requested-With", "XMLHttpRequest");
		conn.setRequestProperty("User-Agent",
				"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:34.0) Gecko/20100101 Firefox/34.0");
		conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
		DataOutputStream out = new DataOutputStream(conn.getOutputStream());
		out.writeBytes("location=v6_content_home&appkey=&style_type=1&pic_id=&text=" + URLEncoder.encode(message)
				+ "&pdetail=&rank=0&rankid=&module=stissue&pub_type=dialog&_t=0");
		out.flush();
		out.close();
		BufferedReader read = new BufferedReader(new InputStreamReader(conn.getInputStream(), "gbk"));
		String line = null;
		StringBuilder ret = new StringBuilder();
		while ((line = read.readLine()) != null) {
			ret.append(line).append("\n");
		}
		JSONObject jsonObject = JSONObject.fromObject(ret.toString());
		String[] strings = ret.toString().split("\n");
		System.out.println("=============================================================");
		for (String s : strings) {
			System.out.println(s);
		}
		System.out.println("==================================================================");
		System.out.println(jsonObject);
		return jsonObject.toString();
	}

	/**
	 * @Author hupeng
	 * @Description //TODO
     *              发送新浪微博评论
	 * @Date 17:20 2018/9/5
	 * @Param [midChar, mid, uid, content, cookies]
	 * @return java.lang.String
	 **/
	public static String sendWeiBoComment(String mid, String uid , String content, String cookies)
			throws IOException {
		HttpURLConnection conn = (HttpURLConnection) new URL(
				"https://weibo.com/aj/v6/comment/add?ajwvr=6&__rnd=1536138365376").openConnection();
		conn.setDoInput(true);
		conn.setDoOutput(true);
		conn.setRequestMethod("POST");
		conn.setRequestProperty("Cookie", cookies);
		conn.setRequestProperty("Referer", "https://weibo.com/" + uid +
				"/" + mid + "?ref=home&type=comment");
		conn.setRequestProperty("X-Requested-With", "XMLHttpRequest");
		conn.setRequestProperty("User-Agent",
				"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:34.0) Gecko/20100101 Firefox/34.0");
		conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
		DataOutputStream out = new DataOutputStream(conn.getOutputStream());
		out.writeBytes("location=page_100505_single_weibo&act=post&content=" + URLEncoder.encode(content)
				+ "&pdetail=&forward=0&isroot=0&ref=home&_t=0&module=bcommlist&mid=" + WeiBoId2MidUtil.Uid2Mid(mid) +
                "&uid=" +
                uid);
		out.flush();
		out.close();
		BufferedReader read = new BufferedReader(new InputStreamReader(conn.getInputStream(), "gbk"));
		String line = null;
		StringBuilder ret = new StringBuilder();
		while ((line = read.readLine()) != null) {
			ret.append(line);
		}
		JSONObject jsonObject = JSONObject.fromObject(ret.toString());
		System.out.println(jsonObject);
		return jsonObject.toString();
	}

	/**
	 * @Author hupeng
	 * @Description //TODO
     *              发送新浪新闻评论
	 * @Date 10:24 2018/9/7
	 * @Param [newsId, shareUrl, content, cookies]
	 * @return java.lang.String
	 **/
    public static String sendSinaNewsComment(String newsId, String shareUrl, String content, String cookies)
            throws IOException {
        HttpURLConnection conn = (HttpURLConnection) new URL(
                "http://comment5.news.sina.com.cn/cmnt/submit").openConnection();
        conn.setDoInput(true);
        conn.setDoOutput(true);
		conn.setRequestProperty("Accept" , "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
        conn.setRequestProperty("Cookie", cookies);
        conn.setRequestProperty("Referer", shareUrl);
        conn.setRequestProperty("Upgrade-Insecure-Requests", "1");
        conn.setRequestProperty("User-Agent",
                "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0");
        conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
        DataOutputStream out = new DataOutputStream(conn.getOutputStream());
        out.writeBytes("callback=iJax" + System.currentTimeMillis() + "&channel=gj&content=" + URLEncoder.encode
				(content)
                + "&format=json&ie=utf-8&iframe=1&img_url=&ispost=0&oe=utf-8&newsid=" + newsId +
                "&parent=&usertype=pc&video_url=&share_url=" + shareUrl);
        out.flush();
        out.close();
        BufferedReader read = new BufferedReader(new InputStreamReader(conn.getInputStream(), "gbk"));
        String line = null;
        StringBuilder ret = new StringBuilder();
        while ((line = read.readLine()) != null) {
            ret.append(line);
        }
        String result =  ret.toString();
        result = result.substring(result.indexOf("{") , result.lastIndexOf("}") + 1);
        JSONObject jsonObject = JSONObject.fromObject(result);
        System.out.println("新浪新闻响应结果================================" + jsonObject);
        return jsonObject.toString();
    }

    /**
     * @Author hupeng
     * @Description //TODO
	 * 				发送新浪博客
     * @Date 18:03 2018/9/7
     * @Param [paramMap]
     * @return java.lang.String
     **/
	public static String sendSinaBlog(Map<String , String> paramMap) throws IOException {
		HttpURLConnection conn = (HttpURLConnection) new URL(
				"http://control.blog.sina.com.cn/admin/article/article_post.php").openConnection();
		conn.setDoInput(true);
		conn.setDoOutput(true);
		conn.setRequestProperty("Accept" , "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
		conn.setRequestProperty("Cookie", paramMap.get("cookie"));
		conn.setRequestProperty("Referer", "http://control.blog.sina.com.cn/admin/article/article_add.php");
		conn.setRequestProperty("Upgrade-Insecure-Requests", "1");
		conn.setRequestProperty("User-Agent",
				"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0");
		conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
		DataOutputStream out = new DataOutputStream(conn.getOutputStream());
		StringBuilder paramBuilder = new StringBuilder();
		paramBuilder.append("articleStatus_preview").append("=").append("1").append("&");
		paramBuilder.append("assoc_style").append("=").append("0").append("&");
		paramBuilder.append("blog_body").append("=").append(URLEncoder.encode
				(paramMap.get("content"))).append("&");
		paramBuilder.append("blog_class").append("=").append("00").append("&");
		paramBuilder.append("blog_title").append("=").append(URLEncoder.encode(paramMap.get("title"))).append("&");
		paramBuilder.append("date_pub").append("=").append(new SimpleDateFormat("yyyy-MM-dd").format(new Date())).append
				("&");
		paramBuilder.append("immediatepub").append("=").append("0").append("&");
		paramBuilder.append("is_album").append("=").append("0").append("&");
		paramBuilder.append("is_media").append("=").append("0").append("&");
		paramBuilder.append("is_stock").append("=").append("0").append("&");
		paramBuilder.append("is_tpl").append("=").append("0").append("&");
		paramBuilder.append("isTimed").append("=").append("0").append("&");
		paramBuilder.append("old365").append("=").append("0").append("&");
		paramBuilder.append("time").append("=").append(new SimpleDateFormat("HH:mm:ss").format(new Date())).append("&");
		paramBuilder.append("topic_channel").append("=").append("0").append("&");
		paramBuilder.append("topic_id").append("=").append("0").append("&");
		paramBuilder.append("utf8").append("=").append("1").append("&");
		paramBuilder.append("x_cms_flag").append("=").append("0").append("&");
		paramBuilder.append("utf8").append("=").append("1").append("&");
		paramBuilder.append("vtoken").append("=").append("93aff8fb4918a62e7f1cc561bd620bc5"); //缺少算法

		out.writeBytes(paramBuilder.toString());
		out.flush();
		out.close();
		BufferedReader read = new BufferedReader(new InputStreamReader(conn.getInputStream(), "gbk"));
		String line = null;
		StringBuilder ret = new StringBuilder();
		while ((line = read.readLine()) != null) {
			ret.append(line);
		}
		String result =  ret.toString();
		JSONObject jsonObject = JSONObject.fromObject(result);
		System.out.println("新浪博客响应结果================================" + jsonObject);
		return jsonObject.toString();
	}

	/**
	 * @Author hupeng
	 * @Description //TODO
	 * 				发送新浪博客评论
	 * @Date 19:32 2018/9/7
	 * @Param [paramMap]
	 * @return java.lang.String
	 **/
	public static String sendSinaBlogComment(Map<String , String> paramMap) throws IOException {
		HttpURLConnection conn = (HttpURLConnection) new URL(
				"http://comment5.news.sina.com.cn/cmnt/submit").openConnection();
		conn.setDoInput(true);
		conn.setDoOutput(true);
		conn.setRequestProperty("Accept" , "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
		conn.setRequestProperty("Cookie", paramMap.get("cookie"));
		conn.setRequestProperty("Referer", paramMap.get("referer"));
		conn.setRequestProperty("Upgrade-Insecure-Requests", "1");
		conn.setRequestProperty("User-Agent",
				"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0");
		conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
		DataOutputStream out = new DataOutputStream(conn.getOutputStream());
		StringBuilder paramBuilder = new StringBuilder();
		paramBuilder.append("callback").append("=").append("iJaxCallback_" + System.currentTimeMillis()).append("&");
		paramBuilder.append("channel").append("=").append("blog").append("&");
		paramBuilder.append("content").append("=").append(URLEncoder.encode
				(paramMap.get("content"))).append("&");
		paramBuilder.append("ie").append("=").append("utf-8").append("&");
		paramBuilder.append("iframe").append("=").append("1").append("&");

		paramBuilder.append("ispost").append("=").append("0").append("&");
		paramBuilder.append("newsid").append("=").append(paramMap.get("newsid")).append("&");
		paramBuilder.append("oe").append("=").append("utf-8").append("&");
		paramBuilder.append("share_url").append("=").append("&");
		paramBuilder.append("usertype").append("=").append("blogpc");

		out.writeBytes(paramBuilder.toString());
		out.flush();
		out.close();
		BufferedReader read = new BufferedReader(new InputStreamReader(conn.getInputStream(), "gbk"));
		String line = null;
		StringBuilder ret = new StringBuilder();
		while ((line = read.readLine()) != null) {
			ret.append(line);
		}
		String result =  ret.toString();
		result = result.substring(result.indexOf("{") , result.lastIndexOf("}") + 1);
		JSONObject jsonObject = JSONObject.fromObject(result);
		System.out.println("新浪博客响应结果================================" + jsonObject);
		return jsonObject.toString();
	}
}
