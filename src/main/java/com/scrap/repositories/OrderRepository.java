package com.scrap.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scrap.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
    // Custom query methods if needed
}
