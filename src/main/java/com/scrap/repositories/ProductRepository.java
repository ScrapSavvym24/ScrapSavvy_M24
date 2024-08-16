package com.scrap.repositories;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.scrap.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT p FROM Product p WHERE p.userProfile.userProfileId = :userProfileId ORDER BY p.createdOn DESC")
    List<Product> findAllProducts(@Param("userProfileId") Long userProfileId);

    @Query("SELECT p FROM Product p WHERE p.productStatus = true ORDER BY p.createdOn DESC")
    List<Product> findAllActiveProducts();

    @Query("SELECT p FROM Product p WHERE p.productId = :productId AND p.productStatus = true AND p.userProfile.userProfileId = :userProfileId ORDER BY p.createdOn DESC")
    Product findByProductIdAndUserProfileId(@Param("productId") Long productId, @Param("userProfileId") Long userProfileId);

    @Modifying
    @Transactional
    @Query("delete FROM Product p WHERE p.productId = :productId AND p.userProfile.userProfileId = :userProfileId")
    void deleteByProductIdAndUserProfileId(@Param("productId") Long productId, @Param("userProfileId") Long userProfileId);
}
