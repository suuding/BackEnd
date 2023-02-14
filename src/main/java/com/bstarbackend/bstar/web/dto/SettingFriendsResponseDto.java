package com.bstarbackend.bstar.web.dto;

import com.bstarbackend.bstar.domain.setting.Settings;
import com.bstarbackend.bstar.domain.user.Friends;

public class SettingFriendsResponseDto {
    private String friendName;
    private String friendEmail;

    public SettingFriendsResponseDto(Friends entity) {
       this.friendName = entity.getFriendName();
       this.friendEmail = entity.getFriendEmail();
    }
}
