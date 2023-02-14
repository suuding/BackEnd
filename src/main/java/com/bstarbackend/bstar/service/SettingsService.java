package com.bstarbackend.bstar.service;

import com.bstarbackend.bstar.domain.setting.Settings;
import com.bstarbackend.bstar.domain.setting.SettingsRepository;
import com.bstarbackend.bstar.domain.user.Friends;
import com.bstarbackend.bstar.domain.user.FriendsRepository;
import com.bstarbackend.bstar.web.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Transactional
    public Friends saveFriend(String myEmail, String friendName, String friendEmail) {
        /*
        String myEmail = "chaee813@gmail.com";
        String friendName = "앙서";
        String friendEmail = "merry0920@gmail.com";
        */
        SettingFriendsRequestDto requestDto = new SettingFriendsRequestDto(myEmail, friendName, friendEmail);
        friendsRepository.save(requestDto.toEntity());
        return requestDto.toEntity();
    }
    @Transactional(readOnly = true)
    public SettingsResponseDto findByEmail(String nickName, String email) {
        Settings entity = settingsRepository.findByEmail(email)
                .orElseGet(() -> save(nickName, email));

        return new SettingsResponseDto(entity);
    }

    @Transactional(readOnly = true)
    public SettingFriendsResponseDto findByMyEmail(String myEmail){
        Friends entity = friendsRepository.findByMyEmail(myEmail)
                .orElseGet(()-> saveFriend(myEmail,"앙서","merry0920@gmail.com"));

        return new SettingFriendsResponseDto(entity);
    }

}
