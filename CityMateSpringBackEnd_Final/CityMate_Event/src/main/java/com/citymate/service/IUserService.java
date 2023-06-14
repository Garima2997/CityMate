package com.citymate.service;

import com.citymate.dto.UserDTO;
import com.citymate.pojos.User;

public interface IUserService {
	
	public UserDTO registerUser(User u);

	public UserDTO getUserDetailById(int userId);
	
	public String cancelUserRegistration(int userId);
	
	public UserDTO updateUserDetails(int userId , UserDTO userDTO);
	
	
	
}
