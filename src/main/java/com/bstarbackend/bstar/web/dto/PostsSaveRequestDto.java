package com.bstarbackend.bstar.web.dto;

import com.bstarbackend.bstar.domain.posts.Posts;
import com.bstarbackend.bstar.domain.user.Users;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostsSaveRequestDto {

    private String title;

    private String content;

    private Users user;

    @Builder
    public PostsSaveRequestDto(String title, String content, Users user) {
        this.title=title;
        this.content=content;
        this.user=user;
    }

    public Posts toEntity() {
        return Posts.builder()
                .title(title)
                .content(content)
                .user(user)
                .build();
    }
}
