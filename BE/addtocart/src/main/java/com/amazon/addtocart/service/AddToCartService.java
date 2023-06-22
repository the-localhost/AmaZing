package com.amazon.addtocart.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazon.addtocart.entity.Cart;
import com.amazon.addtocart.repository.AddToCartRepository;

@Service
public class AddToCartService {
	@Autowired
	public AddToCartRepository addToCartRepository;
	
	public void addToCart(Cart cart) {
		addToCartRepository.save(cart);
	}
	
	public void deleteFromCart(Cart cart) {
		addToCartRepository.delete(cart);
	}
	
	public void displayAllCartItemsForUser(UUID userId) {
		addToCartRepository.findByUserId(userId);
	}
}
