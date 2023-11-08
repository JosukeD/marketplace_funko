package com.example.demo.boleta.domain;

import com.example.demo.boleta.domain.boletaService;
import com.example.demo.boleta.domain.boleta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/boletas")
public class boletaController {

    private  boletaService boletaService;

    @Autowired
    public void BoletaController(boletaService boletaService) {
        this.boletaService = boletaService;
    }

    @GetMapping("/{userId}/{productId}")
    public boleta getBoleta(@PathVariable Long userId, @PathVariable Long productId) {
        return boletaService.getBoletaByUserAndProduct(userId, productId);
    }
}
