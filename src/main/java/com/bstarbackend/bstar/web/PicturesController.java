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

    @PostMapping("/api/pictures")
    public Long save(@RequestBody List<PicturesSaveRequestDto> requestDto) {

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