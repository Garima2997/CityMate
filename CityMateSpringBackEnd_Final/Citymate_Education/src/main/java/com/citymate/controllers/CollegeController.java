package com.citymate.controllers;

import java.util.Collections;
import java.util.Comparator;
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

import com.citymate.pojos.College;
import com.citymate.service.CollegeService;

@RestController
@CrossOrigin
public class CollegeController {
	
	@Autowired
	private CollegeService collegeService;
	/*
	@GetMapping("/home")
	public void getHome(){
		
	}*/
    //get the Colleges
	@GetMapping("/colleges")
	public List<College> getColleges(){
		List<College> list=this.collegeService.getColleges();
		Collections.sort(list,new SortByCollegeName());
	return list;
	//return this.collegeService.getColleges();
	}
	
	//single course get
		@GetMapping("/colleges/{collegeId}")
		public College getCourse(@PathVariable String collegeId) {
			return this.collegeService.getCollege(Long.parseLong(collegeId));
		}
	
	//College add
	@PostMapping(path="/colleges",consumes="application/json")//optionall :consumes="application/json"
	public College addCollege(@RequestBody College college) {
		return this.collegeService.addCollege(college);
	}
	 //update College using PUT request
	@PutMapping ("/colleges/{collegeId}")
	public College updateCollege(@PathVariable String collegeId,@RequestBody College college) {
		return this.collegeService.updateCollege(Long.parseLong(collegeId),college);
	}
	
	//delete the College
	@DeleteMapping("/colleges/{collegeId}")
	public ResponseEntity<HttpStatus> deleteCollege(@PathVariable String collegeId) {
	try {
		this.collegeService.deleteCollege(Long.parseLong(collegeId));
		return new ResponseEntity<>(HttpStatus.OK);
	}catch (Exception e) {
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	}
	
}
class SortByCollegeName implements Comparator<College>
{

	@Override
	public int compare(College s1, College s2) {
		return s1.getCollegeName().compareTo(s2.getCollegeName());
	}
	}