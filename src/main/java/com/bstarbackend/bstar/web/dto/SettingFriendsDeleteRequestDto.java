package com.bstarbackend.bstar.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class SettingFriendsDeleteRequestDto {
    private List<String> friendEmail;

    @Builder
    public SettingFriendsDeleteRequestDto(List<String> friendEmail) {
        this.friendEmail = friendEmail;
    }


}
