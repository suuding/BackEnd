package com.bstarbackend.bstar.domain.posts;

import com.bstarbackend.bstar.domain.BaseTimeEntity;
import com.bstarbackend.bstar.domain.user.Users;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Posts extends BaseTimeEntity {

    @Id
    @Column(name="postId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length=500, nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    //@ManyToOne
    //@JoinColumn(name = "userId")
    private String user;

    @Builder
    public Posts(String title, String content, String user) {
        this.title=title;
        this.content=content;
        this.user=user;
    }

    public void update(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
