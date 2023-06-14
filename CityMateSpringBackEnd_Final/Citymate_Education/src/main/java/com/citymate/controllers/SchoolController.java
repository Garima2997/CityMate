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

import com.citymate.pojos.School;
import com.citymate.service.SchoolService;

@RestController
@CrossOrigin
public class SchoolController {
	
	@Autowired
	private SchoolService schoolService;
	
    //get the Schools
	@GetMapping("/schools")
	public List<School> getSchools(){
		List<School> list=this.schoolService.getSchools();
		Collections.sort(list,new SortBySchoolName());
	return list;
	}
	
	//single course get
		@GetMapping("/schools/{schoolId}")
		public School getCourse(@PathVariable String schoolId) {
			return this.schoolService.getSchool(Long.parseLong(schoolId));
		}
	
	//School add
	@PostMapping(path="/schools",consumes="application/json")//optionall :consumes="application/json"
	public School addSchool(@RequestBody School school) {
		return this.schoolService.addSchool(school);
	}
	 //update School using PUT request
	@PutMapping ("/schools/{schoolId}")
	public School updateSchool(@PathVariable String schoolId,@RequestBody School school) {
		return this.schoolService.updateSchool(Long.parseLong(schoolId),school);
	}
	
	//delete the School
	@DeleteMapping("/schools/{schoolId}")
	public ResponseEntity<HttpStatus> deleteSchool(@PathVariable String schoolId) {
	try {
		this.schoolService.deleteSchool(Long.parseLong(schoolId));
		return new ResponseEntity<>(HttpStatus.OK);
	}catch (Exception e) {
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	}
	
}

class SortBySchoolName implements Comparator<School>
{

	@Override
	public int compare(School s1, School s2) {
		return s1.getSchoolName().compareTo(s2.getSchoolName());
	}
	}
