package com.example.demo.product.domain;

import java.util.List;
import jakarta.persistence.*;
import java.util.ArrayList;

import com.example.demo.user.domain.User;
import com.example.demo.review.domain.Review;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @OneToMany(mappedBy="product")
    private List<Review> reviews = new ArrayList<Review>();

    public Product() {}

    public Product(String name, String description, User user) {
        this.name = name;
        this.description = description;
        this.user = user;
    }

    public Product(Long id, String name, String description, User user, List<Review> reviews) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.user = user;
        this.reviews = reviews;
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getDescription() {
        return this.description;
    }

    public User getUser() {
        return this.user;
    }

    public List<Review> getReviews() {
        return this.reviews;
    }
}