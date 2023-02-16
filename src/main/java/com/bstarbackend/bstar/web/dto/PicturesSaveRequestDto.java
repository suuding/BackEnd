package com.bstarbackend.bstar.web.dto;

import com.bstarbackend.bstar.domain.pictures.Pictures;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PicturesSaveRequestDto {

    private Long id;
    private Long postId;
    private String pictureUrl;
    private String pictureContent;

    @Builder
    public PicturesSaveRequestDto(Long postId, String pictureUrl, String pictureContent) {
        this.postId=postId;
        this.pictureUrl=pictureUrl;
        this.pictureContent=pictureContent;
    }

    public Pictures toEntity() {
        return Pictures.builder()
                .postId(postId)
                .pictureUrl(pictureUrl)
                .pictureContent(pictureContent)
                .build();
    }

}
