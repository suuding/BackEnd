package com.bstarbackend.bstar.web.dto;

import com.bstarbackend.bstar.domain.setting.Settings;
import lombok.Builder;

public class SettingsSaveRequestDto {
    private String blogName;
    private String nickName;

    private String introduction;
    private String email;

    @Builder
    public SettingsSaveRequestDto(String blogName, String nickName, String introduction, String email) {
        this.blogName = blogName;
        this.nickName = nickName;
        this.introduction = introduction;
        this.email = email;
    }
    public Settings toEntity() {
        return Settings.builder()
                .blogName(blogName)
                .nickName(nickName)
                .introduction(introduction)
                .email(email)
                .build();
    }
}
