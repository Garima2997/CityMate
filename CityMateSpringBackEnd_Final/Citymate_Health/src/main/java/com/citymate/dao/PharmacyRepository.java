package com.citymate.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citymate.pojos.Hospital;
import com.citymate.pojos.Pharmacy;

public interface PharmacyRepository extends JpaRepository<Pharmacy, Integer> {

	 

}
