package com.amazon.addtocart.entity;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Cart {
	@Id
	@GeneratedValue
	public long id;

	public UUID productId;
	public UUID userId;
	public int productCount;

	public Cart() {
		super();
	}

	public Cart(long id, UUID productId, UUID userId, int productCount) {
		super();
		this.id = id;
		this.productId = productId;
		this.userId = userId;
		this.productCount = productCount;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public UUID getProductId() {
		return productId;
	}

	public void setProductId(UUID productId) {
		this.productId = productId;
	}

	public UUID getUserId() {
		return userId;
	}

	public void setUserId(UUID userId) {
		this.userId = userId;
	}

	public int getProductCount() {
		return productCount;
	}

	public void setProductCount(int productCount) {
		this.productCount = productCount;
	}

	@Override
	public String toString() {
		return "Cart [id=" + id + ", productId=" + productId + ", userId=" + userId + ", productCount=" + productCount
				+ "]";
	}
	
	
}
