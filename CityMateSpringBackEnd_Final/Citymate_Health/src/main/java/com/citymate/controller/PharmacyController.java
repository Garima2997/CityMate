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

import com.citymate.dto.PharmacyDTO;
import com.citymate.dto.ResponseDTO;
import com.citymate.pojos.Pharmacy;
import com.citymate.service.IPharmacyService;

@RestController
@RequestMapping("/pharmacy")
@CrossOrigin
public class PharmacyController {
	@Autowired
	private IPharmacyService pharmacyService;
	
	public PharmacyController() {
		System.out.println("in constructor of " + getClass().getName());
	}
	
	//get the pharmacy list
	@GetMapping
	public ResponseEntity<?> listPharmacyForUser()
	{
		System.out.println("in list pharmacy ");
		return ResponseEntity.ok(new ResponseDTO<>(pharmacyService.getPharmacy()));
		
	    }
	
	//add a new pharmacy
	@PostMapping
	//@RequestBody=> un_marshalling
	public ResponseEntity<?> addPharmacyDetailToList(@RequestBody Pharmacy p)
	{
		System.out.println("in add pharmacy "+p);
		return ResponseEntity.ok(new ResponseDTO<>(pharmacyService.addPharmacy(p)));
		}
	
	//update the details about a pharmacy
	@PutMapping("/{phId}")
	public ResponseEntity<?> updatePharmacyDetail(@PathVariable int phId, @RequestBody PharmacyDTO pDTO)
	{
		System.out.println("in rest : update details " + phId + " " + pDTO);
		return ResponseEntity.ok(pharmacyService.updatePharmacy(phId, pDTO));
	}
	
	//delete the pharmacy details from the list 
	@DeleteMapping("/{phId}")
	public ResponseEntity<?> deletePharmacyDetailFromList(@PathVariable int phId){
		System.out.println("in delete pharmacydetail "+phId);
		try {
			return ResponseEntity.ok(new ResponseDTO<>(pharmacyService.deletePharmacy(phId)));
		} catch (RuntimeException e) {
			System.out.println("err in delete " + e);
			return new ResponseEntity<>(new ResponseDTO<>("pharmacy details deletion failed"),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// Add REST request handling method to get pharmacy details
		@GetMapping("/{phId}")
		public ResponseEntity<?> getPharmacyDetails(@PathVariable int phId) {
			System.out.println("in get pharmacy dtls " + phId);
			return ResponseEntity.ok(new ResponseDTO<>(pharmacyService.getPharmacyDetails(phId)));
		}

}
