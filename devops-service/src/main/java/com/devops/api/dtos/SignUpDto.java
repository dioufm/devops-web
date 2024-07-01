package com.devops.api.dtos;

public record SignUpDto (String firstName, String lastName, String login, char[] password) { }
