package com.scrap.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scrap.entities.Scrap;

public interface ScrapRepository extends JpaRepository<Scrap, Long> {
    // Custom query methods if needed
}
