package com.bstarbackend.bstar.web.dto;

import com.bstarbackend.bstar.domain.posts.Posts;
import com.bstarbackend.bstar.domain.user.Users;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class PostsListResponseDto {

    private Long id;
    private String title;
    private Users user;
    private LocalDateTime modifiedDate;

    public PostsListResponseDto(Posts entity) {
        this.id=entity.getId();
        this.title=entity.getTitle();
        this.user=entity.getUser();
        this.modifiedDate=entity.getModifiedDate();
    }
}
