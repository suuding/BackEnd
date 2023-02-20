package com.bstarbackend.bstar.service;

import com.bstarbackend.bstar.domain.setting.Settings;
import com.bstarbackend.bstar.domain.setting.SettingsRepository;
import com.bstarbackend.bstar.domain.user.Friends;
import com.bstarbackend.bstar.domain.user.FriendsRepository;
import com.bstarbackend.bstar.web.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class SettingsService {
    private final SettingsRepository settingsRepository;
    private final FriendsRepository friendsRepository;

    @Transactional
    public Settings save(String nickName, String email) {
        String blogName = nickName + "의 블로그";
        String introduction = "안녕하세요. " + nickName + "의 블로그입니다.";
        SettingsSaveRequestDto requestDto = new SettingsSaveRequestDto(blogName, nickName, introduction, email);
        settingsRepository.save(requestDto.toEntity());
        return requestDto.toEntity();
    }

    @Transactional
    public String update(String email, SettingUpdateRequestDto requestDto) {
        Settings settings = settingsRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("해당 이메일의 정보가 없습니다. email=" + email));
        settings.update(requestDto.getBlogName(), requestDto.getNickName(), requestDto.getIntroduction());
        return email;
    }

    @Transactional(readOnly = true)
    public SettingsResponseDto findByEmail(String nickName, String email) {
        Settings entity = settingsRepository.findByEmail(email)
                .orElseGet(() -> save(nickName, email));

        return new SettingsResponseDto(entity);
    }

    @Transactional
    public Friends saveFriend(String myEmail, String friendName, String friendEmail) {
        SettingFriendsSaveRequestDto requestDto = new SettingFriendsSaveRequestDto(myEmail, friendName, friendEmail);
        friendsRepository.save(requestDto.toEntity());
        return requestDto.toEntity();
    }

    @Transactional
    public void saveFriendsList(String myEmail){
        saveFriend(myEmail, "영채", "chaee813@gmail.com");
        saveFriend(myEmail, "수현", "sudaeng2@gmail.com");
        saveFriend(myEmail, "주희", "zigimi@gmail.com");
    }

    @Transactional(readOnly = true)
    public SettingFriendsResponseDto findByMyEmail(String myEmail){
        List<Friends> friendList = friendsRepository.findByMyEmail(myEmail);
        if(friendList == null || friendList.isEmpty()) {
            saveFriendsList(myEmail);
            friendList = friendsRepository.findByMyEmail(myEmail);
        }

        return new SettingFriendsResponseDto(friendList);
    }

    @Transactional
    public void delete(String myEmail, String friendEmail) {
        Friends friends = friendsRepository.findByMyEmailAndFriendEmail(myEmail, friendEmail);

        friendsRepository.delete(friends);
    }
}
