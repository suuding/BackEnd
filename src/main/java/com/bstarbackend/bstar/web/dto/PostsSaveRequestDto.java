package com.bstarbackend.bstar.web.dto;

import com.bstarbackend.bstar.domain.posts.Posts;
import com.bstarbackend.bstar.domain.user.Users;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostsSaveRequestDto {

    private String title;

    private String content;

    private String user;

    @Builder
    public PostsSaveRequestDto(String title, String content, String user) {
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
