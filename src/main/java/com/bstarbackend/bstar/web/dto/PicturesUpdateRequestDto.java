package com.bstarbackend.bstar.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PicturesUpdateRequestDto {

    private String pictureUrl;
    private String pictureContent;

    @Builder
    public PicturesUpdateRequestDto(String pictureUrl, String pictureContent) {
        this.pictureUrl = pictureUrl;
        this.pictureContent = pictureContent;
    }
}
