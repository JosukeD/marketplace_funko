package com.example.demo.review.domain;

import java.util.List;
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

    public List<Review> findAll() {
        return reviewRepository.findAll();
    }

    public Optional<Review> findById(Long id) {
        return reviewRepository.findById(id);
    }

    public Review create(Review review) {
        return reviewRepository.save(review);
    }

    public Review update(Long id, Review review) {
        Review foundReview = reviewRepository.findById(id).orElseThrow();
        BeanUtils.copyProperties(review, foundReview, "id");
        return reviewRepository.save(foundReview);
    }

    public void delete(Long id) {
        reviewRepository.deleteById(id);
    }

    public List<Review> findByUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow();
        return reviewRepository.findByUser(user);
    }

    public List<Review> findByProduct(Long productId) {
        Product product = productRepository.findById(productId).orElseThrow();
        return reviewRepository.findByProduct(product);
    }
}
