package com.scrap.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.scrap.dto.ProductDTO;
import com.scrap.entities.Category;
import com.scrap.entities.Product;
import com.scrap.entities.UserProfile;
import com.scrap.repositories.CategoryRepository;
import com.scrap.services.ProductService;
import com.scrap.services.UserProfileService;

import java.util.List;

@RestController
@RequestMapping("/api/scrapyard")
public class ScrapyardController {
    @Autowired
    private ProductService productService;

    @Autowired
    private UserProfileService userProfileService;

    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping("/add_product")
    public ResponseEntity<?> addProduct(@RequestBody ProductDTO productDTO) {
        UserProfile userProfile = userProfileService.getUserProfile(productDTO.getUserProfileId());
        if (userProfile != null){
            Product product = new Product();
            product.setUserProfile(userProfile);
            Category category = categoryRepository.getOne(productDTO.getCategoryId());
            product.setCategory(category);
            product.setProductName(productDTO.getProductName());
            product.setProductQuantity(productDTO.getProductQuantity());
            product.setAvailQuantity(productDTO.getAvailQuantity());
            product.setPricePerQuantity(productDTO.getPricePerQuantity());
            product.setProductStatus(productDTO.isProductStatus());
            product.setProductDescription(productDTO.getProductDescription());
            product.setCreatedOn(productDTO.getCreatedOn());
            product.setUpdatedOn(productDTO.getUpdatedOn());
            productService.saveProduct(product);
            return ResponseEntity.status(HttpStatus.CREATED).body("Product added successfully!");
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/get_my_products/{id}")
    public ResponseEntity<List<Product>> getAllProductsByUser(@PathVariable Long id) {
        UserProfile userProfile = userProfileService.getUserProfile(id);
        if (userProfile != null){
            List<Product> scrapList = productService.getAllproducts(id);
            return new ResponseEntity<>(scrapList, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("/get_all_products/{id}")
    public ResponseEntity<List<Product>> getAllProducts(@PathVariable Long id) {
        UserProfile userProfile = userProfileService.getUserProfile(id);
        if (userProfile != null){
            List<Product> scrapList = productService.getAllproducts();
            return new ResponseEntity<>(scrapList, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PutMapping("/product/{userId}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long userId, @RequestBody ProductDTO productDTO) {
        UserProfile userProfile = userProfileService.getUserProfile(userId);
        Product product = productService.getAllproduct(productDTO.getProductId());
        if (userProfile != null && product != null){
            Product updatedProduct = productService.updateProduct(productDTO, userId);
            return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }

    @DeleteMapping("/product/{userProfileId}/{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long userProfileId, @PathVariable Long productId) {
        UserProfile userProfile = userProfileService.getUserProfile(userProfileId);
        Product product = productService.getAllproduct(productId);
        if (userProfile != null && product != null){
            productService.deleteProduct(userProfileId, productId);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }
}