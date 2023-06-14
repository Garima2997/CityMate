package com.citymate.service;

import java.util.List;

import com.citymate.dto.HospitalDTO;
import com.citymate.pojos.Hospital;

public interface IHospitalService {
 
	 List<HospitalDTO> getHospitals();

	 HospitalDTO addHospital(Hospital h);
	 
	 HospitalDTO getHospitalDetails(int hospId);

	 HospitalDTO updateHospitalDetails(int hospId, HospitalDTO h);

	 String deleteHospitalDetails(int hospId);

	
}
