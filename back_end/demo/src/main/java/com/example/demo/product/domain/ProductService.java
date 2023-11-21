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
    private WalletService walletService; // Assuming you have a WalletService for wallet operations

    public Product create(Product product) {
        // Implement logic to create a new product
        // For example, save the product to the repository
        return productRepository.save(product);
    }

    public Product update(Long id, Product updatedProduct) {
        // Implement logic to update an existing product
        // For example, retrieve the existing product by ID, update its fields, and save it back to the repository
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found"));

        BeanUtils.copyProperties(updatedProduct, existingProduct, "id", "user");
        return productRepository.save(existingProduct);
    }

    public void delete(Long id) {
        // Implement logic to delete a product by ID
        // For example, check if the product exists, and if yes, delete it from the repository
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found"));

        productRepository.delete(existingProduct);
    }

    public Iterable<Product> findAll() {
        // Implement logic to retrieve all products from the repository
        // For example, use productRepository.findAll()
        return productRepository.findAll();
    }

    public Optional<Product> findById(Long id) {
        // Implement logic to retrieve a product by ID from the repository
        // For example, use productRepository.findById(id)
        return productRepository.findById(id);
    }

    public ResponseEntity<String> buyProduct(Long productId, User buyer) {
        // Implement logic to handle the purchase
        // For example, update product status, create a transaction record, etc.

        // Assuming you have a method in WalletService to deduct the purchase amount
        Optional<Product> optionalProduct = productRepository.findById(productId);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            Wallet buyerWallet = buyer.getWallet();
            
            // Check if the buyer has enough funds in the wallet
            if (buyerWallet.getAmount() >= product.getPrice()) {
                // Deduct the purchase amount from the wallet
                walletService.deductAmount(buyerWallet, product.getPrice());

                // Implement any other purchase-related logic

                return ResponseEntity.status(HttpStatus.OK).body("Product purchased successfully");
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insufficient funds");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }
}
