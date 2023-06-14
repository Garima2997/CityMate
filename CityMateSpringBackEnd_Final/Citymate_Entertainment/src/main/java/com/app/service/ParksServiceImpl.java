package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.citymate.Parks;
import com.app.dao.ParksRepository;
import com.app.dto.ParksDTO;
import com.app.exceptions.EntertainmentHandlingException;

@Service
@Transactional
public class ParksServiceImpl implements IParksService {

	@Autowired
	private ParksRepository repo;
	
	@Override
	public List<ParksDTO> getAllParks() {
		
		List<ParksDTO> list = new ArrayList<>();
		repo.findAll().forEach(e -> {ParksDTO dto = new ParksDTO();
		BeanUtils.copyProperties(e, dto);
		list.add(dto);
		});
		
				
		return list;
	}

	@Override
	public ParksDTO addParksDetails(Parks parks) {

		Parks persistentParks = repo.save(parks);
		ParksDTO dto = new ParksDTO();
		BeanUtils.copyProperties(persistentParks, dto);
		
		return dto;
	}

	@Override
	public String deleteParksDetails(int id) {

		Parks parks = repo.findById(id).orElseThrow(()-> new EntertainmentHandlingException("Invalid park id"));
		repo.deleteById(id);
		return "Park details for id " +id+ " deleted";
	}

	@Override
	public ParksDTO getParksDetails(int id) {

		Parks parks = repo.findById(id).orElseThrow(() -> new EntertainmentHandlingException("invalid park id"));
		ParksDTO parksDTO = new ParksDTO();
        BeanUtils.copyProperties(parks, parksDTO);
        System.out.println("parks" + parks);
        System.out.println("parks DTO" + parksDTO);
        return parksDTO;
	}

	@Override
	public ParksDTO updateParksDetails(int id, ParksDTO parksDTO) {

        System.out.println("in update "  + parksDTO);
        Parks parksDetails = repo.findById(id).get();
        System.out.println("Parks details from database " + parksDetails);
        BeanUtils.copyProperties(parksDTO, parksDetails); 
		System.out.println("updated entertainment details " + parksDetails);
        
		return parksDTO;
	}

	

}
