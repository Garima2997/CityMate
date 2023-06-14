package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.citymate.Malls;
import com.app.dao.MallsRepository;
import com.app.dto.MallsDTO;
import com.app.exceptions.EntertainmentHandlingException;

@Service
@Transactional
public class MallsServiceImpl implements IMallsService {

	@Autowired
	private MallsRepository repo;
	
	@Override
	public List<MallsDTO> getAllMalls() {
		
		List<MallsDTO> list = new ArrayList<>();
		repo.findAll().forEach(e -> {MallsDTO dto = new MallsDTO();
		BeanUtils.copyProperties(e, dto);
		list.add(dto);
		});
		
				
		return list;
	}

	@Override
	public MallsDTO addMallsDetails(Malls malls) {

		Malls persistentMalls = repo.save(malls);
		MallsDTO dto = new MallsDTO();
		BeanUtils.copyProperties(persistentMalls, dto);
		
		return dto;
	}

	@Override
	public String deleteMallsDetails(int id) {

		Malls malls = repo.findById(id).orElseThrow(()-> new EntertainmentHandlingException("Invalid entertainment id"));
		repo.deleteById(id);
		return "Entertainment details for id " +id+ " deleted";
	}

	@Override
	public MallsDTO getMallsDetails(int id) {

		Malls malls = repo.findById(id).orElseThrow(() -> new EntertainmentHandlingException("invalid entertainment id"));
		MallsDTO mallsDTO = new MallsDTO();
        BeanUtils.copyProperties(malls, mallsDTO);
        System.out.println("entertainment" + malls);
        System.out.println("entertainment DTO" + mallsDTO);
        return mallsDTO;
	}

	@Override
	public MallsDTO updateMallsDetails(int id, MallsDTO mallsDTO) {

        System.out.println("in update "  + mallsDTO);
        Malls mallsDetails = repo.findById(id).get();
        System.out.println("Entertainment details from database " + mallsDetails);
        BeanUtils.copyProperties(mallsDTO, mallsDetails); 
		System.out.println("updated entertainment details " + mallsDetails);
        
		return mallsDTO;
	}

	

}
