package com.amazon.productdetailsservice.repository;

import java.math.BigInteger;
import java.util.List;
import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.amazon.productdetailsservice.entity.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, BigInteger> {
	Product save(Product product);
	List<Product> findAll();
	Product findByProductId(UUID productId);
}
