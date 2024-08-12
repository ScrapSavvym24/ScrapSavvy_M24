package com.scrap.controller;


import com.scrap.dto.LoginRequest;
import com.scrap.dto.SignupRequest;
import com.scrap.entities.User;
import com.scrap.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signupRequest) {
        if (userService.existsByUsername(signupRequest.getUsername())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
        }

        User user = userService.registerUser(signupRequest.getUsername(), signupRequest.getPassword());
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest, HttpSession session) {
        Optional<User> userOptional = userService.findByUsername(loginRequest.getUsername());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(loginRequest.getPassword())) {
                session.setAttribute("user", user);
                user.setLoggedIn(true);
                userService.updateUser(user);
                return ResponseEntity.ok("Login successful");
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logoutUser(HttpSession session) {
        User user = (User) session.getAttribute("user");
        if (user != null) {
            user.setLoggedIn(false);
            userService.updateUser(user);
            session.invalidate();
            return ResponseEntity.ok("Logout successful");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No user logged in");
    }

//    @GetMapping("/user/profile")
//    public ResponseEntity<?> getUserProfile(HttpSession session) {
//        User user = (User) session.getAttribute("user");
//        if (user != null) {
//            return ResponseEntity.ok(user);
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
//        }
//    }
}

