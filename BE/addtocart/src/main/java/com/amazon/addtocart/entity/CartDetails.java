package com.amazon.addtocart.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CartDetails {
	public UUID userId;
	public ArrayList<Product> list;
	
	// WHY IS LOMBOK NOT WORKING HERE???
	public void setUserId(UUID userId) {
		this.userId = userId;
	}

	public void setList(ArrayList<Product> products) {
		this.list = products;
	}
	
	public List<Product> getList(){
		return this.list;
	}
}
