package com.scrap.controller;

import com.scrap.dto.ForgotPasswordRequest;
import com.scrap.dto.LoginRequest;
import com.scrap.dto.LoginResponse;
import com.scrap.dto.Response;
import com.scrap.dto.SignupRequest;
import com.scrap.dto.UserProfileDTO;
import com.scrap.entities.User;
import com.scrap.entities.UserProfile;
import com.scrap.repositories.UserProfileRepository;
import com.scrap.repositories.UserRepository;
import com.scrap.security.JwtTokenUtil;
import com.scrap.services.UserProfileService;
import com.scrap.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class AuthController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private UserProfileService userProfileService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private UserProfileRepository userProfileRepository;

    
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signupRequest) {
        try {
            Optional<User> existingUser = userRepository.findByEmail(signupRequest.getEmail());
            
            if (existingUser.isPresent()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists");
            }
            User user = userService.registerUser(signupRequest.getEmail(), signupRequest.getPassword());
            UserProfile userProfile = userProfileService.registerUserProfile(signupRequest, user);

            return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
   
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        User user = userRepository.getByEmail(loginRequest.getEmail());
        if (user.getPassword().equals(loginRequest.getPassword())) {
            String token = jwtTokenUtil.generateToken(user.getEmail());
            UserProfile userProfile = userProfileService.getUserProfileByEmail(user.getEmail());
            LoginResponse loginResponse = new LoginResponse(token, userProfile);
            return ResponseEntity.status(HttpStatus.OK).body(loginResponse);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
    }

    @PutMapping("/forgot_password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest forgotPasswordRequest) {
        if (!forgotPasswordRequest.getPassword().equals(forgotPasswordRequest.getConfirmPassword())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Passwords not matching");
        }
        User user = userRepository.getByEmail(forgotPasswordRequest.getEmail());
        if (user != null) {
            user.setPassword(forgotPasswordRequest.getPassword());
            User user1 = userService.updateUser(user);
            return ResponseEntity.status(HttpStatus.OK).body("Password changed successfully!");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid email");
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logoutUser(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok("Logout successful");
    }

    @GetMapping("/verify/{userProfileId}")
    public ResponseEntity<?> verifyUser(@PathVariable Long userProfileId) {
        UserProfile userProfile = userProfileService.getUserProfile(userProfileId);
        if (userProfile != null){
            return new ResponseEntity<>(userProfile, HttpStatus.OK);    
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
    }

    @GetMapping("/user/profile")
    public ResponseEntity<?> getUserProfile(@RequestHeader("Authorization") String token) {
        if (token != null && jwtTokenUtil.validateToken(token)) {
            String username = jwtTokenUtil.getUsernameFromToken(token);
            Optional<User> userOptional = userService.findByEmail(username);
            if (userOptional.isPresent()) {
                return ResponseEntity.ok(userOptional.get());
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
    }

    @PutMapping("/update_profile/{userProfileId}")
    public ResponseEntity<?> updateProfile(@PathVariable Long userProfileId, @RequestBody UserProfileDTO userProfileDTO) {
        UserProfile userProfile = userProfileService.getUserProfile(userProfileId);
        if (userProfile != null){
            User user = userRepository.getOne(userProfileDTO.getUserId());
            userProfile.setCompanyName(userProfileDTO.getCompanyName());
            userProfile.setCompanyAddress(userProfileDTO.getCompanyAddress());
            userProfile.setEmailId(userProfileDTO.getEmail());
            userProfile.setMobile(userProfileDTO.getMobile());
            userProfile.setName(userProfileDTO.getName());
            userProfile.setUpdatedOn(LocalDateTime.now());
            userProfile.setUser(user);
            userProfileRepository.save(userProfile);
            return new ResponseEntity<>(userProfile, HttpStatus.OK);    
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid email");
    }

    @GetMapping("/profile/{userProfileId}")
    public ResponseEntity<?> getProfile(@PathVariable Long userProfileId) {
        UserProfile userProfile = userProfileService.getUserProfile(userProfileId);
        if (userProfile != null){
            return new ResponseEntity<>(userProfile, HttpStatus.OK);    
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid email");
    }
}
