package com.bstarbackend.bstar.domain.setting;

import com.bstarbackend.bstar.domain.BaseTimeEntity;
import com.bstarbackend.bstar.domain.user.Role;
import com.bstarbackend.bstar.domain.user.Users;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Settings extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String blogName;
    @Column(nullable = false)
    private String nickName;

    private String introduction;

    private String email;

    @Builder
    public Settings(String blogName, String nickName, String introduction, String email) {
        this.blogName = blogName;
        this.nickName = nickName;
        this.introduction = introduction;
        this.email = email;
    }

    public void update(String blogName, String nickName, String introduction) {
        this.blogName = blogName;
        this.nickName = nickName;
        this.introduction = introduction;
    }

}
