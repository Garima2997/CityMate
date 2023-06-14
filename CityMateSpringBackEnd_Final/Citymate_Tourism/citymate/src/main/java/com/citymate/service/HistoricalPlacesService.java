package com.citymate.service;

import java.util.List;

import com.citymate.pojos.HistoricalPlaces;

public interface HistoricalPlacesService {

	public List<HistoricalPlaces> getHistoricalPlaces();

	public HistoricalPlaces getHistoricalPlaces(long hPlaceId);

	public HistoricalPlaces addHistoricalPlaces(HistoricalPlaces historicalPlaces);

	public HistoricalPlaces updateHistoricalPlaces(long hPlaceId,HistoricalPlaces historicalPlaces);

	public void deleteHistoricalPlaces(long parseLong);
}
