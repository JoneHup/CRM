package com.run.crmresearch.config;

import org.apache.http.Header;
import org.apache.http.HttpHeaders;
import org.apache.http.message.BasicHeader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HeaderConfig {

	@Bean
	public Header[] xCarHeaders() {
		final Header userAgent = new BasicHeader(HttpHeaders.USER_AGENT,
				"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36");
		final Header upgrade = new BasicHeader("Upgrade-Insecure-Requests", "1");
		final Header accept = new BasicHeader(HttpHeaders.ACCEPT, "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");

		Header[] headers = { userAgent, upgrade, accept};
		return headers;
	}
}
