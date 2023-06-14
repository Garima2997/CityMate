package com.citymate.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.citymate.pojos.CurrentHotSpot;
import com.citymate.repository.CurrentHotSpotDao;

@Service
public class CurrentHotSpotServiceImpl implements CurrentHotSpotService {
    @Autowired
	private CurrentHotSpotDao currentHotSpotDao;
    
	public CurrentHotSpotServiceImpl() {	
	}
	@Override
	public List<CurrentHotSpot> getCurrentHotSpot() {
		//return list;
		return currentHotSpotDao.findAll();
	}
	@Override
	public CurrentHotSpot getCurrentHotSpot(long placeId) {
		return currentHotSpotDao.findById(placeId).get();
	}
	@Override
	public CurrentHotSpot addCurrentHotSpot(CurrentHotSpot currentHotSpot) {
	currentHotSpotDao.save(currentHotSpot);
		return currentHotSpot;
		
	}
	@Override
	public CurrentHotSpot updateCurrentHotSpot(long placeId,CurrentHotSpot  currentHotSpot) {
		CurrentHotSpot entity=currentHotSpotDao.getOne(placeId);
		entity.setPlaceName(currentHotSpot.getPlaceName());
		entity.setAddress(currentHotSpot.getAddress());
		entity.setTimings(currentHotSpot.getTimings());
		entity.setDays(currentHotSpot.getDays());
		entity.setDescription(currentHotSpot.getDescription());
		entity.setContactDetails(currentHotSpot.getContactDetails());
		currentHotSpotDao.save(entity);
		return currentHotSpot;
	}
	@Override
	public void deleteCurrentHotSpot(long parseLong) {
		CurrentHotSpot entity=currentHotSpotDao.getOne(parseLong);
		currentHotSpotDao.delete(entity);
	}

}
