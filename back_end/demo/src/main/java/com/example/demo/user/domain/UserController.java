package com.example.demo.user.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;  

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userservice;

    @PostMapping("/signup")
    public ResponseEntity<User> userservice(@RequestBody User user) {
        return new ResponseEntity<>(userservice.create(user), HttpStatus.CREATED);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> User(@PathVariable Long id) {
        Optional<User> User = userservice.findById(id);
        if (User.isEmpty()) { 
            throw new UserNotFoundException("User not found");
        }
        UserDTO UserDTO = new UserDTO(User.get().getUsername(), User.get().getPassword());
        return ResponseEntity.status(200).body(UserDTO);
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
