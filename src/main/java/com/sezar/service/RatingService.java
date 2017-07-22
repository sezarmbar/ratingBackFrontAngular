package com.sezar.service;

import com.sezar.entity.Rating;

import java.util.List;

/**
 * Created by mahmoudbarakat on 20.07.17.
 */


public interface RatingService {
    public Rating findById(Long id);
    public Rating findByNameOfRat(String nameOfRat);
    boolean createRating(Rating rating);
    boolean updateRating(Rating rating);
    public List<Rating> findAll();
    void deleteRating(Long id);

}
