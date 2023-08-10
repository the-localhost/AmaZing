package com.amazon.usermetadata.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amazon.usermetadata.entity.UserMetaData;

public interface UserMetaDataRepository extends JpaRepository<UserMetaData, Long> {
	UserMetaData save(UserMetaData userMetaData);
	UserMetaData findByUniqueId(String userId);
}
