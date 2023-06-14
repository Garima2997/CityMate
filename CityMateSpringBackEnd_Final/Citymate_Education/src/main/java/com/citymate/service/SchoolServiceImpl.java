package com.citymate.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.citymate.pojos.School;
import com.citymate.repository.SchoolDao;

@Service
public class SchoolServiceImpl implements SchoolService {
    @Autowired
	private SchoolDao schoolDao;
    
	public SchoolServiceImpl() {	
	}
	@Override
	public List<School> getSchools() {
		//return list;
		return schoolDao.findAll();
	}
	@Override
	public School getSchool(long schoolId) {
		return schoolDao.findById(schoolId).get();
	}
	@Override
	public School addSchool(School school) {
	schoolDao.save(school);
		return school;
		
	}
	@Override
	public School updateSchool(long schoolId,School  school) {
		School entity=schoolDao.getOne(schoolId);
		entity.setSchoolName(school.getSchoolName());
		entity.setPrincipalName(school.getPrincipalName());
		entity.setBoardName(school.getBoardName());
		entity.setSchoolCategory(school.getSchoolCategory());
		entity.setLocation(school.getLocation());
		entity.setTelephoneNo(school.getTelephoneNo());
		entity.setImgPath(school.getImgPath());
		entity.setSchoolWebsite(school.getSchoolWebsite());
		schoolDao.save(entity);
		return school;
	}
	@Override
	public void deleteSchool(long parseLong) {
		School entity=schoolDao.getOne(parseLong);
		schoolDao.delete(entity);
	}

}
