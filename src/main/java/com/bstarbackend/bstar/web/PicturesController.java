package com.bstarbackend.bstar.web;

import com.bstarbackend.bstar.domain.pictures.Pictures;
import com.bstarbackend.bstar.service.PicturesService;
import com.bstarbackend.bstar.web.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class PicturesController {

    private final PicturesService picturesService;
    private Long postId = 0L;

    @PostMapping("/api/pictures")
    public Long save(@RequestBody List<PicturesSaveRequestDto> requestDto) {
        postId = postId + 1;
        try {
            for (PicturesSaveRequestDto picturesSaveRequestDto : requestDto) {
                //System.out.println("picturesSaveRequestDto = " + picturesSaveRequestDto.getPictureUrl());
                picturesSaveRequestDto.setPostId(postId);
                System.out.println("postId = " + picturesSaveRequestDto.getPostId());
            }
        } catch (Exception e) {
            System.out.println("e = " + e);
        }

        return picturesService.save(requestDto);
    }

    @PutMapping("/api/pictures/{id}")
    public Long update(@PathVariable Long id, @RequestBody List<PicturesUpdateRequestDto> requestDto) {
        return picturesService.update(id, requestDto);
    }

    @GetMapping("/api/pictures/{id}")
    public List<PicturesListResponseDto> findByPostId(@PathVariable Long id) {
        return picturesService.findByPostId(id);
    }

    @GetMapping("/api/pictures/list")
    public List<PicturesListResponseDto> findAll() {
        return picturesService.findAll();
    }

    @DeleteMapping("/api/pictures/{id}")
    public Long delete(@PathVariable Long id) {
        picturesService.delete(id);

        return id;
    }
}