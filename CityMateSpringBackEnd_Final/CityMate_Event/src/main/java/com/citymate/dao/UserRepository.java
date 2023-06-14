package com.citymate.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.citymate.pojos.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
