package com.devops.api.controller;

import com.devops.api.dtos.FormationDto;
import com.devops.api.model.Formation;
import com.devops.api.services.FormationService;
import lombok.Data;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Data
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/")
public class HomeController {

    private final FormationService formationService;

    public HomeController(FormationService formationService) {
        this.formationService = formationService;
    }


    @GetMapping
    public List<FormationDto> home() {
        return formationService.findAll();
    }


}
