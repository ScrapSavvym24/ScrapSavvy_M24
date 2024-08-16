package com.scrap.dto;

import java.time.LocalDateTime;

public class OrderDTO {
    
    private Long orderId;
    private String orderStatus;
    private LocalDateTime createdOn;
    private LocalDateTime updatedOn;
    private Long productId;
    private Long userProfileId;
    private String transactionId;

    // Constructors
    public OrderDTO() {}

    public OrderDTO(Long orderId, String orderStatus, LocalDateTime createdOn, LocalDateTime updatedOn, Long productId, Long userProfileId) {
        this.orderId = orderId;
        this.orderStatus = orderStatus;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
        this.productId = productId;
        this.userProfileId = userProfileId;
    }

    // Getters and Setters
    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
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

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getUserProfileId() {
        return userProfileId;
    }

    public void setUserProfileId(Long userProfileId) {
        this.userProfileId = userProfileId;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }
}
