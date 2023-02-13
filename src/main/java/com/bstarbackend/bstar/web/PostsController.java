package com.bstarbackend.bstar.web;

import com.bstarbackend.bstar.config.auth.dto.LoginUser;
import com.bstarbackend.bstar.config.auth.dto.SessionUser;
import com.bstarbackend.bstar.service.PostsService;
import com.bstarbackend.bstar.web.dto.PostsListResponseDto;
import com.bstarbackend.bstar.web.dto.PostsResponseDto;
import com.bstarbackend.bstar.web.dto.PostsSaveRequestDto;
import com.bstarbackend.bstar.web.dto.PostsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.method.P;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@Slf4j
public class PostsController {

    private final PostsService postsService;


    //글 등록
    @PostMapping("/posts")
    public Long save(@RequestBody PostsSaveRequestDto requestDto) {
        System.out.println(requestDto.getTitle());
        System.out.println(requestDto.getContent());

        //아직 getName 에러 해결 못해서 임의로 user 설정
        if (requestDto.getUser() == null) {
            requestDto.setUser("김수현");
        }

        return postsService.save(requestDto);
    }

    //수정 페이지 요청

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
