package com.bstarbackend.bstar.web.dto;

import com.bstarbackend.bstar.domain.user.Friends;
import lombok.Builder;

public class SettingFriendsSaveRequestDto {
    private String myEmail;
    private String friendName;
    private String friendEmail;

    @Builder
    public SettingFriendsSaveRequestDto(String myEmail, String friendName, String friendEmail) {
        this.myEmail = myEmail;
        this.friendName = friendName;
        this.friendEmail = friendEmail;
    }

    public Friends toEntity() {
        return Friends.builder()
                .myEmail(myEmail)
                .friendName(friendName)
                .friendEmail(friendEmail)
                .build();
    }
}
