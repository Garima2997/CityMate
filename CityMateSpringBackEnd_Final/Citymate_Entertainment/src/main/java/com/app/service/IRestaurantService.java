package com.app.service;

import java.util.List;

import com.app.citymate.Restaurant;
import com.app.dto.RestaurantDTO;


public interface IRestaurantService {

	List<RestaurantDTO> getAllRestaurant();
	RestaurantDTO addRestaurantDetails(Restaurant restaurant);
	String deleteRestaurantDetaild(int id);
	RestaurantDTO getRestaurantDetails(int id);
	RestaurantDTO updateRestaurantDetails(int id,RestaurantDTO restaurant);
}
