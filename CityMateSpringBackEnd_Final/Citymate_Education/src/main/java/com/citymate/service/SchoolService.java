package com.citymate.service;

import java.util.List;

import com.citymate.pojos.School;

public interface SchoolService {

	public List<School> getSchools();

	public School getSchool(long schoolId);

	public School addSchool(School school);

	public School updateSchool(long schoolId,School school);

	public void deleteSchool(long parseLong);
}
