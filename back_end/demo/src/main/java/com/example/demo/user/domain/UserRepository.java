package com.example.demo.user.domain;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import com.example.demo.user.domain.UserDTO;

@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findUserandPassword(String username, String password);
    User findByUser(String username);
}