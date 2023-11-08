package com.example.demo.boleta.domain;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface boletaRepository extends JpaRepository<boleta, Long> {
    Optional<boleta> findByUserIdAndProductId(Long userId, Long productId);
}
