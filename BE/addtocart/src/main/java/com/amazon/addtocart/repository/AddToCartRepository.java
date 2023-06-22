package com.amazon.addtocart.repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amazon.addtocart.entity.Cart;

@Repository
public interface AddToCartRepository extends JpaRepository<Cart, Long>{
	Cart save(Cart cart);
	void delete(Cart cart);
	ArrayList<Cart> findByUserId(UUID userId);
}
