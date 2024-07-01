package com.devops.api.mappers;

import com.devops.api.dtos.SignUpDto;
import com.devops.api.dtos.UserDto;
import com.devops.api.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}
