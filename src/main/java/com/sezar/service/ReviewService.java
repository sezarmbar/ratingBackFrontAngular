package com.sezar.service;

import com.sezar.entity.Rating;
import com.sezar.entity.Review;

import java.util.List;

/**
 * Created by mahmoudbarakat on 21.07.17.
 */
public interface ReviewService {
    public List<Review> findAll();
    public boolean createReview(Review review);
    public  List<Review> findAllByRating(Rating rating);
    public  List<Review> findAllByRatingLazy(Rating rating);
    public  void deleteReviewByRating(Rating rating);
}
