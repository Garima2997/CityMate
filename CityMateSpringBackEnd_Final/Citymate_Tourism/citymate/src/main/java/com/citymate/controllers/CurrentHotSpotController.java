package com.citymate.controllers;

import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;

import com.citymate.pojos.CurrentHotSpot;
import com.citymate.service.CurrentHotSpotService;

@RestController
@CrossOrigin
public class CurrentHotSpotController {
	
	@Autowired
	private CurrentHotSpotService currentHotSpotService;
	
    //get the CurrentHotSpot
	@GetMapping("/CurrentHotSpot")
	public List<CurrentHotSpot> getCurrentHotSpot(){
	return this.currentHotSpotService.getCurrentHotSpot();
	}
	
	//single course get
		@GetMapping("/CurrentHotSpot/{placeId}")
		public CurrentHotSpot getCourse(@PathVariable String placeId) {
			return this.currentHotSpotService.getCurrentHotSpot(Long.parseLong(placeId));
		}
	
	//CurrentHotSpot add
	@PostMapping(path="/CurrentHotSpot",consumes="application/json")//optionall :consumes="application/json"
	public CurrentHotSpot addCurrentHotSpot(@RequestBody CurrentHotSpot currentHotSpot) {
		return this.currentHotSpotService.addCurrentHotSpot(currentHotSpot);
	}
	 //update CurrentHotSpot using PUT request
	@PutMapping ("/CurrentHotSpot/{placeId}")
	public CurrentHotSpot updateCurrentHotSpot(@PathVariable String placeId,@RequestBody CurrentHotSpot currentHotSpot) {
		return this.currentHotSpotService.updateCurrentHotSpot(Long.parseLong(placeId),currentHotSpot);
	}
	
	//delete the CurrentHotSpot
	@DeleteMapping("/CurrentHotSpot/{placeId}")
	public ResponseEntity<HttpStatus> deleteCurrentHotSpot(@PathVariable String placeId) {
	try {
		this.currentHotSpotService.deleteCurrentHotSpot(Long.parseLong(placeId));
		return new ResponseEntity<>(HttpStatus.OK);
	}catch (Exception e) {
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	}
	
}
