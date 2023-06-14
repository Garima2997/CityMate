package com.citymate.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.citymate.custom_exceptions.HospitalHandlingException;
import com.citymate.dao.HospitalRepository;
import com.citymate.dto.HospitalDTO;
import com.citymate.pojos.Hospital;

@Service
@Transactional
public class HospitalServiceImpl implements IHospitalService {
	@Autowired
	private HospitalRepository hospitalRepo;
	
	@Override
	public List<HospitalDTO> getHospitals() {
		List<HospitalDTO> list = new ArrayList<>();
		hospitalRepo.findAll().forEach(u -> {
			HospitalDTO dto = new HospitalDTO();
			BeanUtils.copyProperties(u, dto);
			list.add(dto);
		});
		return list;
	}
	
	@Override
	public HospitalDTO addHospital(Hospital hospital) {
		// invoke dao's method for persistence
				Hospital persistenthosp = hospitalRepo.save(hospital);
				// for sending response copy persistent hospital details ---> hospital dto(so that you
				// can control what all to share with the front end)
				HospitalDTO dto = new HospitalDTO();
				BeanUtils.copyProperties(persistenthosp, dto);
				return dto;
			}// rets a dto  to the caller.
	

	@Override
	public HospitalDTO updateHospitalDetails(int hospId, HospitalDTO hospitalDTO) {
		System.out.println("in hospital updation service");
		System.out.println("in update " + hospitalDTO);
		// fetch exsiting details from the db
		Hospital hospitalDetails = hospitalRepo.findById(hospId).get();
		System.out.println("hospital dtls from db " + hospitalDetails);
		// => hospitalDetails : PERSISTENT POJO
		// copy updated hospital details coming from request payload ---> Hospital details
		BeanUtils.copyProperties(hospitalDTO, hospitalDetails);
		System.out.println("updated user dtls " + hospitalDetails);
		// modified state of persistent POJO
		return hospitalDTO;
	}

	@Override
	public String deleteHospitalDetails(int hospId) {
		Hospital hospital =hospitalRepo.findById(hospId).orElseThrow(()-> new HospitalHandlingException(" Invalid Hospital Id...PLEASE CHOOSE a correct one !!! "));
		hospitalRepo.deleteById(hospId);
		return "Hospital details for ID "+hospId+" deleted...";
	}
	
	@Override
	public HospitalDTO getHospitalDetails(int hospId) {
		Hospital hospital = hospitalRepo.findById(hospId).orElseThrow(() -> new HospitalHandlingException("Invalid Hospital ID"));
		HospitalDTO hospitalDTO = new HospitalDTO();
		BeanUtils.copyProperties(hospital, hospitalDTO);
		System.out.println("hospital " + hospital);
		System.out.println("hospital DTO  " + hospitalDTO);
		return hospitalDTO;
	}	

}
