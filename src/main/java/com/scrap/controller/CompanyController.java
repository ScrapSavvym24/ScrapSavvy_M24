package com.scrap.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.scrap.entities.Scrap;
import com.scrap.services.ScrapService;

import java.util.List;

@RestController
@RequestMapping("/api/company")
public class CompanyController {
    @Autowired
    private ScrapService scrapService;

    @PostMapping("/scrap")
    public ResponseEntity<Scrap> listScrap(@RequestBody Scrap scrap) {
        Scrap createdScrap = scrapService.saveScrap(scrap);
        return new ResponseEntity<>(createdScrap, HttpStatus.CREATED);
    }

    @GetMapping("/scrap")
    public ResponseEntity<List<Scrap>> viewListedScrap() {
        List<Scrap> scrapList = scrapService.getAllScrap();
        return new ResponseEntity<>(scrapList, HttpStatus.OK);
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
