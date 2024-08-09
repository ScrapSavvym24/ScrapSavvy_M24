package com.scrap.entities;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Scrap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    private Long categoryId;
    private String productName;
    private Integer productQuantity;
    private Integer availQuantity;
    private Double pricePerQuantity;
    private String productDescription;
    private LocalDateTime createdOn;
    private LocalDateTime updatedOn;

    // Default constructor
    public Scrap() {
    }

    // Parameterized constructor
    public Scrap(Long categoryId, String productName, Integer productQuantity, Integer availQuantity, Double pricePerQuantity, String productDescription, LocalDateTime createdOn, LocalDateTime updatedOn) {
        this.categoryId = categoryId;
        this.productName = productName;
        this.productQuantity = productQuantity;
        this.availQuantity = availQuantity;
        this.pricePerQuantity = pricePerQuantity;
        this.productDescription = productDescription;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
    }

    // Getters and Setters
    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Integer getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(Integer productQuantity) {
        this.productQuantity = productQuantity;
    }

    public Integer getAvailQuantity() {
        return availQuantity;
    }

    public void setAvailQuantity(Integer availQuantity) {
        this.availQuantity = availQuantity;
    }

    public Double getPricePerQuantity() {
        return pricePerQuantity;
    }

    public void setPricePerQuantity(Double pricePerQuantity) {
        this.pricePerQuantity = pricePerQuantity;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
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

    // toString method
    @Override
    public String toString() {
        return "Scrap{" +
                "productId=" + productId +
                ", categoryId=" + categoryId +
                ", productName='" + productName + '\'' +
                ", productQuantity=" + productQuantity +
                ", availQuantity=" + availQuantity +
                ", pricePerQuantity=" + pricePerQuantity +
                ", productDescription='" + productDescription + '\'' +
                ", createdOn=" + createdOn +
                ", updatedOn=" + updatedOn +
                '}';
    }
}
