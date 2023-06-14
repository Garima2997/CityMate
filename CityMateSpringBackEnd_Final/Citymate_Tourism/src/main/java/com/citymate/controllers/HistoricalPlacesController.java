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

import com.citymate.pojos.HistoricalPlaces;
import com.citymate.service.HistoricalPlacesService;

@RestController
@CrossOrigin
public class HistoricalPlacesController {
	
	@Autowired
	private HistoricalPlacesService historicalPlacesService;
	/*
	@GetMapping("/home")
	public void getHome(){
		
	}*/
    //get the HistoricalPlaces
	@GetMapping("/HistoricalPlaces")
	public List<HistoricalPlaces> getHistoricalPlaces(){
	return this.historicalPlacesService.getHistoricalPlaces();
	}
	
	//single course get
		@GetMapping("/HistoricalPlaces/{hPlaceId}")
		public HistoricalPlaces getCourse(@PathVariable String hPlaceId) {
			return this.historicalPlacesService.getHistoricalPlaces(Long.parseLong(hPlaceId));
		}
	
	//HistoricalPlaces add
	@PostMapping(path="/HistoricalPlaces",consumes="application/json")//optionall :consumes="application/json"
	public HistoricalPlaces addCollege(@RequestBody HistoricalPlaces historicalPlaces) {
		return this.historicalPlacesService.addHistoricalPlaces(historicalPlaces);
	}
	 //update HistoricalPlaces using PUT request
	@PutMapping ("/HistoricalPlaces/{hPlaceId}")
	public HistoricalPlaces updateCollege(@PathVariable String hPlaceId,@RequestBody HistoricalPlaces historicalPlaces) {
		return this.historicalPlacesService.updateHistoricalPlaces(Long.parseLong(hPlaceId),historicalPlaces);
	}
	
	//delete the HistoricalPlaces
	@DeleteMapping("/HistoricalPlaces/{hPlaceId}")
	public ResponseEntity<HttpStatus> deleteCollege(@PathVariable String hPlaceId) {
	try {
		this.historicalPlacesService.deleteHistoricalPlaces(Long.parseLong(hPlaceId));
		return new ResponseEntity<>(HttpStatus.OK);
	}catch (Exception e) {
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	}
	
}
