package com.example.demo.review.domain;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.review.domain.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}