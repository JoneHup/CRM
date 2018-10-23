package com.run.crmresearch.utils;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.stream.Stream;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.Header;
import org.apache.http.HttpHeaders;
import org.apache.http.HttpResponse;

import com.ibm.icu.text.CharsetDetector;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class HtmlPageUtil {

    private static final String CHARSET_NAME = "charset=";
    private static final String CHARSET_REG = "<meta[^>]*?charset=['\\\"]?([^\\\\s'\\\"]+)";
    private static final CharsetDetector Detector = new CharsetDetector();

    /**
     * 私有构造器，说明该类为工具类
     */
    private HtmlPageUtil() {
        super();
    }

    /**
     * 根据页面实体判定页面编码，默认使用UTF-8编码
     *
     * @return
     */
    public static String getEncoding(HttpResponse httpResponse, byte[] bytes) {
        String newCharset = getEncodingByResponseHead(httpResponse);
        if (StringUtils.isEmpty(newCharset)) {
            newCharset = getEncodingByPageContent(bytes);
            if (StringUtils.isEmpty(newCharset)) {
                newCharset = getEncodingByIbmIcu(bytes);
                if (StringUtils.isEmpty(newCharset)) {
                    newCharset = StandardCharsets.UTF_8.name();
                }
            }
        }
        return newCharset;
    }

    /**
     * 根据Response Head中Content-Type的charset属性判定页面编码
     *
     * @param response
     * @return
     */
    public static String getEncodingByResponseHead(HttpResponse response) {
        String charsetLine = Stream.of(response.getHeaders(HttpHeaders.CONTENT_TYPE)).map(Header::getValue)
                .filter(value -> value.contains(CHARSET_NAME)).findAny().orElse("");
        return getCharset(charsetLine);
    }

    /**
     * 根据页面源码的charset标签判定编码
     *
     * @return
     */
    public static String getEncodingByPageContent(byte[] bytes) {
        String charset = "";
        try {
            List<String> lines = IOUtils.readLines(new ByteArrayInputStream(bytes), StandardCharsets.UTF_8);
            String charsetLine = lines.stream().filter(line -> line.contains(CHARSET_NAME)).findFirst().orElse("");
            charset = getCharset(charsetLine);
        } catch (UnsupportedOperationException | IOException e) {
//            log.error("IOUtils.readLines Error!", e);
        	e.printStackTrace();
        }
        return charset;
    }

    public static String getCharset(String charsetLine) {
        //针对可能出现charset=utf8做相应的处理
        String charset = RegexUtil.capture(charsetLine, CHARSET_REG).toUpperCase();
        if (charset.contains("UTF") && !charset.contains("UTF-"))
            charset = charset.replace("-", "");
        return charset;
    }

    /**
     * 借助IBM公司的icu4j类库自动推断编码
     */
    public static String getEncodingByIbmIcu(byte[] bytes) {
        String charset = "";
        Detector.setText(bytes);
        charset = Detector.detect().getName();
        return charset;
    }
}
