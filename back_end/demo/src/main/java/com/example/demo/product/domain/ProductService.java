package com.example.demo.product.domain;
// Product Service

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product create(Product product) {
        return productRepository.save(product);
    }

    public Product update(Long id, Product product) {
        Product foundProduct = productRepository.findById(id).get();
        BeanUtils.copyProperties(product, foundProduct, "id");
        return productRepository.save(foundProduct);
    }

    public void delete(Long id) {
        productRepository.deleteById(id);
    }

    public Iterable<Product> findAll() {
        return productRepository.findAll();
    }

    public Product findById(Long id) {
        return productRepository.findById(id).get();
    }
}
