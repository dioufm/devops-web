package com.devops.api.services;


import com.devops.api.dtos.FormationDto;
import com.devops.api.exception.AppException;
import com.devops.api.mappers.FormationMapper;
import com.devops.api.mappers.UserMapper;
import com.devops.api.model.Formation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import com.devops.api.repository.FormationRepository;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class FormationService {

    private final FormationRepository formationRepository;

    private final FormationMapper formationMapper ;

    public List<FormationDto> findAll() {
        List<FormationDto> list  = new ArrayList<>();
        this.formationRepository.findAll().forEach(formation -> list.add(formationMapper.toFormationDto(formation)) );
        return list;
    }


    public Formation findById(Long id) {
        return this.formationRepository.findById(id).orElseThrow(() -> new AppException("Unknown Formation", HttpStatus.NOT_FOUND));
    }

    public Formation create(Formation post) {
        return null;
    }

    public Formation edit(Formation post) {
        return null;
    }

    public void deleteById(Long id) {

    }
}
