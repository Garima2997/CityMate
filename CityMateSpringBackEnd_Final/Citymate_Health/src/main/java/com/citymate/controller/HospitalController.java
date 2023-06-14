package com.citymate.controller;
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

import com.citymate.dto.HospitalDTO;
import com.citymate.dto.ResponseDTO;
import com.citymate.pojos.Hospital;
import com.citymate.service.IHospitalService;

@RestController
@RequestMapping("/hospital")
@CrossOrigin
public class HospitalController {
	@Autowired
	private IHospitalService hospitalService;
	
	public HospitalController() {
		System.out.println("in constructor of " + getClass().getName());
	}
	
	//get the hospital list
	@GetMapping
	public ResponseEntity<?> listHospitalForUser()
	{
		System.out.println("in get all hospitals");
		return ResponseEntity.ok(new ResponseDTO<>(hospitalService.getHospitals()));
	}
	
	
	//add a new hospital
	@PostMapping
	//@RequestBody=> un_marshalling
	public ResponseEntity<?> addHospitalDetailToList(@RequestBody Hospital h)
	{
		System.out.println("in add hospital "+h);
		return ResponseEntity.ok(new ResponseDTO<>(hospitalService.addHospital(h)));
		}
	
	//update the details about a hospital
	@PutMapping("/{hospId}")
	public ResponseEntity<?> updateHospitalDetail(@PathVariable int hospId, @RequestBody HospitalDTO hospDTO)
	{
		System.out.println("in update hospital" +hospDTO+" "+hospId);
		return ResponseEntity.ok(hospitalService.updateHospitalDetails(hospId,hospDTO));
		}
	
	
	//delete the hospital details from the list 
	@DeleteMapping("/{hospId}")
	public ResponseEntity<?> deleteHospitalDetailFromList(@PathVariable int hospId){
		System.out.println("in delete hospitaldetail "+hospId);
		try {
			return ResponseEntity.ok(new ResponseDTO<>(hospitalService.deleteHospitalDetails(hospId)));
		} catch (RuntimeException e) {
			System.out.println("err in delete " + e);
			return new ResponseEntity<>(new ResponseDTO<>("Hospital details deletion failed"),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// Add REST request handling method to get hospital details
		@GetMapping("/{hospId}")
		public ResponseEntity<?> getHospitalDetails(@PathVariable int hospId) {
			System.out.println("in get user dtls " + hospId);
			return ResponseEntity.ok(new ResponseDTO<>(hospitalService.getHospitalDetails(hospId)));
		}

}
