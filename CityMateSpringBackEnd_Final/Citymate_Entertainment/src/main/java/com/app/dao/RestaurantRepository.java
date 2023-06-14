package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.citymate.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer>{

}
