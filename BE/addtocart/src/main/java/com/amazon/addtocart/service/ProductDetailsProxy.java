package com.amazon.addtocart.service;

import java.util.UUID;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.amazon.addtocart.entity.Product;


@FeignClient(name="product-details", url="localhost:8083")
public interface ProductDetailsProxy {
	@GetMapping("/amazon/products/search/{productId}")
	public Product getProductById(@PathVariable UUID productId);
}
