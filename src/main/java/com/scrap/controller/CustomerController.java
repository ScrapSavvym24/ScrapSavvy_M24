package com.scrap.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.scrap.dto.Feedback;
import com.scrap.dto.PurchaseRequest;
import com.scrap.entities.Order;
import com.scrap.entities.Scrap;
import com.scrap.services.ScrapService;

import java.util.List;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {
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

    @GetMapping("/orders")
    public ResponseEntity<List<Order>> viewOrderHistory(@RequestParam Long userProfileId) {
        // Implement the logic to fetch order history
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/feedback")
    public ResponseEntity<Void> provideFeedback(@RequestBody Feedback feedback) {
        // Implement the logic to handle feedback
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}

