package com.bstarbackend.bstar.web.dto;

import com.bstarbackend.bstar.domain.posts.Posts;
import com.bstarbackend.bstar.domain.user.Users;
import lombok.Getter;

@Getter
public class PostsResponseDto {

    private Long id;
    private String title;
    private String content;
    private Users user;

    public PostsResponseDto(Posts entity) {
        this.id=entity.getId();
        this.title=entity.getTitle();
        this.content=entity.getContent();
        this.user=entity.getUser();
    }
}
