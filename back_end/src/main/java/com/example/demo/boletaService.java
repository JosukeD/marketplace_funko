package com.example.demo.boleta.domain;

import com.example.demo.boleta.domain.boleta;
import com.example.demo.boleta.domain.boletaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class boletaService {

    private final boletaRepository boletaRepository;
    public boletaService(boletaRepository boletaRepository) {
        this.boletaRepository = boletaRepository;
    }

    public List<boleta> getBoletas() {
        return boletaRepository.findAll();
    }

    public boleta getBoleta(Long id) {
        return boletaRepository.findById(id).orElse(null);
    }


    public boleta saveBoleta(boleta boleta) {
        return boletaRepository.save(boleta);
    }

    public void deleteBoleta(Long id) {
        boletaRepository.deleteById(id);
    }
    public boleta getBoletaByUserAndProduct(Long userId, Long productId) {
        return boletaRepository.findByUserIdAndProductId(userId, productId).orElse(null);
    }
    
}
