package com.example.demo.user.domain;


import java.util.List;
import jakarta.persistence.*;
import java.util.ArrayList;

import com.example.demo.product.domain.Product;
import com.example.demo.review.domain.Review;


@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;

    @OneToMany(mappedBy="user")
    private List<Product> products = new ArrayList<Product>();

    @OneToMany(mappedBy="user")
    private List<Review> reviews = new ArrayList<Review>();

    public User() {}

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User(Long id, String username, String password, List<Product> products, List<Review> reviews) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.products = products;
        this.reviews = reviews;
    }

    public Long getId() {
        return this.id;
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public List<Product> getProducts() {
        return this.products;
    }

    public List<Review> getReviews() {
        return this.reviews;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void addProduct(Product product) {
        this.products.add(product);
    }

    public void addReview(Review review) {
        this.reviews.add(review);
    }
}   
