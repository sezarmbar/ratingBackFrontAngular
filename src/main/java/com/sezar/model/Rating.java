package com.sezar.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.joda.time.DateTime;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Set;

/**
 * Created by mahmoudbarakat on 20.07.17.
 */
@Entity
@Table(name="rating")
public class Rating implements Serializable {

    private static final long serialVersionUID = 1905122041950251237L;

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "rating_id")
    private Long ratingId;
    @Column(unique=true)
    private String nameOfRat;
    private int waitingTime;

    private String description;
    private String veryBad;
    private String bad;
    private String normal;
    private String god;
    private String veryGod;
    private boolean active;

    @OneToMany(mappedBy = "rating",fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Review> reviews;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    public Rating() {
    }

    public Rating(String nameOfRat, String veryBad, String bad, String normal, String god, String veryGod,String description,boolean active,int waitingTime) {
        this.nameOfRat = nameOfRat;
        this.veryBad = veryBad;
        this.bad = bad;
        this.normal = normal;
        this.god = god;
        this.veryGod = veryGod;
        this.description = description;
        this.active = active;
        this.waitingTime = waitingTime;

    }

    public int getwaitingTime() {
        return waitingTime;
    }

    public void setwaitingTime(int waitingTime) {
        this.waitingTime = waitingTime;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getId() {
        return ratingId;
    }

    public void setId(Long ratingId) {
        this.ratingId = ratingId;
    }

    public String getNameOfRat() {
        return nameOfRat;
    }

    public void setNameOfRat(String nameOfRat) {
        this.nameOfRat = nameOfRat;
    }

    public String getVeryBad() {
        return veryBad;
    }

    public void setVeryBad(String veryBad) {
        this.veryBad = veryBad;
    }

    public String getBad() {
        return bad;
    }

    public void setBad(String bad) {
        this.bad = bad;
    }

    public String getNormal() {
        return normal;
    }

    public void setNormal(String normal) {
        this.normal = normal;
    }

    public String getGod() {
        return god;
    }

    public void setGod(String god) {
        this.god = god;
    }

    public String getVeryGod() {
        return veryGod;
    }

    public void setVeryGod(String veryGod) {
        this.veryGod = veryGod;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }


    public Set<Review> getReviews() {
        return reviews;
    }

    public void setReviews(Set<Review> reviews) {
        this.reviews = reviews;
    }

    @Override
    public String toString() {
        return "Rating{" +
                "ratingId=" + ratingId +
                ", nameOfRat='" + nameOfRat + '\'' +
                ", waitingTime=" + waitingTime +
                ", description='" + description + '\'' +
                ", veryBad='" + veryBad + '\'' +
                ", bad='" + bad + '\'' +
                ", normal='" + normal + '\'' +
                ", god='" + god + '\'' +
                ", veryGod='" + veryGod + '\'' +
                ", active=" + active +
                ", reviews=" + reviews +
                ", createdAt=" + createdAt +
                '}';
    }

    @PrePersist
    public void preSave() {
        preSaveImpl();
    }

    protected void preSaveImpl() {
        Timestamp now = new Timestamp(new DateTime().getMillis());
        if ( getCreatedAt() == null ) {
            setCreatedAt( now );
        }
    }
}
