package com.bstarbackend.bstar.domain.user;

import com.bstarbackend.bstar.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Friends {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String friendName;

    @Column(nullable = false)
    private String friendEmail;

    @Column(nullable = false)
    private String myEmail;

    @Builder
    public Friends(String friendName, String friendEmail, String myEmail) {
        this.friendName = friendName;
        this.friendEmail = friendEmail;
        this.myEmail = myEmail;
    }
}