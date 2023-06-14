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

import com.app.citymate.Malls;
import com.app.dto.MallsDTO;
import com.app.dto.ResponseDTO;
import com.app.service.IMallsService;

@RestController
@RequestMapping("/malls")
@CrossOrigin
public class MallsController {

	@Autowired
	private IMallsService mallsService;
	
	public MallsController() {
		System.out.println("in ctor of " + getClass().getName());
	}
//	
//	@GetMapping
//	public ResponseEntity<?> getAllEntertainments()
	
	
	@GetMapping 
	public ResponseEntity<?> getAllMalls() {
		System.out.println("in all malls");
		return ResponseEntity.ok(new ResponseDTO<>(mallsService.getAllMalls()));
	}
	
	@PostMapping
	public ResponseEntity<?> addMallsDetails(@RequestBody Malls malls) {
		System.out.println("in entertainment details" +malls);
		return ResponseEntity.ok(new ResponseDTO<>(mallsService.addMallsDetails(malls)));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteMallsDetails(@PathVariable int id) {
		System.out.println("in del user details" + id);
		try {
			
			return ResponseEntity.ok(new ResponseDTO<>(mallsService.deleteMallsDetails(id)));
		} catch (RuntimeException e) {
			System.out.println("error in delete " +e);
			return new ResponseEntity<>(new ResponseDTO<>("malls details deletion failed"),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getMallsDetails(@PathVariable int id) {
		System.out.println("in get malls details" + id);
		return ResponseEntity.ok(new ResponseDTO<>(mallsService.getMallsDetails(id)));
	}
	
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateMallsDetails(@PathVariable int id , @RequestBody MallsDTO mallsDTO) {
		System.out.println("in updating update details " + id + " " + mallsDTO);
		return ResponseEntity.ok(mallsService.updateMallsDetails(id, mallsDTO));
	}
	
}



