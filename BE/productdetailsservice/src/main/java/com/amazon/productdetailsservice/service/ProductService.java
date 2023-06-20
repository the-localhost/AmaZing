package com.amazon.productdetailsservice.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazon.productdetailsservice.entity.Product;
import com.amazon.productdetailsservice.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository productRepository;
	
	public Product saveProduct(Product product) {
		Product savedProduct = productRepository.save(product);
		return savedProduct;
	}
	
	public List<Product> getAllProducts() {
		List<Product> products = productRepository.findAll();
		return products;
	}
	
	public Optional<Product> getByProductId(UUID productId) {
		Product product = productRepository.findByProductId(productId);
		Optional<Product> opt = Optional.ofNullable(product);
		return opt;
	}
}
