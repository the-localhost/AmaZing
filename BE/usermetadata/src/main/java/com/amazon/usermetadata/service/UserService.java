package com.amazon.usermetadata.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazon.usermetadata.entity.UserMetaData;
import com.amazon.usermetadata.repository.UserMetaDataRepository;

@Service
public class UserService {
	
	@Autowired
	UserMetaDataRepository userMetaDataRepository;
	
	// saving the data into the database
	public UserMetaData saveUserMetaDataToDB(UserMetaData userMetaData) {
		return userMetaDataRepository.save(userMetaData);
	}
	
	// retrieve the data from the database for a user ID
	public UserMetaData getUserMetaDataFromDB(String userId) {
		return userMetaDataRepository.findByUniqueId(userId);
	}
}
