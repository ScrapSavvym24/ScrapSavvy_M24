package com.scrap.dto;

public class PurchaseRequest {
    private Long productId;
    private Integer orderedQuantity;
    private Long userProfileId;
    private Long paymentId;

    // Default constructor
    public PurchaseRequest() {
    }

    // Parameterized constructor
    public PurchaseRequest(Long productId, Integer orderedQuantity, Long userProfileId, Long paymentId) {
        this.productId = productId;
        this.orderedQuantity = orderedQuantity;
        this.userProfileId = userProfileId;
        this.paymentId = paymentId;
    }

    // Getters and Setters
    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Integer getOrderedQuantity() {
        return orderedQuantity;
    }

    public void setOrderedQuantity(Integer orderedQuantity) {
        this.orderedQuantity = orderedQuantity;
    }

    public Long getUserProfileId() {
        return userProfileId;
    }

    public void setUserProfileId(Long userProfileId) {
        this.userProfileId = userProfileId;
    }

    public Long getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(Long paymentId) {
        this.paymentId = paymentId;
    }

    // toString method
    @Override
    public String toString() {
        return "PurchaseRequest{" +
                "productId=" + productId +
                ", orderedQuantity=" + orderedQuantity +
                ", userProfileId=" + userProfileId +
                ", paymentId=" + paymentId +
                '}';
    }
}

