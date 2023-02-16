package com.bstarbackend.bstar.web;

import com.bstarbackend.bstar.domain.pictures.Pictures;
import com.bstarbackend.bstar.service.PicturesService;
import com.bstarbackend.bstar.web.dto.PicturesListResponseDto;
import com.bstarbackend.bstar.web.dto.PicturesResponseDto;
import com.bstarbackend.bstar.web.dto.PicturesSaveRequestDto;
import com.bstarbackend.bstar.web.dto.PicturesUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@Slf4j
public class PicturesController {

    private final PicturesService picturesService;

    @PostMapping("/pictures")
    public Long save(@RequestBody PicturesSaveRequestDto requestDto) {
        System.out.println(requestDto.getPictureContent());

        return picturesService.save(requestDto);
    }

    @PutMapping("/pictures/{id}")
    public Long update(@PathVariable Long id, @RequestBody PicturesUpdateRequestDto requestDto) {
        return picturesService.update(id, requestDto);
    }

    @GetMapping("/pictures/{id}")
    public PicturesResponseDto findById(@PathVariable Long id) {
        return picturesService.findById(id);
    }

    @GetMapping("/pictures/list")
    public List<PicturesListResponseDto> findAll() {
        return picturesService.findAll();
    }

    @DeleteMapping("/pictures/{id}")
    public Long delete(@PathVariable Long id) {
        picturesService.delete(id);

        return id;
    }
}