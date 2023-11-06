package com.example.demo.user.domain;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findUserandPassword(String username, String password);
    User findByUser(String username);
}