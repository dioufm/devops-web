package com.ligey.job.api.model;


import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
public class Document {

    private String id;
    private String name;
    private String category;

    public Document(String name, String category) {
        this.name = name;
        this.category = category;
    }
}