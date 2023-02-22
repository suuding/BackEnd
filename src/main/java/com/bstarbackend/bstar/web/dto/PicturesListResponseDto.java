package com.bstarbackend.bstar.web.dto;

import com.bstarbackend.bstar.domain.pictures.Pictures;
import lombok.Getter;

@Getter
public class PicturesListResponseDto {

    private Long id;
    private Long postId;
    private String pictureUrl;
    private String pictureContent;

    public PicturesListResponseDto(Pictures entity) {
        this.id=entity.getId();
        this.postId=entity.getPostId();
        this.pictureUrl=entity.getPictureUrl();
        this.pictureContent=entity.getPictureContent();
    }
}
