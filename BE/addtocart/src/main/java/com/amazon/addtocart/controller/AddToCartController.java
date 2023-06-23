package com.amazon.addtocart.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amazon.addtocart.entity.Cart;
import com.amazon.addtocart.entity.CartDetails;
import com.amazon.addtocart.service.AddToCartService;

@RestController
@RequestMapping("/amazon/add-to-cart")
public class AddToCartController {
	
	@Autowired
	public AddToCartService addToCartService;
	
	@PostMapping("/add")
	public void addToCart(@RequestBody Cart cart) {
		addToCartService.addToCart(cart);
	}
	
	@DeleteMapping("/delete")
	public void deleteFromCart(@RequestBody Cart cart) {
		addToCartService.deleteFromCart(cart);
	}
	
	@GetMapping("/show/{userId}")
	public CartDetails showItems(@PathVariable UUID userId) {
		CartDetails cart = addToCartService.displayAllCartItemsForUser(userId);
		return cart;
	}
}
