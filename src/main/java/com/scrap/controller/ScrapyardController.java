package com.scrap.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.scrap.dto.PurchaseRequest;
import com.scrap.entities.Scrap;
import com.scrap.services.ScrapService;

import java.util.List;

@RestController
@RequestMapping("/api/scrapyard")
public class ScrapyardController {
    @Autowired
    private ScrapService scrapService;

    @GetMapping("/scrap")
    public ResponseEntity<List<Scrap>> viewAvailableScrap() {
        List<Scrap> scrapList = scrapService.getAllScrap();
        return new ResponseEntity<>(scrapList, HttpStatus.OK);
    }

    @PostMapping("/purchase")
    public ResponseEntity<Scrap> purchaseScrap(@RequestBody PurchaseRequest purchaseRequest) {
        // Implement the purchase logic
        // This might involve updating quantities and creating order entries
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/scrap/{id}")
    public ResponseEntity<Scrap> updateScrap(@PathVariable Long id, @RequestBody Scrap scrap) {
        Scrap updatedScrap = scrapService.updateScrap(id, scrap);
        return new ResponseEntity<>(updatedScrap, HttpStatus.OK);
    }

    @DeleteMapping("/scrap/{id}")
    public ResponseEntity<Void> deleteScrap(@PathVariable Long id) {
        scrapService.deleteScrap(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

