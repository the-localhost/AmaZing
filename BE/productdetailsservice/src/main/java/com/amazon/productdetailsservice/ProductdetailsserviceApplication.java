package com.amazon.productdetailsservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class ProductdetailsserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductdetailsserviceApplication.class, args);
	}

}
