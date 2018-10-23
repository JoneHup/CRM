package com.run.crmresearch.config;

import java.nio.charset.CodingErrorAction;
import java.util.Arrays;

import javax.net.ssl.SSLContext;

import org.apache.http.Consts;
import org.apache.http.client.config.AuthSchemes;
import org.apache.http.client.config.CookieSpecs;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.config.ConnectionConfig;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.ssl.SSLContexts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ClientHandler {

	@Value("${asyncClient.pool.max.total}")
	private int maxTotal;

	@Value("${asyncClient.pool.max.perRoute}")
	private int maxPerRoute;

	@Value("${asyncClient.timeout.requestConfig.socket}")
	private int requestConfigSocketTimeout;

	@Value("${asyncClient.timeout.requestConfig.connection}")
	private int requestConfigConnectionTimeout;

	@Value("${asyncClient.timeout.requestConfig.connectionRequest}")
	private int requestConfigConnectionRequestTimeout;

	@Value("${asyncClient.timeout.ioReactorConfig.connection}")
	private int ioReactorConfigConnectionTimeout;

	@Value("${asyncClient.timeout.ioReactorConfig.so}")
	private int ioReactorConfigSoTimeout;

	/** http/https 策略 **/
	SSLContext sslcontext = SSLContexts.createSystemDefault();
	Registry<ConnectionSocketFactory> socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory>create()
			.register("http", PlainConnectionSocketFactory.INSTANCE)
			.register("https", new SSLConnectionSocketFactory(sslcontext)).build();

	private static final ConnectionConfig connectionConfig = ConnectionConfig.custom()
			.setMalformedInputAction(CodingErrorAction.IGNORE).setUnmappableInputAction(CodingErrorAction.IGNORE)
			.setCharset(Consts.UTF_8).build();

	/** RequestConfig 默认策略 **/
	private static final RequestConfig defaultRequestConfig = RequestConfig.custom().setCookieSpec(CookieSpecs.DEFAULT)
			.setExpectContinueEnabled(true)
			.setTargetPreferredAuthSchemes(Arrays.asList(AuthSchemes.NTLM, AuthSchemes.DIGEST))
			.setProxyPreferredAuthSchemes(Arrays.asList(AuthSchemes.BASIC)).build();

	@Bean("httpClient")
	public CloseableHttpClient createClient() {
		PoolingHttpClientConnectionManager connManager = new PoolingHttpClientConnectionManager(socketFactoryRegistry);
		connManager.setDefaultConnectionConfig(connectionConfig);
		connManager.setMaxTotal(maxTotal);
		connManager.setDefaultMaxPerRoute(maxPerRoute);
		
		return HttpClients.custom()
	            .setConnectionManager(connManager)
				.disableCookieManagement()
	            .setDefaultRequestConfig(defaultRequestConfig)
	            .build();
	}
	
	@Bean("requestConfig")
	public RequestConfig createRequestConfig() {
		return RequestConfig.copy(defaultRequestConfig)
                .setSocketTimeout(requestConfigSocketTimeout)
                .setConnectTimeout(requestConfigConnectionTimeout)
                .setConnectionRequestTimeout(requestConfigConnectionRequestTimeout)
                .build();
	}
}
