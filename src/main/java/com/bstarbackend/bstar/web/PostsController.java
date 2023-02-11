package com.bstarbackend.bstar.web;

import com.bstarbackend.bstar.service.PostsService;
import com.bstarbackend.bstar.web.dto.PostsListResponseDto;
import com.bstarbackend.bstar.web.dto.PostsResponseDto;
import com.bstarbackend.bstar.web.dto.PostsSaveRequestDto;
import com.bstarbackend.bstar.web.dto.PostsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class PostsController {

    private final PostsService postsService;

    //글 등록
    @PostMapping("/posts")
    public Long save(@RequestBody PostsSaveRequestDto requestDto) {
        System.out.println(requestDto);

        return postsService.save(requestDto);
    }

    //글 수정
    @PutMapping("/posts/{id}")
    public Long update(@PathVariable Long id, @RequestBody PostsUpdateRequestDto requestDto) {
        return postsService.update(id, requestDto);
    }

    //특정 글 조회
    @GetMapping("/posts/{id}")
    public PostsResponseDto findById(@PathVariable Long id) {
        return postsService.findById(id);
    }

    //글 전체 조회
    @GetMapping("/posts/list")
    public List<PostsListResponseDto> findAll() {
        return postsService.findAll();
    }

    //특정 글 삭제
    @DeleteMapping("/posts/{id}")
    public Long delete(@PathVariable Long id) {
        postsService.delete(id);

        return id;
    }

}
