package com.citymate.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citymate.pojos.Hospital;

public interface HospitalRepository extends JpaRepository<Hospital, Integer> {

}
