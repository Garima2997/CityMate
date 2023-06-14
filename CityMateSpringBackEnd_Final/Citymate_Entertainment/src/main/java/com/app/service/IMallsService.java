package com.app.service;

import java.util.List;

import com.app.citymate.Malls;
import com.app.dto.MallsDTO;



public interface IMallsService {
	List<MallsDTO> getAllMalls();
	MallsDTO addMallsDetails(Malls malls);
	String deleteMallsDetails(int id);
	MallsDTO getMallsDetails(int id);
	MallsDTO updateMallsDetails(int id,MallsDTO malls);
}
