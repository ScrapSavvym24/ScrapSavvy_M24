package com.scrap.entities;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "categoryId")
    private Category category;

    @Column(nullable = false)
    private String productName;

    @Column(nullable = false)
    private int productQuantity;

    @Column(nullable = false)
    private int availQuantity;

    @Column(nullable = false)
    private double pricePerQuantity;

    @Column(nullable = false)
    private String productStatus;

    private String productDescription;

    @Column(nullable = false)
    private LocalDateTime createdOn;

    @Column(nullable = false)
    private LocalDateTime updatedOn;

    // Default constructor
    public Product() {
    }

    // Parameterized constructor
    public Product(Category category, String productName, int productQuantity, int availQuantity, double pricePerQuantity, String productStatus, String productDescription, LocalDateTime createdOn, LocalDateTime updatedOn) {
        this.category = category;
        this.productName = productName;
        this.productQuantity = productQuantity;
        this.availQuantity = availQuantity;
        this.pricePerQuantity = pricePerQuantity;
        this.productStatus = productStatus;
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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(int productQuantity) {
        this.productQuantity = productQuantity;
    }

    public int getAvailQuantity() {
        return availQuantity;
    }

    public void setAvailQuantity(int availQuantity) {
        this.availQuantity = availQuantity;
    }

    public double getPricePerQuantity() {
        return pricePerQuantity;
    }

    public void setPricePerQuantity(double pricePerQuantity) {
        this.pricePerQuantity = pricePerQuantity;
    }

    public String getProductStatus() {
        return productStatus;
    }

    public void setProductStatus(String productStatus) {
        this.productStatus = productStatus;
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
        return "Products{" +
                "productId=" + productId +
                ", category=" + category +
                ", productName='" + productName + '\'' +
                ", productQuantity=" + productQuantity +
                ", availQuantity=" + availQuantity +
                ", pricePerQuantity=" + pricePerQuantity +
                ", productStatus='" + productStatus + '\'' +
                ", productDescription='" + productDescription + '\'' +
                ", createdOn=" + createdOn +
                ", updatedOn=" + updatedOn +
                '}';
    }
}

