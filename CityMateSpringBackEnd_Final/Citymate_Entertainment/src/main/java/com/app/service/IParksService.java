package com.app.service;

import java.util.List;

import com.app.citymate.Parks;
import com.app.dto.ParksDTO;

public interface IParksService {

	List<ParksDTO> getAllParks();
	ParksDTO addParksDetails(Parks parks);
	String deleteParksDetails(int id);
	ParksDTO getParksDetails(int id);
	ParksDTO updateParksDetails(int id,ParksDTO parks);
}
