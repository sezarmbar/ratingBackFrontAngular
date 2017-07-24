package com.sezar.repository;

import com.sezar.entity.Rating;
import com.sezar.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by mahmoudbarakat on 21.07.17.
 */
public interface ReviewRepository extends JpaRepository<Review,Long> {
    List<Review> findAllByRating(Rating rating);

    @Query("SELECT  p.reviewText FROM Review p  WHERE p.rating = (:rating)")
    List<Review> findAllByRatingLazy(@Param("rating")Rating rating);

}
