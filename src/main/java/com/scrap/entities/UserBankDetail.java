package com.scrap.entities;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_bank_details")
public class UserBankDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userBankDetailsId;

    @Column(nullable = false)
    private String bankName;

    @Column(nullable = false, unique = true)
    private String bankAccNo;

    @Column(nullable = false)
    private String bankAccIfsc;

    @Column(nullable = false)
    private String bankAccHolderName;

    @Column(nullable = false)
    private boolean isActive;

    @Column(nullable = false)
    private LocalDateTime createdOn;

    @Column(nullable = false)
    private LocalDateTime updatedOn;

    // @OneToOne(mappedBy = "bankDetails")
    // @JoinColumn(name = "user_id", referencedColumnName = "userId")
    // private User user;

    // Default constructor
    public UserBankDetail() {
    }

    // Parameterized constructor
    public UserBankDetail(String bankName, String bankAccNo, String bankAccIfsc, String bankAccHolderName, boolean isActive, LocalDateTime createdOn, LocalDateTime updatedOn) {
        this.bankName = bankName;
        this.bankAccNo = bankAccNo;
        this.bankAccIfsc = bankAccIfsc;
        this.bankAccHolderName = bankAccHolderName;
        this.isActive = isActive;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
    }

    // Getters and Setters
    public Long getUserBankDetailsId() {
        return userBankDetailsId;
    }

    public void setUserBankDetailsId(Long userBankDetailsId) {
        this.userBankDetailsId = userBankDetailsId;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getBankAccNo() {
        return bankAccNo;
    }

    public void setBankAccNo(String bankAccNo) {
        this.bankAccNo = bankAccNo;
    }

    public String getBankAccIfsc() {
        return bankAccIfsc;
    }

    public void setBankAccIfsc(String bankAccIfsc) {
        this.bankAccIfsc = bankAccIfsc;
    }

    public String getBankAccHolderName() {
        return bankAccHolderName;
    }

    public void setBankAccHolderName(String bankAccHolderName) {
        this.bankAccHolderName = bankAccHolderName;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
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

    // public User getUser() {
    //     return user;
    // }

    // public void setUser(User user) {
    //     this.user = user;
    // }

    // toString method
    @Override
    public String toString() {
        return "UserBankDetails{" +
                "userBankDetailsId=" + userBankDetailsId +
                ", bankName='" + bankName + '\'' +
                ", bankAccNo='" + bankAccNo + '\'' +
                ", bankAccIfsc='" + bankAccIfsc + '\'' +
                ", bankAccHolderName='" + bankAccHolderName + '\'' +
                ", isActive=" + isActive +
                ", createdOn=" + createdOn +
                ", updatedOn=" + updatedOn +
                '}';
    }
}

