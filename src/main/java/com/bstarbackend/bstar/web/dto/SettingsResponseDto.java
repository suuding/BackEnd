package com.bstarbackend.bstar.web.dto;

import com.bstarbackend.bstar.domain.setting.Settings;
import lombok.Getter;

@Getter
public class SettingsResponseDto {
    private String blogName;
    private String nickName;
    private String introduction;

    public SettingsResponseDto(Settings entity) {
        this.blogName = entity.getBlogName();
        this.nickName = entity.getNickName();
        this.introduction = entity.getIntroduction();
    }
}
