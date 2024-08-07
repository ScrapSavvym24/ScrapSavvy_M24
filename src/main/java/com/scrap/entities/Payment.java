package com.scrap.entities;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentId;

    @Column(nullable = false, unique = true)
    private String transactionId;

    @Column(nullable = false)
    private String transactionStatus;

    @Column(nullable = false)
    private String modeOfPayment;

    @Column(nullable = false)
    private LocalDateTime createdOn;

    @Column(nullable = false)
    private LocalDateTime updatedOn;

    @OneToMany(mappedBy = "payment")
    private List<Order> orders;

    // Default constructor
    public Payment() {
    }

    // Parameterized constructor
    public Payment(String transactionId, String transactionStatus, String modeOfPayment, LocalDateTime createdOn, LocalDateTime updatedOn) {
        this.transactionId = transactionId;
        this.transactionStatus = transactionStatus;
        this.modeOfPayment = modeOfPayment;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
    }

    // Getters and Setters
    public Long getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(Long paymentId) {
        this.paymentId = paymentId;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public String getTransactionStatus() {
        return transactionStatus;
    }

    public void setTransactionStatus(String transactionStatus) {
        this.transactionStatus = transactionStatus;
    }

    public String getModeOfPayment() {
        return modeOfPayment;
    }

    public void setModeOfPayment(String modeOfPayment) {
        this.modeOfPayment = modeOfPayment;
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

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    // toString method
    @Override
    public String toString() {
        return "Payments{" +
                "paymentId=" + paymentId +
                ", transactionId='" + transactionId + '\'' +
                ", transactionStatus='" + transactionStatus + '\'' +
                ", modeOfPayment='" + modeOfPayment + '\'' +
                ", createdOn=" + createdOn +
                ", updatedOn=" + updatedOn +
                '}';
    }
}
