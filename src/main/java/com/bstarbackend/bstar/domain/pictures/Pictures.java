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

    //@ManyToOne
    //@JoinColumn(name = "postId")
    @Column(nullable = false)
    private Long postId;
    @Column(length=500)
    private String pictureUrl;

    @Column(length=1000)
    private String pictureContent;

    @Builder
    public Pictures(Long postId, String pictureUrl, String pictureContent) {
        this.postId=postId;
        this.pictureUrl=pictureUrl;
        this.pictureContent=pictureContent;
    }

    public void update(String pictureUrl, String pictureContent) {
        this.pictureUrl=pictureUrl;
        this.pictureContent=pictureContent;
    }

}
