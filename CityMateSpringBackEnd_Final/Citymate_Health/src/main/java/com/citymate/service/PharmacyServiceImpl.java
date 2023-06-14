package com.citymate.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.citymate.custom_exceptions.PharmacyHandlingException;
import com.citymate.dao.PharmacyRepository;
import com.citymate.dto.PharmacyDTO;
import com.citymate.pojos.Pharmacy;

@Service
@Transactional
public class PharmacyServiceImpl implements IPharmacyService {
	@Autowired
	private PharmacyRepository pharmRepo;

	@Override
	public List<PharmacyDTO> getPharmacy() {
		List<PharmacyDTO> list = new ArrayList<>();
		pharmRepo.findAll().forEach(p -> {
			PharmacyDTO dto = new PharmacyDTO();
			BeanUtils.copyProperties(p, dto);
			list.add(dto);
		});
		return list;

	}

	@Override
	public PharmacyDTO addPharmacy(Pharmacy pharmacy) {
		// invoke dao's method for persistence
				Pharmacy persistentPharm =pharmRepo.save(pharmacy);
				PharmacyDTO dto = new PharmacyDTO();
				BeanUtils.copyProperties(persistentPharm, dto);
				return dto;
			}// rets a dto  to the caller

	@Override
	public PharmacyDTO updatePharmacy(int phId, PharmacyDTO pharmDTO) {
		System.out.println("in update " + pharmDTO);
		// fetch exsiting details from the db
		Pharmacy pharmDetails = pharmRepo.findById(phId).get();
		System.out.println("user dtls from db " + pharmDetails);
		// copy updated pharmacy details coming from request payload ---> Pharmacy details
		BeanUtils.copyProperties(pharmDTO, pharmDetails);
		System.out.println("updated user dtls " + pharmDetails);
		// modified state of persistent POJO
		return pharmDTO;
	}

	@Override
	public String deletePharmacy(int phId) {
		Pharmacy pharmacy =pharmRepo.findById(phId).orElseThrow(()-> new PharmacyHandlingException(" Invalid Pharmacy Id...PLEASE CHOOSE a correct one !!! "));
		pharmRepo.deleteById(phId);
		return "Pharmacy details for ID "+phId+" deleted...";

	}
	@Override
	public PharmacyDTO getPharmacyDetails(int phId) {
		Pharmacy pharma = pharmRepo.findById(phId).orElseThrow(() -> new PharmacyHandlingException("Invalid User ID"));
		PharmacyDTO pharmDTO = new PharmacyDTO();
		BeanUtils.copyProperties(pharma, pharmDTO, "password");
		System.out.println("user " + pharma);
		System.out.println("user DTO  " + pharmDTO);
		return pharmDTO;
	}

	

	

}
