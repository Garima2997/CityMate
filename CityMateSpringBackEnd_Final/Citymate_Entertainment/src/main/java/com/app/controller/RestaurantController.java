package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.citymate.Restaurant;
import com.app.dto.RestaurantDTO;
import com.app.dto.ResponseDTO;
import com.app.service.IRestaurantService;

@RestController
@RequestMapping("/restaurant")
@CrossOrigin
public class RestaurantController {

	@Autowired
	private IRestaurantService restaurantService;
	
	public RestaurantController() {
		System.out.println("in ctor of " + getClass().getName());
	}
//	
//	@GetMapping
//	public ResponseEntity<?> getAllEntertainments()
	
	
	@GetMapping 
	public ResponseEntity<?> getAllRestaurant() {
		System.out.println("in all entertainments");
		return ResponseEntity.ok(new ResponseDTO<>(restaurantService.getAllRestaurant()));
	}
	
	@PostMapping
	public ResponseEntity<?> addRestaurantDetails(@RequestBody Restaurant restaurant) {
		System.out.println("in entertainment details" +restaurant);
		return ResponseEntity.ok(new ResponseDTO<>(restaurantService.addRestaurantDetails(restaurant)));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteRestaurantDetails(@PathVariable int id) {
		System.out.println("in del user details" + id);
		try {
			
			return ResponseEntity.ok(new ResponseDTO<>(restaurantService.deleteRestaurantDetaild(id)));
		} catch (RuntimeException e) {
			System.out.println("error in delete " +e);
			return new ResponseEntity<>(new ResponseDTO<>("Restaurant details deletion failed"),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getRestaurantDetails(@PathVariable int id) {
		System.out.println("in get entertainment details" + id);
		return ResponseEntity.ok(new ResponseDTO<>(restaurantService.getRestaurantDetails(id)));
	}
	
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateRestaurantDetails(@PathVariable int id , @RequestBody RestaurantDTO restaurantDTO) {
		System.out.println("in updating update details " + id + " " + restaurantDTO);
		return ResponseEntity.ok(restaurantService.updateRestaurantDetails(id, restaurantDTO));
	}
	
}



