package com.devops.api.repository;


import com.devops.api.model.Formation;
import com.devops.api.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface FormationRepository extends CrudRepository<Formation, Long> {

}