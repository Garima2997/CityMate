package com.citymate.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.citymate.pojos.HistoricalPlaces;
import com.citymate.repository.HistoricalPlacesDao;

@Service
public class HistoricalPlacesServiceImpl implements HistoricalPlacesService {
    @Autowired
	private HistoricalPlacesDao historicalPlacesDao;
    
	public HistoricalPlacesServiceImpl() {	
	}
	@Override
	public List<HistoricalPlaces> getHistoricalPlaces() {
		//return list;
		return historicalPlacesDao.findAll();
	}
	@Override
	public HistoricalPlaces getHistoricalPlaces(long hPlaceId) {
		return historicalPlacesDao.findById(hPlaceId).get();
	}
	@Override
	public HistoricalPlaces addHistoricalPlaces(HistoricalPlaces historicalPlaces) {
	historicalPlacesDao.save(historicalPlaces);
		return historicalPlaces;
		
	}
	@Override
	public HistoricalPlaces updateHistoricalPlaces(long hPlaceId,HistoricalPlaces  historicalPlaces) {
		HistoricalPlaces entity=historicalPlacesDao.getOne(hPlaceId);
		entity.sethPlaceName(historicalPlaces.gethPlaceName());
		entity.sethAddress(historicalPlaces.gethAddress());
		entity.sethTimings(historicalPlaces.gethTimings());
		entity.sethDays(historicalPlaces.gethDays());
		entity.sethDescription(historicalPlaces.gethDescription());
		entity.sethContactDetails(historicalPlaces.gethContactDetails());
		historicalPlacesDao.save(entity);
		return historicalPlaces;
	}
	@Override
	public void deleteHistoricalPlaces(long parseLong) {
		HistoricalPlaces entity=historicalPlacesDao.getOne(parseLong);
		historicalPlacesDao.delete(entity);
	}

}
