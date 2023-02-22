package com.bstarbackend.bstar.domain.pictures;

import com.bstarbackend.bstar.web.dto.PicturesListResponseDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PicturesRepository extends JpaRepository<Pictures, Long>  {
    @Query("SELECT p FROM Pictures p WHERE p.postId=:postId")
    List<Pictures> findByPostId(@Param("postId") Long postId);
}
