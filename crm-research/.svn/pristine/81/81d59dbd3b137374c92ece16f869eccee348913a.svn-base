package com.run.crmresearch.utils;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.*;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;

import net.sf.json.JSONObject;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.params.ClientPNames;
import org.apache.http.client.params.CookiePolicy;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

/**
 * 
 * @ClassName: SinaCookie
 * @Description:新浪微博用户登录
 * @author xiongwei
 * @date 2015-4-2 上午11:34:06
 * 
 */
public class SinaCookieSelfRefresxhCookie {

	/****** SinaCookie实例 *****/
	private static final SinaCookieSelfRefresxhCookie sinaCookie = new SinaCookieSelfRefresxhCookie();

	/****** 日志记录 *****/
//	private static Logger log = Logger.getLogger(SinaCookieSelfRefresxhCookie.class);

	/****** Cookie串 *****/
	private static String cookie = "";

	private SinaCookieSelfRefresxhCookie() {
		super();
	}

	public String getCookie() {
		return cookie;
	}

	public static SinaCookieSelfRefresxhCookie getInstance() {
		return sinaCookie;
	}

	public static Map<String,Object> getSinaCookie(String userName, String password) {
		String cookie1 = "";
		Map<String,Object> map = null;
		System.out.println("**************获取新浪cookie************");
		try {

			/****** 创建httpClient *****/
			DefaultHttpClient httpClient = new DefaultHttpClient();

			/****** 设置httpClient的Cookie重用机制 *****/
			httpClient.getParams().setParameter(ClientPNames.COOKIE_POLICY, CookiePolicy.BROWSER_COMPATIBILITY);

			/****** HTTP GET 请求 *****/
			HttpGet httpGet = null;

			/****** HTTP POST 请求 *****/
			HttpPost httpPost = null;

			/****** HTTP 响应 *****/
			HttpResponse response = null;

			/****** HTTP 返回实体 *****/
			HttpEntity entity = null;

			/****** HTTP 返回头 *****/
			Header[] headers = null;

			/****** 1.使用Base64加密用户账户 *****/
			String su = SinaSSOEncoder.encodeAccount(userName);

			/****** 2.请求新浪微博登录首页 *****/
			httpGet = new HttpGet(
					//
					"http://login.sina.com.cn/sso/prelogin.php?entry=weibo&callback=sinaSSOController.preloginCallBack&su="
							+ su + "&rsakt=mod&checkpin=1&client=ssologin.js(v1.4.18)&_=" + new Date().getTime());
			httpGet.addHeader("Connection", "close");
			response = httpClient.execute(httpGet);
			entity = response.getEntity();

			BufferedReader reader = null;
			StringBuffer outBuffer = new StringBuffer();
			try {
				reader = new BufferedReader(new InputStreamReader(entity.getContent(), "UTF-8"));
				String line = null;
				while ((line = reader.readLine()) != null) {
					outBuffer.append(line);
					outBuffer.append("\n");
				}
			} finally {
				if (reader != null) {
					reader.close();
				}
			}
			httpGet.abort();
			System.out.println("**************步骤3************");
			/****** 3.从新浪微博登录首页中提取登录必要参数 *****/
			int beginIndex = outBuffer.indexOf("({") + 1;
			int endIndex = outBuffer.indexOf("})") + 1;
			JSONObject jsonObject = JSONObject.fromObject(outBuffer.substring(beginIndex, endIndex));
			@SuppressWarnings("unused")
			String pcid = jsonObject.getString("pcid");
			String nonce = jsonObject.getString("nonce");
			String pubkey = jsonObject.getString("pubkey");
			String rsakv = jsonObject.getString("rsakv");
			String sp = "";
			String servertime = jsonObject.getString("servertime");
			@SuppressWarnings("unused")
			String retcode = jsonObject.getString("retcode");

			/****** 4.从使用RSA算法对密码进行加密 *****/
			System.out.println("**************步骤4************");
			String pwdString = servertime + "\t" + nonce + "\n" + password;
			try {
				sp = SinaSSOEncoder.rsaCrypt(pubkey, "10001", pwdString);
			} catch (InvalidKeyException e) {
				e.printStackTrace();
			} catch (IllegalBlockSizeException e) {
				e.printStackTrace();
			} catch (BadPaddingException e) {
				e.printStackTrace();
			} catch (NoSuchAlgorithmException e) {
				e.printStackTrace();
			} catch (InvalidKeySpecException e) {
				e.printStackTrace();
			} catch (NoSuchPaddingException e) {
				e.printStackTrace();
			}

			/****** 5.POST提交参数进行登录 *****/
			System.out.println("**************步骤5************");
			httpPost = new HttpPost("http://login.sina.com.cn/sso/login.php?client=ssologin.js(v1.4.18)");
			List<NameValuePair> nvps = new ArrayList<NameValuePair>();
			nvps.add(new BasicNameValuePair("cdult", "2"));
			nvps.add(new BasicNameValuePair("domain", "weibo.com"));
			nvps.add(new BasicNameValuePair("encoding", "UTF-8"));
			nvps.add(new BasicNameValuePair("entry", "weibo"));
			nvps.add(new BasicNameValuePair("from", ""));
			nvps.add(new BasicNameValuePair("gateway", "1"));
			nvps.add(new BasicNameValuePair("nonce", nonce));
			nvps.add(new BasicNameValuePair("pagerefer",
					"http://login.sina.com.cn/sso/logout.php?entry=miniblog&r=http%3A%2F%2Fweibo.com%2Flogout.php%3Fbackurl%3D%2F"));
			nvps.add(new BasicNameValuePair("prelt", "20"));
			nvps.add(new BasicNameValuePair("pwencode", "rsa2"));
			nvps.add(new BasicNameValuePair("returntype", "META"));
			nvps.add(new BasicNameValuePair("rsakv", rsakv));
			nvps.add(new BasicNameValuePair("savestate", "7"));
			nvps.add(new BasicNameValuePair("servertime", servertime));
			nvps.add(new BasicNameValuePair("service", "miniblog"));
			nvps.add(new BasicNameValuePair("sp", sp));
			nvps.add(new BasicNameValuePair("sr", "1366*768"));
			nvps.add(new BasicNameValuePair("su", su));
			nvps.add(new BasicNameValuePair("useticket", "1"));
			nvps.add(new BasicNameValuePair("vsnf", "1"));
			nvps.add(new BasicNameValuePair("url",
					"http://weibo.com/ajaxlogin.php?framelogin=1&callback=parent.sinaSSOController.feedBackUrlCallBack"));
			httpPost.setEntity(new UrlEncodedFormEntity(nvps, "UTF-8"));
			response = httpClient.execute(httpPost);
			entity = response.getEntity();
			outBuffer = new StringBuffer();
			try {
				reader = new BufferedReader(new InputStreamReader(entity.getContent(), "UTF-8"));
				String line = null;
				while ((line = reader.readLine()) != null) {
					outBuffer.append(line);
					outBuffer.append("\n");
				}
			} finally {
				if (reader != null) {
					reader.close();
				}
			}
			httpPost.abort();
			/****** 6.提取请求返回的链接 *****/
			System.out.println("**************outBuffer****************" + outBuffer.toString());
			System.out.println("**************步骤6************");
			String weiboUrl = "";
			weiboUrl = outBuffer.substring(outBuffer.indexOf("location.replace('") + "location.replace('".length());
			weiboUrl = weiboUrl.substring(0, weiboUrl.indexOf("'"));

			/****** 7.请求passport.weibo.cn *****/
			System.out.println("**************步骤7************");
			httpGet = new HttpGet(
					"http://passport.weibo.cn/sso/crossdomain?action=login&savestate=1&callback=sinaSSOController.doCrossDomainCallBack&scriptId=ssoscript2&client=ssologin.js(v1.4.18)&_=1428589373122");
			httpGet.addHeader("Referer", "http://login.sina.com.cn/sso/login.php?client=ssologin.js(v1.4.18)");
			httpGet.addHeader("Connection", "keep-alive");
			response = httpClient.execute(httpGet);
			headers = response.getAllHeaders();

			for (int i = 0; i < headers.length; i++) {
				if (headers[i].getName().equalsIgnoreCase("Set-Cookie")) {
					if (headers[i].getValue().contains(";")) {
						cookie1 = cookie1 + headers[i].getValue().split(";")[0] + ";";
					} else {
						cookie1 = cookie1 + headers[i].getValue() + ";";
					}
				}
			}

			httpGet.abort();

			 /****** 8.请求passport.97973.com *****/
			 System.out.println("**************步骤8************");
			 httpGet = new HttpGet(
			 "http://passport.97973.com/sso/crossdomain?action=login&savestate=1460125420&callback=sinaSSOController.doCrossDomainCallBack&scriptId=ssoscript1&client=ssologin.js(v1.4.18)&_=1428589373122");
			 httpGet.addHeader("Referer",
			 "http://login.sina.com.cn/sso/login.php?client=ssologin.js(v1.4.18)");
			 httpGet.addHeader("Connection", "keep-alive");
			 response = httpClient.execute(httpGet);
			 httpGet.abort();
			
			 /****** 9.请求crosdom.weicaifu.com *****/
			 System.out.println("**************步骤9************");
			 httpGet = new HttpGet(
			 "http://crosdom.weicaifu.com/sso/crosdom?action=login&savestate=1460125420&callback=sinaSSOController.doCrossDomainCallBack&scriptId=ssoscript0&client=ssologin.js(v1.4.18)&_=1428589373122");
			 httpGet.addHeader("Referer",
			 "http://login.sina.com.cn/sso/login.php?client=ssologin.js(v1.4.18)");
			 httpGet.addHeader("Connection", "keep-alive");
			 response = httpClient.execute(httpGet);
			 httpGet.abort();

			/****** 10.请求最终URL *****/
			System.out.println("**************步骤10************");
			String replaceURL = "url=http%3A%2F%2Fweibo.com%2Fajaxlogin.php%3Fframelogin%3D1%26callback%3Dparent.sinaSSOController.feedBackUrlCallBack&";
			weiboUrl = weiboUrl.replaceAll(replaceURL, "");
			httpGet = new HttpGet(weiboUrl);
			httpGet.addHeader("Referer", "http://login.sina.com.cn/sso/login.php?client=ssologin.js(v1.4.18)");
			httpGet.addHeader("Connection", "keep-alive");
			response = httpClient.execute(httpGet);

			/****** 11.从头信息中提取登录Cookie信息 *****/
			System.out.println("**************步骤11************");
			headers = response.getAllHeaders();
			for (int i = 0; i < headers.length; i++) {
				if (headers[i].getName().equalsIgnoreCase("Set-Cookie")) {
					if (headers[i].getValue().contains(";")) {
						cookie = cookie + headers[i].getValue().split(";")[0] + ";";
						System.out.println("**********cookie**********" + cookie);
					} else {
						cookie = cookie + headers[i].getValue() + ";";
						System.out.println("**********cookie**********" + cookie);
					}
				}
			}

			map = new HashMap<>();
			map.put("cookie",cookie);
			String entityStr = EntityUtils.toString(response.getEntity());
			if (StringUtils.isNoneEmpty(entityStr)) {
				entityStr = entityStr.substring(entityStr.indexOf("(") + 1,entityStr.indexOf(")"));
				JSONObject repBody = JSONObject.fromObject(entityStr);
				String uniqueid =  (String)JSONObject.fromObject(repBody.get("userinfo")).get("uniqueid");
				map.put("uid",uniqueid);
			}
			EntityUtils.consume(entity);
			httpClient.getConnectionManager().shutdown();
		} catch (Exception e) {
			map = null;
			e.printStackTrace();
//			log.info(e.getMessage());
		}
		System.out.println("map = " + map.toString());
		return map;
	}
}
