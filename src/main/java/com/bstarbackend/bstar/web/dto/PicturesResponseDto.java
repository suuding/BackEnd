package com.bstarbackend.bstar.web.dto;

import com.bstarbackend.bstar.domain.pictures.Pictures;

public class PicturesResponseDto {

    private Long id;
    private Long postId;
    private String pictureUrl;
    private String pictureContent;

    public PicturesResponseDto(Pictures entity) {
        this.id=entity.getId();
        this.postId=entity.getPostId();
        this.pictureUrl=entity.getPictureUrl();
        this.pictureContent=entity.getPictureContent();
    }
}
