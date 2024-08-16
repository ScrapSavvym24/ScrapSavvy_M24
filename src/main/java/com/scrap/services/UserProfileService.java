package com.scrap.services;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scrap.dto.SignupRequest;
import com.scrap.entities.User;
import com.scrap.entities.UserProfile;
import com.scrap.repositories.UserProfileRepository;

@Service
public class UserProfileService {

	@Autowired
	private UserProfileRepository userProfileRepository;
	
//	public UserProfile registerUserProfile(SignupRequest signupRequest) {
//    	UserProfile userProfile = new UserProfile();
//    	
//        userProfile.setName(signupRequest.getName());
//        userProfile.setEmailId(signupRequest.getEmail());
//        userProfile.setCompanyName(signupRequest.getCompanyName());
//        userProfile.setMobile(signupRequest.getMobile());
//        userProfile.setCompanyAddress(signupRequest.getCompanyAddress());
//        userProfile.setUserRole(signupRequest.getRole());
//       
//        userProfile.setCreatedOn(LocalDateTime.now());
//        userProfile.setUpdatedOn(LocalDateTime.now());
//        return userProfileRepository.save(userProfile);
//       
//    }
	
	public UserProfile registerUserProfile(SignupRequest signupRequest, User user) {
	    // Check if the email already exists
	    if (userProfileRepository.existsByEmail(signupRequest.getEmail())) {
	        throw new IllegalArgumentException("Email already exists");
	    }

	    // Create a new UserProfile instance
	        // Create the UserProfile object
	        UserProfile userProfile = new UserProfile();
	        userProfile.setName(signupRequest.getName());
	        userProfile.setEmailId(signupRequest.getEmail());
	        userProfile.setMobile(signupRequest.getMobile());
	        userProfile.setCompanyName(signupRequest.getCompanyName());
	        userProfile.setCompanyAddress(signupRequest.getCompanyAddress());
	        userProfile.setCreatedOn(LocalDateTime.now());
	        userProfile.setUpdatedOn(LocalDateTime.now());
	        userProfile.setUserRole(signupRequest.getUserRole());
			userProfile.setUser(user);

	        // Save the UserProfile entity
	        return userProfileRepository.save(userProfile);
	    }
	

	
public UserProfile getUserProfileByEmail(String email) {
	    

	    // Save the UserProfile to the repository
	    return userProfileRepository.getByEmail(email);
	}
	
	public UserProfile getUserProfile(long profileId) {
	    

	    // Save the UserProfile to the repository
	    return userProfileRepository.getByUserProfileId(profileId);
	}
	
	//this crud is for user change it accordingly to userprofile
//	public Optional<User> findByUsername(String username) {
//        return userRepository.findByUsername(username);
//    }
//
//    public boolean existsByUsername(String username) {
//        return userRepository.existsByUsername(username);
//    }
//
//    public User updateUser(User user) {
//        user.setUpdatedOn(LocalDateTime.now());
//        return userRepository.save(user);
//    }
//	
	
}
