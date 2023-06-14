package com.citymate.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.citymate.pojos.HistoricalPlaces;
@Repository
public interface HistoricalPlacesDao extends JpaRepository<HistoricalPlaces,Long>{  //readimade delete update etc .<kis entity ke saath operation perform kar rahe ho usaka type:Course,primary key field type:Long>

}
