import {Router, ActivatedRoute, Params} from '@angular/router';
import {OnInit, Component, ViewChild} from '@angular/core';
import {Rating, Review, RatingService} from "../";
import {RatingInfoComponent} from "./rating-info/rating-info.component";

@Component({selector: 'app-admin-rating-page', templateUrl: './admin-rating-page.component.html', styleUrls: ['./admin-rating-page.component.scss']})
export class AdminRatingPageComponent implements OnInit {

  showCreateForm : boolean = false;
  showRatingInfo : boolean = false;
  statusCode : number;
  rating : Rating = new Rating(null, null, null, null, null, null, null, null, null, null);
  id : String = "1";
  requestProcessing = false;
  allRating : Rating[];
  nameRating : string = "new One";
  description : string = "description for theis";
  allReviwsForRating : Review[];
  chartDate : any;

  @ViewChild('setReviewData')ReviewData : RatingInfoComponent;
  constructor(private ratingService : RatingService, private route : Router, private activatedRoute : ActivatedRoute) {}

  ngOnInit() {
    this.getAllRating();

  }

  readIdFromUrl() {
    this
      .activatedRoute
      .params
      .subscribe((params : Params) => {
        this.id = params['id'];
        this.getRating(this.id)
      }, (err) => console.log(err))

  }

  createNewRating() {
    let ratein = new Rating(null, this.nameRating, this.description, "0", "0", "0", "0", "0", null, true)
    this.createUpdaterating(ratein)
  }

  updateRatingActiveStatus(value:boolean):void{
    this.rating.active = value;
    this.createUpdaterating(this.rating);
    
  }
  createUpdaterating(rating : Rating) {
    this.preProcessConfigurations();
    this
      .ratingService
      .putRating(rating)
      .subscribe((successCode) => {
        this.statusCode = successCode;
        this.requestProcessing = false;
        this.getAllRating();
        this.formClose()
      }, (errorCode) => this.statusCode = errorCode);

  }

  getAllRating() {
    this.preProcessConfigurations();
    this
      .ratingService
      .getAllRatings()
      .subscribe((data) => {
        this.allRating = data;
        this.requestProcessing = false;
      }, (errorCode) => this.statusCode = errorCode);
  }

  getRating(id) {
    this.preProcessConfigurations();
    this
      .ratingService
      .getRatingById(id)
      .subscribe((rating) => {
        this.requestProcessing = false;
        this.rating = rating;
        this.constructorChartData();
        this.getAllReviews()
      }, (errorCode) => this.statusCode = errorCode);

  }

  deletRaing(id) {
    this.preProcessConfigurations();
    this
      .ratingService
      .deleteRatingById(id)
      .subscribe((successCode) => {
        this.statusCode = successCode;
        this.requestProcessing = false;
        this.getAllRating()
      }, (errorCode) => this.statusCode = errorCode);
  }

  getAllReviews() {
    this
      .ratingService
      .getAllReviews(this.rating)
      .subscribe(reviews => {
        this.allReviwsForRating = reviews;
        this.infoRating();
        this.setReviewData(reviews);
      }, (errorCode) => this.statusCode = errorCode)
  }
  setReviewData(reviews) {
    if (this.ReviewData != undefined) 
      {this.ReviewData.setReviewData(reviews);}
    }
  constructorChartData() {
    this.chartDate = [
      {
        "name": "schlicht",
        "value": this.rating.veryBad
      }, {
        "name": "unzufrieden",
        "value": this.rating.bad
      }, {
        "name": "normal",
        "value": this.rating.normal
      }, {
        "name": "zufrieden",
        "value": this.rating.god
      }, {
        "name": "glücklich",
        "value": this.rating.veryGod
      }
    ];

  }
  formClose() {
    this.showCreateForm = false
  }
  formOpen() {
    this.showCreateForm = true
    this.showRatingInfo = false
  }
  infoRating() {
    this.showCreateForm = false
    this.showRatingInfo = true
  }
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }

}
