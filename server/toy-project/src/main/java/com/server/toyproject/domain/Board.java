package com.server.toyproject.domain;

import com.server.toyproject.domain.type.RoleType;
import lombok.Getter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
public class Board extends AuditingFields{

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    int id;

    @Column(length = 45,nullable = false)
    String userId;

    @Column(length=255,nullable = false)
    String title;

    @Column(length = 1000,nullable = false)
    String content;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    @Column(nullable = false)
    LocalDateTime createdAt;

    @Column(length = 45, nullable = false)
    String studyLocation;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    LocalDateTime updatedAt;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    LocalDateTime deletedAt;



}
