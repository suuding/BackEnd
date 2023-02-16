package com.bstarbackend.bstar.web;

import com.bstarbackend.bstar.config.auth.dto.LoginUser;
import com.bstarbackend.bstar.config.auth.dto.SessionUser;
import com.bstarbackend.bstar.service.PostsService;
import com.bstarbackend.bstar.web.dto.PostsResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@Controller
public class IndexController {

    private final PostsService postsService;
    private final HttpSession httpSession;

    @GetMapping("/main")
    public String index(Model model, @LoginUser SessionUser user) {
        model.addAttribute("posts", postsService.findAll());

        if (user != null)
            model.addAttribute("userName", user.getName());

        //로그인 한 main 페이지 보여줌
        return "main";
    }
}
