package com.scrap.dto;

import java.time.LocalDateTime;

public class PaymentDTO {

    private Long paymentId;
    private String transactionId;
    private boolean transactionStatus;
    private String modeOfPayment;
    private LocalDateTime createdOn;
    private LocalDateTime updatedOn;
    private Long orderId;

    // Constructors
    public PaymentDTO() {}

    public PaymentDTO(Long paymentId, String transactionId, boolean transactionStatus, String modeOfPayment, LocalDateTime createdOn, LocalDateTime updatedOn, Long orderId) {
        this.paymentId = paymentId;
        this.transactionId = transactionId;
        this.transactionStatus = transactionStatus;
        this.modeOfPayment = modeOfPayment;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
        this.orderId = orderId;
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

    public boolean getTransactionStatus() {
        return transactionStatus;
    }

    public void setTransactionStatus(boolean transactionStatus) {
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

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }
}
