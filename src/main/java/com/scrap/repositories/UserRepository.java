package com.scrap.repositories;

import com.scrap.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    User getByEmail(String email);
    boolean existsByEmail(String email);
    //Optional<User> findByUserName(String);
    
}
