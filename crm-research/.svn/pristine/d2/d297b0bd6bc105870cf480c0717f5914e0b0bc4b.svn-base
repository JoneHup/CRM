package com.run.crmresearch.utils;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.protocol.BasicHttpContext;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class RequestResolver {
	private static final Log log = LogFactory.getLog(RequestResolver.class);
    @Resource
    private CloseableHttpClient httpClient;

    @Resource
    private RequestConfig requestConfig;

    @Resource
    private Header[] defaultHeaders;

    /**
     * HttpClient Get请求工具类
     *
     * @param url
     * @param charset
     * @param headers
     * @return
     */
    public String get(final String url, String charset, Header[] headers) {
        HttpGet httpGet = new HttpGet(url);

        headers = Optional.ofNullable(headers).orElse(defaultHeaders);
        httpGet.setHeaders(headers);
        httpGet.setConfig(requestConfig);

        String content = "";
        try (CloseableHttpResponse response = httpClient.execute(httpGet, new BasicHttpContext())) {
            content = this.handleResponse(response, url, charset);
        } catch (IOException e) {
            log.error(url+"{} DownLoad Error: ", e);
        }
        httpGet.releaseConnection();
        return content;
    }

    public String get(final String url, final Header[] headers) {
        return get(url, null, headers);
    }

    /**
     * 获得Get请求的字节数组
     * @param url
     * @param headers
     * @return
     */
    public byte[] getBytes(final String url, Header[] headers){
        HttpGet httpGet = new HttpGet(url);

        headers = Optional.ofNullable(headers).orElse(defaultHeaders);
        httpGet.setHeaders(headers);
        httpGet.setConfig(requestConfig);

        try (CloseableHttpResponse response = httpClient.execute(httpGet, new BasicHttpContext())) {
            byte[] bytes = EntityUtils.toByteArray(response.getEntity());
            return bytes;
        } catch (IOException e) {
             log.error(url+"{} DownLoad Error: ", e);
        }
        return null;
    }

    /**
     * 获取Get请求响应Cookie
     * @param url
     * @param headers
     * @return
     */
    public String getCookie(final String url, Header[] headers) {
        HttpGet httpGet = new HttpGet(url);

        headers = Optional.ofNullable(headers).orElse(defaultHeaders);
        httpGet.setHeaders(headers);
        httpGet.setConfig(requestConfig);

        String cookie = "";
        try (CloseableHttpResponse response = httpClient.execute(httpGet, new BasicHttpContext())) {
//        	int statusCode = response.getStatusLine().getStatusCode();
//        	System.out.println(statusCode);
            cookie = Stream.of(response.getAllHeaders()).filter(header -> "Set-Cookie".equals(header.getName())).map(Header::getValue).map(v -> v.substring(0, v.indexOf(";"))).collect(Collectors.joining(";"));
        } catch (IOException e) {
             log.error(url+"{} DownLoad Error: ", e);
        }
        return cookie;
    }

    /**
     * HttpClient Post请求工具类
     *
     * @param url
     * @param charset
     * @param headers
     * @param nvps
     * @return
     */
    public String post(final String url, String charset, Header[] headers, List<NameValuePair> nvps) {
        final HttpPost httpPost = new HttpPost(url);

        //设置请求头
        headers = Optional.ofNullable(headers).orElse(defaultHeaders);
        httpPost.setHeaders(headers);

        //添加Request Body
        try {
            httpPost.setEntity(new UrlEncodedFormEntity(nvps));
        } catch (UnsupportedEncodingException e) {
            log.error("Encode NameValueParis Error!");
        }
        httpPost.setConfig(requestConfig);

        String content = "";
        try (CloseableHttpResponse response = httpClient.execute(httpPost, new BasicHttpContext())) {
            content = this.handleResponse(response, url, charset);
        } catch (IOException e) {
             log.error(url+"{} DownLoad Error: ", e);
        }

        return content;
    }

    public String post(final String url, final Header[] headers, final List<NameValuePair> nvps){
        return this.post(url, null, headers, nvps);
    }

    public CloseableHttpResponse getPostResponse(final String url, Header[] headers, final List<NameValuePair> nvps){
        final HttpPost httpPost = new HttpPost(url);

        //设置请求头
        headers = Optional.ofNullable(headers).orElse(defaultHeaders);
        httpPost.setHeaders(headers);

        //添加Request Body
        try {
            httpPost.setEntity(new UrlEncodedFormEntity(nvps));
        } catch (UnsupportedEncodingException e) {
            log.error("Encode NameValueParis Error!");
        }
        httpPost.setConfig(requestConfig);

        try {
            return httpClient.execute(httpPost, new BasicHttpContext());
        } catch (IOException e) {
             log.error(url+"{} DownLoad Error: ", e);
        }
        return null;
    }

    /**
     * 获取Post请求响应Cookie
     * @param url
     * @param headers
     * @param nvps
     * @return
     */
    public String getPostCookie(final String url, final Header[] headers, final List<NameValuePair> nvps){
        String cookie = "";
        try(CloseableHttpResponse response = this.getPostResponse(url, headers, nvps)){
//        	System.out.println(response.getStatusLine().getStatusCode());
//        	System.out.println(EntityUtils.toString (response.getEntity(),"UTF-8"));
            cookie = Stream.of(response.getAllHeaders()).filter(header -> "Set-Cookie".equals(header.getName())).map(Header::getValue).map(v -> v.substring(0, v.indexOf(";"))).collect(Collectors.joining(";"));
        } catch (IOException e) {
            log.error("Get Post Response Error: ", e);
        }
        return cookie;
    }

    public void release() {
        try {
            httpClient.close();
        } catch (IOException e) {
            log.error("Http Client close incorrectly: ", e);
        }
    }

    /**
     * 从HttpResponse中获取Response Body
     *
     * @param response
     * @param url
     * @param charset
     * @return
     */
    private String handleResponse(final HttpResponse response, final String url, String charset) {
        String content = "";
        HttpEntity entity = response.getEntity();
        try {
            byte[] bytes = EntityUtils.toByteArray(entity);
            EntityUtils.consumeQuietly(entity);
            /**
             * 当charset编码为空时，需进行编码判定
             */
            if (StringUtils.isBlank(charset)) {
                charset = HtmlPageUtil.getEncoding(response, bytes);
            }
            log.info("Page Charset --->>> " + url + ": " + charset);
            content = new String(bytes, charset);
        } catch (IOException e) {
            log.error("Handle HttpResponse Error!");
        }

        return content;
    }
    public CloseableHttpResponse getResponse(final String url, final Header[] headers){
		HttpGet httpGet = new HttpGet(url);

		if(headers != null)
			Stream.of(headers).forEach(header -> httpGet.addHeader(header));
		httpGet.setConfig(requestConfig);
		try {
			return httpClient.execute(httpGet);
		} catch (IOException e) {
			log.error("=======Http Execute Error!========");
		}
		return null;
	}
}
