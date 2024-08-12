package com.scrap.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.scrap.dto.ProductDTO;
import com.scrap.entities.Category;
import com.scrap.entities.Product;
import com.scrap.entities.Scrap;
import com.scrap.entities.UserProfile;
import com.scrap.repositories.CategoryRepository;
import com.scrap.services.ProductService;
import com.scrap.services.ScrapService;
import com.scrap.services.UserProfileService;

import java.util.List;

@RestController
@RequestMapping("/api/company")
public class CompanyController {
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

    @GetMapping("/get_all_products/{id}")
    public ResponseEntity<List<Product>> getAllProducts(@PathVariable Long id) {
        List<Product> scrapList = productService.getAllproducts(id);
        return new ResponseEntity<>(scrapList, HttpStatus.OK);
    }

    @PutMapping("/product/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody ProductDTO productDTO) {
        Product updatedProduct = productService.updateProduct(productDTO, id);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }

    @DeleteMapping("/product/{userProfileId}/{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long userProfileId, @PathVariable Long productId) {
        productService.deleteProduct(userProfileId, productId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
