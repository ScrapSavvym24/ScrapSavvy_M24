package com.scrap.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scrap.entities.Scrap;
import com.scrap.exception.ResourceNotFoundException;
import com.scrap.repositories.ScrapRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ScrapService {
    @Autowired
    private ScrapRepository scrapRepository;

    public Scrap saveScrap(Scrap scrap) {
        scrap.setCreatedOn(LocalDateTime.now());
        scrap.setUpdatedOn(LocalDateTime.now());
        return scrapRepository.save(scrap);
    }

    public List<Scrap> getAllScrap() {
        return scrapRepository.findAll();
    }

    public Scrap updateScrap(Long id, Scrap scrap) {
        Optional<Scrap> existingScrap = scrapRepository.findById(id);
        if (existingScrap.isPresent()) {
            Scrap updatedScrap = existingScrap.get();
            updatedScrap.setProductQuantity(scrap.getProductQuantity());
            updatedScrap.setPricePerQuantity(scrap.getPricePerQuantity());
            updatedScrap.setProductDescription(scrap.getProductDescription());
            updatedScrap.setUpdatedOn(LocalDateTime.now());
            return scrapRepository.save(updatedScrap);
        } else {
            throw new ResourceNotFoundException("Scrap not found");
        }
    }

    public void deleteScrap(Long id) {
        scrapRepository.deleteById(id);
    }
}

// Similar structure for OrderService and PaymentService

