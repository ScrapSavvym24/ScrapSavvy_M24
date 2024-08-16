package com.scrap.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.scrap.entities.User;
import com.scrap.repositories.UserRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;




@Service
public class UserService implements UserDetailsService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
        
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
                new ArrayList<>());
    }
    
    public User registerUser(String email, String password) {
        // Create the User object
        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setLoggedIn(false); // Default value for isLoggedIn
        user.setCreatedOn(LocalDateTime.now());
        user.setUpdatedOn(LocalDateTime.now());

        // Set the associated UserProfile
        // user.setUserProfile(userProfile);
        
        // Save the User entity
        return userRepository.save(user);
    }
    
    
    
    
    

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    

    public User updateUser(User user) {
        user.setUpdatedOn(LocalDateTime.now());
        return userRepository.save(user);
    }

	public boolean existsByEmail(String email) {
		return userRepository.existsByEmail(email);
	}
}

