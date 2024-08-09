package com.scrap.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scrap.entities.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    // Custom query methods if needed
}
