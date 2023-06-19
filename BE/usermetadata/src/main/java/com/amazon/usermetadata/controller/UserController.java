package com.amazon.usermetadata.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amazon.usermetadata.entity.UserMetaData;

@RestController
@RequestMapping("/amazon/user")
public class UserController {
	
	@PostMapping("saveUserDetails")
	public UserMetaData saveUserDetails(@RequestBody UserMetaData userData) {
		return new UserMetaData();
	}
	
	@GetMapping("getUserDetails/{userId}")
	public UserMetaData getUserDetails(@PathVariable String userId) {
		return new UserMetaData();
	}
	
}
