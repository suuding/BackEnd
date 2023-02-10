package com.bstarbackend.bstar.domain.pictures;

import com.bstarbackend.bstar.domain.posts.Posts;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Pictures {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "postId")
    private Posts postid;

    @Column(length=1000)
    private String content;

    @Builder
    public Pictures(Posts postid, String content) {
        this.postid=postid;
        this.content=content;
    }

    public void update(String content) {
        this.content=content;
    }

}
