package com.scrap.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scrap.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    
}
