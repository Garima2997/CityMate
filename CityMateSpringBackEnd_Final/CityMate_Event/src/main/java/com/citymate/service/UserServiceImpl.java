package com.citymate.service;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.citymate.custom_exceptions.UserHandlingException;
import com.citymate.dao.EventRepository;
import com.citymate.dao.UserRepository;
import com.citymate.dto.UserDTO;
import com.citymate.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
		
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	EventRepository eventRepo;

	@Override
	public UserDTO registerUser(User u) {
		
		User persistentUser = userRepo.save(u);
		UserDTO dto = new UserDTO();
		BeanUtils.copyProperties(persistentUser, dto);
		return dto;
	}

	@Override
	public UserDTO getUserDetailById(int userId) {
		User userDetail = userRepo.findById(userId).orElseThrow(() -> new UserHandlingException("Invalid User ID."));
		System.out.println("in service: " + userDetail);
		System.out.println(userDetail.getEvent());
		UserDTO dto = new UserDTO();
		BeanUtils.copyProperties(userDetail, dto);
		return dto;
	}

	@Override
	public String cancelUserRegistration(int userId) {
		User userDetail = userRepo.findById(userId).orElseThrow(() -> new UserHandlingException("Invalid User ID."));
		userRepo.deleteById(userId);
		return "Registration Cancelled!!";
	}

	@Override
	public UserDTO updateUserDetails(int userId , UserDTO userDTO) {
		User userDetail = userRepo.findById(userId).get();
		BeanUtils.copyProperties(userDTO, userDetail);
		return userDTO;
	}
	
	
	
}

	