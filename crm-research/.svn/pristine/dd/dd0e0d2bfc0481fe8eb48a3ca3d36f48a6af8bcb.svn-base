package com.run.crmresearch.utils;

import java.util.LinkedList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexUtil {

    private RegexUtil() {
        super();
    }

    /**
     * 是否匹配
     *
     * @return
     */
    public static boolean isMatch(String str, String regex) {
        final Pattern pattern = Pattern.compile(regex, Pattern.DOTALL);
        return pattern.matcher(str).find();
    }

    /**
     * 根据正则返回捕获组信息
     *
     * @param str     待捕获字符串
     * @param regex   正则表达式
     * @param groupId 捕获第几个分组，默认为1
     * @return
     */
    public static String capture(String str, String regex, int groupId) {
        String capture = "";
        final Pattern pattern = Pattern.compile(regex, Pattern.DOTALL);
        final Matcher matcher = pattern.matcher(str);
        if (matcher.find())
            capture = matcher.group(groupId);
        return capture;
    }

    public static String capture(String str, String regex) {
        return capture(str, regex, 1);
    }

    /**
     * 得到全部匹配的数据
     *
     * @param str
     * @param regex
     * @return
     */
    public static List<String> captureAll(String str, String regex) {
        List<String> captures = new LinkedList<>();
        final Matcher matcher = Pattern.compile(regex, Pattern.DOTALL).matcher(str);
        while (matcher.find()) {
            captures.add(matcher.group(0));
        }
        return captures;
    }

}
