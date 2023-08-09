package com.amazon.addtocart.entity;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CartProduct {
	public Product product;
	public int productCount;
	public CartProduct(Product product, int productCount) {
		super();
		this.product = product;
		this.productCount = productCount;
	}
}
