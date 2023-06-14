package com.citymate.service;

import java.util.List;

import com.citymate.pojos.CurrentHotSpot;

public interface CurrentHotSpotService {

	public List<CurrentHotSpot> getCurrentHotSpot();

	public CurrentHotSpot getCurrentHotSpot(long placeId);

	public CurrentHotSpot addCurrentHotSpot(CurrentHotSpot currentHotSpot);

	public CurrentHotSpot updateCurrentHotSpot(long placeId,CurrentHotSpot currentHotSpot);

	public void deleteCurrentHotSpot(long parseLong);
}
