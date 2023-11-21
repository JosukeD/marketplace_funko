package com.example.demo.review.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public Review create(User user, Product product, String text) {
        // Implement logic to create a new review
        // For example, save the review to the repository
        Review review = new Review(user, product, text);
        return reviewRepository.save(review);
    }

    public List<Review> findByProduct(Product product) {
        // Implement logic to retrieve all reviews for a specific product
        // For example, use reviewRepository.findByProduct(product)
        return reviewRepository.findByProduct(product);
    }

    // Add other methods as needed
}
