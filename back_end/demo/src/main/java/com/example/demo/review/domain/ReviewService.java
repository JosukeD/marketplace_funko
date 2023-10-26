package com.example.demo.review.domain;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.product.domain.Product;
import com.example.demo.product.domain.ProductRepository;
import com.example.demo.user.domain.User;
import com.example.demo.user.domain.UserRepository;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    public Review create(Review review) {
        return reviewRepository.save(review);
    }

    public Review update(Long id, Review review) {
        Optional<Review> optionalReview = reviewRepository.findById(id);
        if (optionalReview.isPresent()) {
            Review foundReview = optionalReview.get();
            BeanUtils.copyProperties(review, foundReview, "id");
            return reviewRepository.save(foundReview);
        } else {
            return null;
        }
    }

    public void delete(Long id) {
        reviewRepository.deleteById(id);
    }

    public Iterable<Review> findByUser(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            return reviewRepository.findByUser(user);
        } else {
            return null;
        }
    }

    public Iterable<Review> findByProduct(Long productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            return reviewRepository.findByProduct(product);
        } else {
            return null;
        }
    }

    public Iterable<Review> findAll() {
        return reviewRepository.findAll();
    }
}