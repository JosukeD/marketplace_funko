package com.example.demo.review.domain;

import jakarta.persistence.*;

import com.example.demo.user.domain.User;
import com.example.demo.product.domain.Product;

@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="product_id")
    private Product product;

    public Review() {}

    public Review(String title, String description, User user, Product product) {
        this.title = title;
        this.description = description;
        this.user = user;
        this.product = product;
    }

    public Review(Long id, String title, String description, User user, Product product) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.user = user;
        this.product = product;
    }

    public Long getId() {
        return this.id;
    }

    public String getTitle() {
        return this.title;
    }

    public String getDescription() {
        return this.description;
    }

    public User getUser() {
        return this.user;
    }

    public Product getProduct() {
        return this.product;
    }
}
