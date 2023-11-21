package com.example.demo.review.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public Review create(User user, Product product, String text) {
        Review review = new Review(user, product, text);
        return reviewRepository.save(review);
    }

    public List<Review> findByProduct(Product product) {
        return reviewRepository.findByProduct(product);
    }

    public List<Review> findByUser(User user) {
        return reviewRepository.findByUser(user);
    }

    public void delete(Long id) {
        Review existingReview = reviewRepository.findById(id)
                .orElseThrow(() -> new ReviewNotFoundException("Review not found"));

        reviewRepository.delete(existingReview);
    }

    public Iterable<Review> findAll() {
        return reviewRepository.findAll();
    }

    public Review findById(Long id) {
        return reviewRepository.findById(id)
                .orElseThrow(() -> new ReviewNotFoundException("Review not found"));
    }

    public Review update(Long id, Review updatedReview) {
        Review existingReview = reviewRepository.findById(id)
                .orElseThrow(() -> new ReviewNotFoundException("Review not found"));

        existingReview.setText(updatedReview.getText());
        return reviewRepository.save(existingReview);
    }

    public List<Review> findByUserAndProduct(User user, Product product) {
        return reviewRepository.findByUserAndProduct(user, product);
    }
}
