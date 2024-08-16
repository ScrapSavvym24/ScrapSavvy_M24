package com.scrap.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scrap.entities.User;
import com.scrap.entities.UserProfile;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Long>   {

	boolean existsByEmail(String email);
	UserProfile getByUserProfileId(long userProfileId);
	UserProfile getByUser(User user);
	UserProfile getByEmail(String email);
}
