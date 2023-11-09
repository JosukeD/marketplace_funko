package com.example.demo.user.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;  

@RestController
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    private UserService userservice;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/save")
    public ResponseEntity<User> userservice(@RequestBody UserDTO userDTO) {
        return new ResponseEntity<>(userservice.create(userDTO), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody UserDTO userDTO) {
        
        User user1 = userRepository.findByUsername(userDTO.getUsername());
        if (user1 != null) {
            String password = userDTO.getPassword();
            String encodedPassword = user1.getPassword();
            
            if (password == encodedPassword) {
                Optional<User> user = userRepository.findByUsernameAndPassword(userDTO.getUsername(), encodedPassword);
                if (user.isPresent()) {
                    return ResponseEntity.status(201).body("Login Succes");
                } else {
                    return ResponseEntity.status(201).body("Login Failed");
                }
            } else {
                return ResponseEntity.status(201).body("Password not exists");
            }
        }else {
            return ResponseEntity.status(201).body("Username not exists");
        }
    }    


    @GetMapping
    public ResponseEntity<Iterable<User>> getAllCourses() {
        return new ResponseEntity<>(userservice.findAll(), HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<User> updateCourse(@PathVariable Long id, @RequestBody User updateuser) {
        return new ResponseEntity<>(userservice.update(id, updateuser), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        userservice.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
