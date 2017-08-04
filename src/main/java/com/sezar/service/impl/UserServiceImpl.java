package com.sezar.service.impl;

import com.sezar.model.User;
import com.sezar.repository.UserRepository;
import com.sezar.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by fan.jin on 2016-10-15.
 */

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;

	@Override
	@PreAuthorize("hasRole('USER')")
	public User findByUsername(String username ) throws UsernameNotFoundException {
		User u = userRepository.findByUsername( username );
		return u;
	}

	@PreAuthorize("hasRole('ADMIN')")
	public User findById(Long id ) throws AccessDeniedException {
		User u = userRepository.findOne( id );
		return u;
	}

	@PreAuthorize("hasRole('ADMIN')")
	public List<User> findAll() throws AccessDeniedException {
		List<User> result = userRepository.findAll();
		return result;
	}

	@Override
	public boolean createUser(User user) {
		try {
			userRepository.save(user);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
