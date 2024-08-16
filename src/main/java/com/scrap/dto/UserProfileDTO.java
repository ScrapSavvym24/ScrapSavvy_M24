package com.scrap.dto;

public class UserProfileDTO {

    private Long userProfileId;
    private String name;
    private String email;
    private String companyName;
    private String companyAddress;
    private String userRole;
    private boolean isActive;
    private String mobile;
    private Long userId;

    public UserProfileDTO() {}

    public UserProfileDTO(Long userProfileId, String name, String email, String companyName, String companyAddress, String userRole, boolean isActive, String mobile, Long userId) {
        this.userProfileId = userProfileId;
        this.name = name;
        this.email = email;
        this.companyName = companyName;
        this.companyAddress = companyAddress;
        this.userRole = userRole;
        this.isActive = isActive;
        this.mobile = mobile;
        this.userId = userId;
    }

    public Long getUserProfileId() {
        return userProfileId;
    }

    public void setUserProfileId(Long userProfileId) {
        this.userProfileId = userProfileId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyAddress() {
        return companyAddress;
    }

    public void setCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean isActive) {
        this.isActive = isActive;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
