package com.citymate.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.citymate.pojos.College;
import com.citymate.repository.CollegeDao;

@Service
public class CollegeServiceImpl implements CollegeService {
    @Autowired
	private CollegeDao collegeDao;
    
	public CollegeServiceImpl() {	
	}
	@Override
	public List<College> getColleges() {
		//return list;
		return collegeDao.findAll();
	}
	@Override
	public College getCollege(long collegeId) {
		return collegeDao.findById(collegeId).get();
	}
	@Override
	public College addCollege(College college) {
	collegeDao.save(college);
		return college;
		
	}
	@Override
	public College updateCollege(long collegeId,College  college) {
		College entity=collegeDao.getOne(collegeId);
		entity.setCollegeName(college.getCollegeName());
		entity.setPrincipalName(college.getPrincipalName());
		entity.setCollegeCategory(college.getCollegeCategory());
		entity.setCourses(college.getCourses());
		entity.setLocation(college.getLocation());
		entity.setTelephoneNo(college.getTelephoneNo());
		entity.setImgPath(college.getImgPath());
		entity.setCollegeWebsite(college.getCollegeWebsite());
		collegeDao.save(entity);
		return college;
	}
	@Override
	public void deleteCollege(long parseLong) {
		College entity=collegeDao.getOne(parseLong);
		collegeDao.delete(entity);
	}

}
