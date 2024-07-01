package com.devops.api.controller;

import com.devops.api.dtos.FormationDto;
import com.devops.api.model.Formation;
import com.devops.api.model.User;
import com.devops.api.repository.UserRepository;
import com.devops.api.services.FormationService;
import lombok.Data;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Data
@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/startFormations")
public class FormationController {

    private final FormationService formationService;

    public FormationController(FormationService formationService) {
        this.formationService = formationService;
    }


    @RequestMapping("/")
    public String home(Model model) {
        List<FormationDto> latestFormations = formationService.findAll();
        model.addAttribute("latestFormations", latestFormations);
        return "index";
    }


}
