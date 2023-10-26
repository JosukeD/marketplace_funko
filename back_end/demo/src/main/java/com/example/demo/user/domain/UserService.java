package com.example.demo.user.domain;
// User Service

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.user.domain.User;
import com.example.demo.user.domain.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User create(User user) {
        return userRepository.save(user);
    }

    public User update(Long id, User user) {
        User foundUser = userRepository.findById(id).get();
        BeanUtils.copyProperties(user, foundUser, "id");
        return userRepository.save(foundUser);
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    public Iterable<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Long id) {
        return userRepository.findById(id).get();
    }
}
