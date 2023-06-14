package com.citymate.service;

import java.util.List;

import com.citymate.pojos.College;

public interface CollegeService {

	public List<College> getColleges();

	public College getCollege(long collegeId);

	public College addCollege(College college);

	public College updateCollege(long collegeId,College college);

	public void deleteCollege(long parseLong);
}
