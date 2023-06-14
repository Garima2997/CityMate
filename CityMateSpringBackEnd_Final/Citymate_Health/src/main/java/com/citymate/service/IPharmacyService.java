package com.citymate.service;

import java.util.List;

import com.citymate.dto.PharmacyDTO;
import com.citymate.pojos.Pharmacy;

public interface IPharmacyService {
	 List<PharmacyDTO> getPharmacy();
	 
	 PharmacyDTO getPharmacyDetails(int phId);

	 PharmacyDTO addPharmacy(Pharmacy p);

     PharmacyDTO updatePharmacy(int phId, PharmacyDTO p);

	 String deletePharmacy(int phId);

}
