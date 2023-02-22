package com.bstarbackend.bstar.service;

import com.bstarbackend.bstar.domain.pictures.Pictures;
import com.bstarbackend.bstar.domain.pictures.PicturesRepository;
import com.bstarbackend.bstar.web.dto.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Getter
@Setter
public class PicturesService {

    private final PicturesRepository picturesRepository;

    @Transactional
    public Long save(List<PicturesSaveRequestDto> requestDto) {
        try {
            for (PicturesSaveRequestDto picturesSaveRequestDto : requestDto) {
                picturesRepository.save(picturesSaveRequestDto.toEntity());
            }
        } catch (Exception e) {
            System.out.println("e = " + e);
        }
        return null;
    }

    @Transactional
    public Long update(Long id, List<PicturesUpdateRequestDto> requestDto) {
        Pictures pictures = picturesRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id="+id));

        for (PicturesUpdateRequestDto picturesUpdateRequestDto : requestDto) {
            pictures.update(picturesUpdateRequestDto.getPictureUrl(), picturesUpdateRequestDto.getPictureContent());
        }

        return id;
    }

    @Transactional
    public List<PicturesListResponseDto> findByPostId(Long id) {

        //Pictures entity = picturesRepository.findByPostId(id);

        return picturesRepository.findByPostId(id).stream()
                .map(PicturesListResponseDto::new)
                .collect(Collectors.toList());
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