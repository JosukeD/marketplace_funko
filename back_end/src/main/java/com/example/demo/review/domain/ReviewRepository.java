package com.example.demo.review.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.product.domain.Product;
import com.example.demo.user.domain.User;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    public Iterable<Review> findByUser(User user);

    public Iterable<Review> findByProduct(Product product);
}
