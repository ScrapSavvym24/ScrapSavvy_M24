package com.scrap.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.scrap.dto.OrderDTO;
import com.scrap.dto.PaymentDTO;
import com.scrap.entities.Order;
import com.scrap.entities.Product;
import com.scrap.entities.UserProfile;
import com.scrap.repositories.ProductRepository;
import com.scrap.services.OrderService;
import com.scrap.services.PaymentService;
import com.scrap.services.ProductService;
import com.scrap.services.UserProfileService;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private UserProfileService userProfileService;

     @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody OrderDTO orderDto) {

        UserProfile userProfile = userProfileService.getUserProfile(orderDto.getUserProfileId());
        Product product = productService.getAllproduct(orderDto.getProductId());
        if (userProfile != null && product != null){
            Order order = new Order();
            order.setUserProfile(userProfile);
            order.setProduct(product);
            Order createdOrder = orderService.saveOrder(order);
            if (createdOrder != null){
                PaymentDTO paymentDTO = new PaymentDTO();
                paymentDTO.setTransactionId(orderDto.getTransactionId());
                paymentService.savePayment(paymentDTO);
                product.setProductStatus(false);
                productRepository.save(product);
            }
            return new ResponseEntity<>(order, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order order) {
        Order updatedOrder = orderService.updateOrder(id, order);
        return new ResponseEntity<>(updatedOrder, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

