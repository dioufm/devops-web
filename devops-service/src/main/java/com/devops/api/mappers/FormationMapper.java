package com.devops.api.mappers;

import com.devops.api.dtos.FormationDto;
import com.devops.api.dtos.SignUpDto;
import com.devops.api.dtos.UserDto;
import com.devops.api.model.Formation;
import com.devops.api.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface FormationMapper {

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);


    @Mapping(target = "author", source = "author.firstName")
    FormationDto toFormationDto(Formation formation);
}
