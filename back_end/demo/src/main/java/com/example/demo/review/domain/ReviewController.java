package com.example.demo.review.domain;

import com.example.demo.product.domain.Product;
import com.example.demo.user.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.review.domain.Review;

import java.util.List;

@RestController
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/create")
    public ResponseEntity<Review> createReview(@RequestParam Long userId, @RequestParam Long productId, @RequestParam String text) {
        User user = userService.findById(userId);
        Product product = productService.findById(productId);

        if (user != null && product != null) {
            return new ResponseEntity<>(reviewService.create(user, product, text), HttpStatus.CREATED);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Review>> getReviewsByProduct(@PathVariable Long productId) {
        Product product = productService.findById(productId);

        if (product != null) {
            return new ResponseEntity<>(reviewService.findByProduct(product), HttpStatus.OK);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
