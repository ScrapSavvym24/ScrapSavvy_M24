package com.scrap.entities;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private boolean isLoggedIn;

    @Column(nullable = false)
    private LocalDateTime createdOn;

    @Column(nullable = false)
    private LocalDateTime updatedOn;

    // @OneToOne
    // @JoinColumn(name = "user_bank_details_id", referencedColumnName = "userBankDetailsId")
    // private UserBankDetail bankDetails;

    // @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = false)
    // @JoinColumn(name = "user_profile_id", referencedColumnName = "userProfileId")
    // private UserProfile userProfile;



    // Default constructor
    public User() {
    }

    // Parameterized constructor
    public User(String email, String password, boolean isLoggedIn, LocalDateTime createdOn, LocalDateTime updatedOn, UserBankDetail bankDetails, UserProfile userProfile) {
        this.email = email;
        this.password = password;
        this.isLoggedIn = isLoggedIn;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
        // this.bankDetails = bankDetails;
        // this.userProfile = userProfile;
    }

    // Getters and Setters
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isLoggedIn() {
        return isLoggedIn;
    }

    public void setLoggedIn(boolean loggedIn) {
        isLoggedIn = loggedIn;
    }

    public LocalDateTime getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(LocalDateTime createdOn) {
        this.createdOn = createdOn;
    }

    public LocalDateTime getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(LocalDateTime updatedOn) {
        this.updatedOn = updatedOn;
    }

    // public UserBankDetail getBankDetails() {
    //     return bankDetails;
    // }

    // public void setBankDetails(UserBankDetail bankDetails) {
    //     this.bankDetails = bankDetails;
    // }

    // public UserProfile getUserProfile() {
    //     return userProfile;
    // }

    // public void setUserProfile(UserProfile userProfile) {
    //     this.userProfile = userProfile;
    // }

    // toString method
    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", username='" + email + '\'' +
                ", password='" + password + '\'' +
                ", isLoggedIn=" + isLoggedIn +
                ", createdOn=" + createdOn +
                ", updatedOn=" + updatedOn +
                '}';
    }
}
