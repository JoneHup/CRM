package com.run.crmresearch;

import com.run.crmresearch.utils.SinaCookieSelfRefresxhCookie;
import net.sf.json.JSONObject;
import org.junit.Test;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @Description TODO
 * @Author hp
 * @Date 2018/9/4 16:38
 * @Version 1.0
 **/
public class CookieTest {

    @Test
    public void getCookieTest() {
        Map<String, Object> map = SinaCookieSelfRefresxhCookie.getSinaCookie("15210429895", "shmily1990");
        System.out.println("map == " + map);
    }

    @Test
    public void urlRegexTest() {
        String url = "<a class=\"S_txt2\"  suda-data=\"key=smart_feed&value=time_sort_tran:4280918207638591\" " +
                "href=\"javascript:void(0);\" action-history=\"rec=1\" action-type=\"fl_forward\" " +
                "action-data=\"allowForward=1&url=https://weibo" +
                ".com/6330239074/GxX3ew395&mid=4280918207638591&name=年无心&uid=6330239074&domain=6330239074\"<span " +
                "class=\"pos\">";
        String s = "http://112132.com";
        Pattern compile = Pattern.compile("(?<=\\\"action-data=\\\")\\\"(.+?)\\\"");
        Matcher matcher = compile.matcher(s);
        System.out.println(matcher.matches());
    }

    @Test
    public void stringTest() {
        String s = "({\"retcode\":0,\"arrURL\":[\"https:\\/\\/passport.97973.com\\/sso\\/crossdomain?action=login" +
                "&savestate=1567743388\",\"https:\\/\\/passport.krcom]});";
        s = s.substring(s.indexOf("(") + 1,s.indexOf(")"));
        s = "{\"result\":true,\"userinfo\":{\"uniqueid\":\"6330239074\",\"displayname\":\"\\u5e74\\u65e0\\u5fc3\"}}";
        JSONObject repBody = JSONObject.fromObject(s);
        Object o = JSONObject.fromObject(repBody.get("userinfo")).get("uniqueid");
        System.out.println(o);
    }

    @Test
    public void urlTest() {
        String url = "http://news.sina.com.cn/o/2018-09-07/doc-ihitesuz5693181.shtml";
        String shareUrl = url;
        String newsId = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."));
        newsId = newsId.substring(newsId.length() - 7 , newsId.length());
        System.out.println(newsId);
    }

    @Test
    public void getTimeMills() {
        System.out.println(System.currentTimeMillis());
    }
}
