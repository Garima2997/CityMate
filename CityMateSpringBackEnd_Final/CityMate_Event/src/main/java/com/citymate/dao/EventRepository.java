package com.citymate.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citymate.pojos.Events;

public interface EventRepository extends JpaRepository<Events, Integer> {

}
