package com.amazon.usermetadata.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity(name = "User")
public class UserMetaData {
	@Id
	@GeneratedValue
	private long id;

	private String name;
	private String UniqueId;
	private String email;

	public UserMetaData() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserMetaData(long id, String name, String uniqueId, String email) {
		super();
		this.id = id;
		this.name = name;
		UniqueId = uniqueId;
		this.email = email;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUniqueId() {
		return UniqueId;
	}

	public void setUniqueId(String uniqueId) {
		UniqueId = uniqueId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
