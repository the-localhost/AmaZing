package com.amazon.usermetadata.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amazon.usermetadata.entity.UserMetaData;
import com.amazon.usermetadata.service.UserService;

@RestController
@RequestMapping("/amazon/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("saveUserDetails")
	public UserMetaData saveUserDetails(@RequestBody UserMetaData userData) {
		UserMetaData user = userService.saveUserMetaDataToDB(userData);
		return user;
	}
	
	@GetMapping("getUserDetails/{userId}")
	public UserMetaData getUserDetails(@PathVariable String userId) {
		UserMetaData user = userService.getUserMetaDataFromDB(userId);
		return user;
	}
	
}
