package com.bstarbackend.bstar.domain.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface FriendsRepository extends JpaRepository<Friends, Long> {
    Optional<Friends> findByMyEmail(String myEmail);
}