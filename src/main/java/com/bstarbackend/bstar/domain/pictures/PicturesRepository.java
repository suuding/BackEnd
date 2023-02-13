package com.bstarbackend.bstar.domain.pictures;

import com.bstarbackend.bstar.domain.posts.Posts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PicturesRepository extends JpaRepository<Posts, Long>  {
}
