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

import com.app.citymate.Parks;
import com.app.dto.ParksDTO;
import com.app.dto.ResponseDTO;
import com.app.service.IParksService;

@RestController
@RequestMapping("/parks")
@CrossOrigin
public class ParksController {

	@Autowired
	private IParksService parksService;
	
	public ParksController() {
		System.out.println("in ctor of " + getClass().getName());
	}
//	
//	@GetMapping
//	public ResponseEntity<?> getAllEntertainments()
	
	
	@GetMapping 
	public ResponseEntity<?> getAllParks() {
		System.out.println("in all parks");
		return ResponseEntity.ok(new ResponseDTO<>(parksService.getAllParks()));
	}
	
	@PostMapping
	public ResponseEntity<?> addParksDetails(@RequestBody Parks parks) {
		System.out.println("in parks details" +parks);
		return ResponseEntity.ok(new ResponseDTO<>(parksService.addParksDetails(parks)));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteParksDetails(@PathVariable int id) {
		System.out.println("in del user details" + id);
		try {
			
			return ResponseEntity.ok(new ResponseDTO<>(parksService.deleteParksDetails(id)));
		} catch (RuntimeException e) {
			System.out.println("error in delete " +e);
			return new ResponseEntity<>(new ResponseDTO<>("Parks details deletion failed"),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getParksDetails(@PathVariable int id) {
		System.out.println("in get Parks details" + id);
		return ResponseEntity.ok(new ResponseDTO<>(parksService.getParksDetails(id)));
	}
	
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateParksDetails(@PathVariable int id , @RequestBody ParksDTO parksDTO) {
		System.out.println("in updating update details " + id + " " + parksDTO);
		return ResponseEntity.ok(parksService.updateParksDetails(id, parksDTO));
	}
	
}



