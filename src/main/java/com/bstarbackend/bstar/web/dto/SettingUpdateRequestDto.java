package com.bstarbackend.bstar.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SettingUpdateRequestDto {
    private String blogName;
    private String nickName;
    private String introduction;

    @Builder
    public SettingUpdateRequestDto(String blogName, String nickName, String introduction) {
        this.blogName = blogName;
        this.nickName = nickName;
        this.introduction = introduction;
    }
}
