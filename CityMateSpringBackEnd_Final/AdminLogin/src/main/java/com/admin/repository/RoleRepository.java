package com.admin.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.admin.pojos.ERole;
import com.admin.pojos.Role;

public interface RoleRepository extends JpaRepository<Role,Long> {

	Optional<Role> findByName(ERole name);
}
