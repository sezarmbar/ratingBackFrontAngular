package com.sezar.controller;

import com.sezar.model.User;
import com.sezar.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * Created by fan.jin on 2016-10-15.
 */

@RestController
@RequestMapping( value = "/api/user", produces = MediaType.APPLICATION_JSON_VALUE )
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{userId}" )
    public User loadById(@PathVariable Long userId ) {
        return this.userService.findById( userId );
    }

    @RequestMapping( method = GET, value= "/all")
    public List<User> loadAll() {
        return this.userService.findAll();
    }
    
    @PostMapping("/create")
    public ResponseEntity<Void> createUser(@RequestBody User user, UriComponentsBuilder builder) {
    	boolean flag = userService.createUser(user);
    	if (flag == false) {
            return new ResponseEntity<Void>(HttpStatus.NOT_ACCEPTABLE);
        }
    	HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/user?id={id}").buildAndExpand(user.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

    @PostMapping("delete-user")
    public ResponseEntity<Void> deleteRating(@RequestBody User user) {
        boolean flag = userService.deleteUser(user);
        if(flag){
            return new ResponseEntity<Void>(HttpStatus.EXPECTATION_FAILED);
        }
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    /*
     *  We are not using userService.findByUsername here(we could),
     *  so it is good that we are making sure that the user has role "ROLE_USER"
     *  to access this endpoint.
     */
    @RequestMapping("/whoami")
    @PreAuthorize("hasRole('USER')")
    public User user() {
        return (User)SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
    }

}
