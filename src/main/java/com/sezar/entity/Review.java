package com.sezar.entity;

import javax.persistence.*;

/**
 * Created by mahmoudbarakat on 21.07.17.
 */

@Entity
public class Review {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "review_id")
    private Long reviewId;

    private String review;

    @ManyToOne
    @JoinColumn(name = "id", nullable = false)
    private Rating rating;

    public Review() {
    }

    public Review(String review, Rating rating) {
        this.review = review;
        this.rating = rating;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }


    public Rating getRating() {
        return rating;
    }

    public void setRating(Rating rating) {
        this.rating = rating;
    }

    public Long getReviewId() {
        return reviewId;
    }

    public void setReviewId(Long reviewId) {
        this.reviewId = reviewId;
    }

    @Override
    public String toString() {
        return "Review{" +
                "reviewId=" + reviewId +
                ", review='" + review + '\'' +
                ", rating=" + rating +
                '}';
    }
}
