package com.devops.api;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@EnableDiscoveryClient
@Slf4j
public class DevopsApplication {

//	@Bean
//	@LoadBalanced
//	public WebClient.Builder loadBalancedWebClientBuilder() {
//		return WebClient.builder();
//	}

	public static void main(String[] args) {

		SpringApplication.run(DevopsApplication.class, args);

	}

}
