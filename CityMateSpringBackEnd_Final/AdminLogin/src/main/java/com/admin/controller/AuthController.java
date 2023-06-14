package com.admin.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.admin.payload.request.LoginRequest;
import com.admin.payload.request.SignupRequest;
import com.admin.payload.response.JwtResponse;
import com.admin.payload.response.MessageResponse;
import com.admin.pojos.ERole;
import com.admin.pojos.Role;
import com.admin.pojos.User;
import com.admin.repository.RoleRepository;
import com.admin.repository.UserRepository;
import com.admin.security.jwt.JwtUtils;
import com.admin.security.services.UserDetailsImpl;

@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	PasswordEncoder encoder;

	@Autowired
	private JwtUtils jwtUtils;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt, 
												 userDetails.getId(), 
												 userDetails.getUsername(), 
												 userDetails.getEmail(), 
												 roles));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		User user = new User(signUpRequest.getUsername(), 
							 signUpRequest.getEmail(),
							 encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		System.out.println("ROlES " + strRoles);
		System.out.println("Get Roles " + strRoles);
		Set<Role> roles = new HashSet<>();
		
		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_EVENT)   // database check 
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} 
			else {
			strRoles.forEach(role -> {
				switch (role) {
				case "event":
					Role adminRole = roleRepository.findByName(ERole.ROLE_EVENT)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);

					break;
				case "education":
					Role educationRole = roleRepository.findByName(ERole.ROLE_EDUCATION)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(educationRole);

					break;
				case "funndine":
					Role funndineRole = roleRepository.findByName(ERole.ROLE_FUNNDINE)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			        roles.add(funndineRole);

			       break;

				case "health":
					Role healthRole = roleRepository.findByName(ERole.ROLE_HEALTH)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(healthRole);
					break;
				
				case "tourism":
					Role tourismRole = roleRepository.findByName(ERole.ROLE_TOURISM)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(tourismRole);
				}
			});
		}

		user.setRoles(roles);
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}
