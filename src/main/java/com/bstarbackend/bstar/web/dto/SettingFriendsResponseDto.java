package com.bstarbackend.bstar.web.dto;

import com.bstarbackend.bstar.domain.setting.Settings;
import com.bstarbackend.bstar.domain.user.Friends;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class SettingFriendsResponseDto {
    private List<String> friendName;
    private List<String> friendEmail;

    public SettingFriendsResponseDto(List<Friends> flist){
        List<String> friendNameList = new ArrayList<String>();
        List<String> friendEmailList = new ArrayList<String>();
        for(Friends i : flist)
        {
            friendNameList.add(i.getFriendName());
            friendEmailList.add(i.getFriendEmail());
        }

        this.friendName = friendNameList;
        this.friendEmail = friendEmailList;

    }
}
