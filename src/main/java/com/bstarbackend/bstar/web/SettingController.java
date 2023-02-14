package com.bstarbackend.bstar.web;

import com.bstarbackend.bstar.service.SettingsService;
import com.bstarbackend.bstar.web.dto.SettingFriendsResponseDto;
import com.bstarbackend.bstar.web.dto.SettingUpdateRequestDto;
import com.bstarbackend.bstar.web.dto.SettingsResponseDto;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class SettingController {

    private final SettingsService settingsService;
    @GetMapping("/setting/info")
    public SettingsResponseDto enroll(Authentication authentication, @AuthenticationPrincipal UserDetails userDetails) {
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        SettingsResponseDto settings = settingsService.findByEmail(oAuth2User.getAttribute("name"), oAuth2User.getAttribute("email"));
        return settings;
    }

    @PutMapping("/setting/info")
    public void update(Authentication authentication, @RequestBody SettingUpdateRequestDto requestDto) {
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        settingsService.update(oAuth2User.getAttribute("email"), requestDto);
    }


    @GetMapping("/setting/friends")
    public SettingFriendsResponseDto showFriends(Authentication authentication, @AuthenticationPrincipal UserDetails userDetails){
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        SettingFriendsResponseDto friends = settingsService.findByMyEmail(oAuth2User.getAttribute("email"));
        return friends;
    }


    @GetMapping("/setting/delete")
    public void deleteFriends(Authentication authentication, @AuthenticationPrincipal UserDetails userDetails){

    }
}
