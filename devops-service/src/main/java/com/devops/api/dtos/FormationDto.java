package com.devops.api.dtos;

import com.devops.api.model.User;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


public record  FormationDto
    (
     Long id,
     String title,
     String body,
     String author,
     String date
    )
{

}

