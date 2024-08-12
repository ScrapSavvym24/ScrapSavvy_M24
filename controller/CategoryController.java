package com.scrap.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.scrap.entities.Category;
import com.scrap.entities.Scrap;
import com.scrap.repositories.CategoryRepository;
import com.scrap.services.ScrapService;

import java.util.List;

@RestController
@RequestMapping("/api/company")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/get_categories")
    public ResponseEntity<List<Category>> viewListedScrap() {
        List<Category> catList = categoryRepository.findAll();
        return new ResponseEntity<>(catList, HttpStatus.OK);
    }
}
