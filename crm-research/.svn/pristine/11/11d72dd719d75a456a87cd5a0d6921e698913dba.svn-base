package com.run.crmresearch.controller;

import java.util.ArrayList;
import java.util.List;

import com.run.crmresearch.utils.RequestResolver;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.http.Header;
import org.apache.http.HttpHeaders;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicHeader;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class SinaMWeiboLogin {

    private static final String LoginUrl = "https://passport.weibo.cn/signin/login";
    private static final String SubmitUrl = "https://passport.weibo.cn/sso/login";
    private static final String APIUrl = "https://m.weibo.cn/api/container/getIndex?uid=1442246695&lfid=100103type%3D3&type=uid&value=1442246695&containerid=1076031442246695&page=1";

    @Autowired
    private RequestResolver resolver;
    @RequestMapping("/weibo_mobile_cookie")
    public String loginWeiboMobile() {
        //第一步、进入登录界面获取login cookie
        final String loginCookie = resolver.getCookie(LoginUrl, null);
        System.out.println("Login Cookie >>> " + loginCookie);

        //第二步、发送Post请求，提交表单实现登录

        //请求头信息
        final Header USER_AGENT = new BasicHeader(HttpHeaders.USER_AGENT,
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36");
        final Header Encoding = new BasicHeader(HttpHeaders.ACCEPT_ENCODING, "gzip, deflate, br");
        final Header Host = new BasicHeader(HttpHeaders.HOST, "passport.weibo.cn");
        final Header REFERER = new BasicHeader(HttpHeaders.REFERER, LoginUrl);
        final Header ContentType = new BasicHeader(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded");
        final Header Origin = new BasicHeader("Origin", "https://passport.weibo.cn");
        final Header Cookie = new BasicHeader("Cookie", loginCookie);
        final Header[] SubmitHeaders = {USER_AGENT, Encoding, Host, REFERER, ContentType, Origin, Cookie};

        //需提交的参数信息
        List<NameValuePair> nvps = new ArrayList<>();
        nvps.add(new BasicNameValuePair("username", "1272510422@qq.com"));
        nvps.add(new BasicNameValuePair("password", "150512@bjra"));
        nvps.add(new BasicNameValuePair("savestate", "1"));
        nvps.add(new BasicNameValuePair("ec", "0"));
        nvps.add(new BasicNameValuePair("entry", "mweibo"));
        nvps.add(new BasicNameValuePair("mainpageflag", "1"));
        final String submitCookie = resolver.getPostCookie(SubmitUrl, SubmitHeaders, nvps);
        System.out.println("Submit Cookie >>> " + submitCookie);
		

        //第三步、使用API Url测试Cookie有效性

        //请求头信息
        final Header API_Host = new BasicHeader(HttpHeaders.HOST, "m.weibo.cn");
        final Header API_Accept = new BasicHeader(HttpHeaders.ACCEPT, "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
        final Header API_Referer = new BasicHeader(HttpHeaders.REFERER, APIUrl);
        final Header API_Cookie = new BasicHeader("Cookie", submitCookie);
        final Header[] API_Headers = {USER_AGENT, API_Host, API_Accept, API_Referer};
        String content = resolver.get(APIUrl, null, API_Headers);
        content = StringEscapeUtils.unescapeJava(content);
        System.out.println(content);
        final Header[] API_HeadersNew = {USER_AGENT, API_Host, API_Accept, API_Referer, API_Cookie};
        String contentNew = resolver.get(APIUrl, null, API_HeadersNew);
        contentNew = StringEscapeUtils.unescapeJava(contentNew);
        System.out.println(contentNew);
        return submitCookie;
    }
}
