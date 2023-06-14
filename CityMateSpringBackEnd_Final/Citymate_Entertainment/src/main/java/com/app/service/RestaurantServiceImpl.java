package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.citymate.Restaurant;
import com.app.dao.RestaurantRepository;
import com.app.dto.RestaurantDTO;
import com.app.exceptions.EntertainmentHandlingException;

@Service
@Transactional
public class RestaurantServiceImpl implements IRestaurantService {

	@Autowired
	private RestaurantRepository repo;
	
	@Override
	public List<RestaurantDTO> getAllRestaurant() {
		
		List<RestaurantDTO> list = new ArrayList<>();
		repo.findAll().forEach(e -> {RestaurantDTO dto = new RestaurantDTO();
		BeanUtils.copyProperties(e, dto);
		list.add(dto);
		});
		
				
		return list;
	}

	@Override
	public RestaurantDTO addRestaurantDetails(Restaurant restaurant) {

		Restaurant persistentRestaurant = repo.save(restaurant);
		RestaurantDTO dto = new RestaurantDTO();
		BeanUtils.copyProperties(persistentRestaurant, dto);
		
		return dto;
	}

	@Override
	public String deleteRestaurantDetaild(int id) {

        Restaurant restaurant = repo.findById(id).orElseThrow(()-> new EntertainmentHandlingException("Invalid entertainment id"));
		repo.deleteById(id);
		return "Entertainment details for id " +id+ " deleted";
	}

	@Override
	public RestaurantDTO getRestaurantDetails(int id) {

        Restaurant restaurant = repo.findById(id).orElseThrow(() -> new EntertainmentHandlingException("invalid entertainment id"));
        RestaurantDTO restaurantDTO = new RestaurantDTO();
        BeanUtils.copyProperties(restaurant, restaurantDTO);
        System.out.println("entertainment" + restaurant);
        System.out.println("entertainment DTO" + restaurantDTO);
        return restaurantDTO;
	}

	@Override
	public RestaurantDTO updateRestaurantDetails(int id, RestaurantDTO restaurantDTO) {

        System.out.println("in update "  + restaurantDTO);
        Restaurant restaurantDetails = repo.findById(id).get();
        System.out.println("Entertainment details from database " + restaurantDetails);
        BeanUtils.copyProperties(restaurantDTO, restaurantDetails); 
		System.out.println("updated entertainment details " + restaurantDetails);
        
		return restaurantDTO;
	}

	

}
