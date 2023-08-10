package com.amazon.addtocart.service;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazon.addtocart.entity.Cart;
import com.amazon.addtocart.entity.CartDetails;
import com.amazon.addtocart.entity.CartProduct;
import com.amazon.addtocart.entity.Product;
import com.amazon.addtocart.repository.AddToCartRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AddToCartService {
	@Autowired
	public AddToCartRepository addToCartRepository;

	@Autowired
	public ProductDetailsProxy productDetailsProxy;

	public void addToCart(Cart cart) {
		if(cart.productCount > 1) {
			Cart cartProduct = addToCartRepository.findByProductId(cart.productId);
			cartProduct.setProductCount(cart.productCount);
			addToCartRepository.save(cartProduct);
		} else {
			addToCartRepository.save(cart);
		}
	}

	public void deleteFromCart(Cart cart) {
		if(cart.productCount > 0) {
			Cart cartProduct = addToCartRepository.findByProductId(cart.productId);
			cartProduct.setProductCount(cart.productCount);
			addToCartRepository.save(cartProduct);
		} else {
			addToCartRepository.deleteByProductId(cart.productId);
		}
	}

	public CartDetails displayAllCartItemsForUser(UUID userId) {
		
		CartDetails cartDetails = new CartDetails();
		cartDetails.setUserId(userId);

		ArrayList<Cart> cartItems = addToCartRepository.findByUserId(userId);
		ArrayList<CartProduct> products = new ArrayList<>();
		for(Cart cartItem: cartItems) {
			System.out.println("Cart Item: " + cartItem.getProductId());
			Product product = productDetailsProxy.getProductById(cartItem.getProductId());
			int productCount = cartItem.getProductCount();
			products.add(new CartProduct(product, productCount));
		}
		
		cartDetails.setList(products);
		
		return cartDetails;
	}
}
