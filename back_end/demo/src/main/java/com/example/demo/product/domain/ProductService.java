package com.example.demo.product.domain;

import com.example.demo.user.domain.User;
import com.example.demo.wallet.domain.Wallet;
import com.example.demo.wallet.domain.WalletService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.example.demo.product.exception.ProductNotFoundException;

import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private WalletService walletService;

    public Product create(Product product) {
        return productRepository.save(product);
    }

    public Product update(Long id, Product updatedProduct) {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found"));

        BeanUtils.copyProperties(updatedProduct, existingProduct, "id", "user");
        return productRepository.save(existingProduct);
    }

    public void delete(Long id) {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found"));

        productRepository.delete(existingProduct);
    }

    public Iterable<Product> findAll() {
        return productRepository.findAll();
    }

    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }

    public ResponseEntity<String> buyProduct(Long productId, User buyer) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            Wallet buyerWallet = buyer.getWallet();
            
            if (buyerWallet.getAmount() >= product.getPrice()) {
                walletService.deductAmount(buyerWallet, product.getPrice());

                return ResponseEntity.status(HttpStatus.OK).body("Product purchased successfully");
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insufficient funds");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }
}
