package com.scrap.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scrap.dto.ProductDTO;
import com.scrap.entities.Product;
import com.scrap.entities.Scrap;
import com.scrap.exception.ResourceNotFoundException;
import com.scrap.repositories.ProductRepository;
import com.scrap.repositories.ScrapRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(Product product) {
        product.setCreatedOn(LocalDateTime.now());
        product.setUpdatedOn(LocalDateTime.now());
        product.setProductStatus(true);
        return productRepository.save(product);
    }

    public List<Product> getAllproducts(Long userProfileId) {
        return productRepository.findAllProducts(userProfileId);
    }
    public List<Product> getAllproducts() {
        return productRepository.findAllActiveProducts();
    }

    public Product getAllproduct(Long productId) {
        return productRepository.getOne(productId);
    }

    public Product updateProduct(ProductDTO productDTO, Long userId) {
        Product existingProduct = productRepository.findByProductIdAndUserProfileId(productDTO.getProductId(), userId);
        if (existingProduct != null) {
            Product updatedProduct = existingProduct;
        
        updatedProduct.setProductQuantity(productDTO.getProductQuantity());
        updatedProduct.setPricePerQuantity(productDTO.getPricePerQuantity());
        updatedProduct.setProductDescription(productDTO.getProductDescription());
        updatedProduct.setProductName(productDTO.getProductName());
        updatedProduct.setUpdatedOn(LocalDateTime.now());
        
        Product savedProduct = productRepository.save(updatedProduct);
            return savedProduct;
        } else {
            throw new ResourceNotFoundException("Scrap not found");
        }
    }

    public void deleteProduct(Long userProfileId, Long productId) {
        productRepository.deleteByProductIdAndUserProfileId(productId, userProfileId);
    }
}

