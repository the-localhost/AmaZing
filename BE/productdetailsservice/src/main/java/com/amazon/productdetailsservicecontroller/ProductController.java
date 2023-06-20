package com.amazon.productdetailsservicecontroller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amazon.productdetailsservice.entity.Product;
import com.amazon.productdetailsservice.service.ProductService;

@RestController
@RequestMapping ("/amazon/products")
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@PostMapping("/save")
	public Product saveProduct(@RequestBody Product product) {
		Product savedProduct = productService.saveProduct(product);
		return savedProduct;
	}
	
	@GetMapping("/get-all-products")
	public List<Product> getAllProducts(){
		List<Product> allProducts = productService.getAllProducts();
		return allProducts;
	}
	
	@GetMapping("/search/ {id}")
	public Product getProductById(@PathVariable UUID productId) {
		Optional<Product> optionalProduct = productService.getByProductId(productId);
		if(optionalProduct.isEmpty()) {
			return null;
		}
		return optionalProduct.get();
	}
	
}
