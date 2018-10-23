package com.run.crmresearch.utils;

import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonArrayFormatVisitor;
import net.sf.json.JSONArray;
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

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.*;

/**
 * @Description TODO
 * @Author hp
 * @Date 2018/9/6 16:49
 * @Version 1.0
 **/
public class SinaNewsCookieGenerateUtil {

    /****** Cookie串 *****/
    private static String cookie = "";

    public static Map<String,Object> getSinaNewsCookie(String userName, String password) {
        Map<String,Object> map = null;
        System.out.println("**************获取新浪新闻cookie************");
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
            String nonce = jsonObject.getString("nonce");
            String pubkey = jsonObject.getString("pubkey");
            String rsakv = jsonObject.getString("rsakv");
            String sp = "";
            String servertime = jsonObject.getString("servertime");
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
            nvps.add(new BasicNameValuePair("cdult", "3"));
            nvps.add(new BasicNameValuePair("domain", "sina.com.cn"));
            nvps.add(new BasicNameValuePair("encoding", "UTF-8"));
            nvps.add(new BasicNameValuePair("entry", "homepage"));
            nvps.add(new BasicNameValuePair("from", ""));
            nvps.add(new BasicNameValuePair("gateway", "1"));
            nvps.add(new BasicNameValuePair("nonce", nonce));
            nvps.add(new BasicNameValuePair("pagerefer",
                    ""));
            nvps.add(new BasicNameValuePair("prelt", "84"));
            nvps.add(new BasicNameValuePair("pwencode", "rsa2"));
            nvps.add(new BasicNameValuePair("qrcode_flag", "true"));
            nvps.add(new BasicNameValuePair("returntype", "TEXT"));
            nvps.add(new BasicNameValuePair("rsakv", rsakv));
            nvps.add(new BasicNameValuePair("savestate", "30"));
            nvps.add(new BasicNameValuePair("servertime", servertime));
            nvps.add(new BasicNameValuePair("service", "sso"));
            nvps.add(new BasicNameValuePair("sp", sp));
            nvps.add(new BasicNameValuePair("sr", "1600*900"));
            nvps.add(new BasicNameValuePair("su", su));
            nvps.add(new BasicNameValuePair("useticket", "0"));
            nvps.add(new BasicNameValuePair("vsnf", "1"));
            httpPost.setEntity(new UrlEncodedFormEntity(nvps, "UTF-8"));
            response = httpClient.execute(httpPost);
            entity = response.getEntity();
            /****** 6.提取请求返回的链接 *****//*
            System.out.println("**************login_outBuffer****************" + outBuffer.toString());*/
            JSONObject loginEntity = JSONObject.fromObject(EntityUtils.toString(entity));
            Object crossUrl = JSONArray.fromObject(loginEntity.get("crossDomainUrlList")).get(0);

            /****** 7.请求passport.weibo.com *****/
            System.out.println("**************步骤6************");
            httpGet = new HttpGet(
                    crossUrl + "&callback=pluginSSOController.doCrossDomainCallBack&scriptId=ssoscript0&client=ssologin" +
                    ".js(v1.4.19)&_=1536304031704");
            httpGet.addHeader("Referer", "https://www.sina.com.cn/?from=news");
            httpGet.addHeader("Connection", "keep-alive");
            response = httpClient.execute(httpGet);
            headers = response.getAllHeaders();

            /****** 8.从头信息中提取登录Cookie信息 *****/
            System.out.println("**************步骤7************");
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

            EntityUtils.consume(entity);
            httpClient.getConnectionManager().shutdown();
        }catch(Exception e) {
            map = null;
            e.printStackTrace();
        }
        System.out.println("map = " + map.toString());
        return map;
    }
}
