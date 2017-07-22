package com.sezar.repository;

import com.sezar.entity.Rating;
import com.sezar.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by mahmoudbarakat on 21.07.17.
 */
public interface ReviewRepository extends JpaRepository<Review,Long> {
    List<Review> findAllByRating(Rating rating);
}
