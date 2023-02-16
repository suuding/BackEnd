package com.bstarbackend.bstar.service;

import com.bstarbackend.bstar.domain.pictures.Pictures;
import com.bstarbackend.bstar.domain.pictures.PicturesRepository;
import com.bstarbackend.bstar.web.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PicturesService {

    private final PicturesRepository picturesRepository;

    @Transactional
    public Long save(PicturesSaveRequestDto requestDto) {
        System.out.println(requestDto.getPictureUrl());
        System.out.println(requestDto.getPictureContent());
        return picturesRepository.save(requestDto.toEntity()).getId();
    }

    @Transactional
    public Long update(Long id, PicturesUpdateRequestDto requestDto) {
        Pictures pictures = picturesRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id="+id));

        pictures.update(requestDto.getPictureUrl(), requestDto.getPictureContent());

        return id;
    }

    @Transactional
    public PicturesResponseDto findById(Long id) {
        Pictures entity = picturesRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("해당 게시글이 없습니다. id="+id));

        return new PicturesResponseDto(entity);
    }

    @Transactional(readOnly=true)
    public List<PicturesListResponseDto> findAll() {
        return picturesRepository.findAll().stream()
                .map(PicturesListResponseDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public void delete(Long id) {
        Pictures pictures = picturesRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("해당 게시글이 없습니다. id="+id));

        picturesRepository.delete(pictures);
    }

}