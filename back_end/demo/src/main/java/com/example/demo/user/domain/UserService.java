package com.example.demo.user.domain;
// User Service

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;



@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    

    public User create(UserDTO userDTO) {
        User user = new User(
            userDTO.getUsername(),
            this.passwordEncoder.encode(userDTO.getPassword())
        );
        return userRepository.save(user);
    }

    public User loginUser(UserDTO userDTO) {
        User user1 = userRepository.findByUser(userDTO.getUsername());
        return user1;
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

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }
}
