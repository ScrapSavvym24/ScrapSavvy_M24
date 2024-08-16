package com.scrap.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.jaxb.SpringDataJaxb.OrderDto;
import org.springframework.stereotype.Service;

import com.scrap.entities.Order;
import com.scrap.exception.ResourceNotFoundException;
import com.scrap.repositories.OrderRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public Order saveOrder(Order order) {
        order.setOrderStatus(true);
        order.setCreatedOn(LocalDateTime.now());
        order.setUpdatedOn(LocalDateTime.now());
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order updateOrder(Long id, Order order) {
        Optional<Order> existingOrder = orderRepository.findById(id);
        if (existingOrder.isPresent()) {
            Order updatedOrder = existingOrder.get();
            updatedOrder.setOrderStatus(order.getOrderStatus());
            updatedOrder.setUpdatedOn(LocalDateTime.now());
            return orderRepository.save(updatedOrder);
        } else {
            throw new ResourceNotFoundException("Order not found");
        }
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}

