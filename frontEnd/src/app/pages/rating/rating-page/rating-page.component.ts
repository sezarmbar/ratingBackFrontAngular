import {Router, ActivatedRoute, Params, ParamMap} from '@angular/router';
import {OnInit, Component} from '@angular/core';
import {RatingService} from '../service/rating.service';
import {Rating, Review} from "../";
import {MdDialog, MdDialogRef} from '@angular/material';
import 'rxjs/add/operator/switchMap';

@Component({selector: 'app-rating-page', templateUrl: './rating-page.component.html', styleUrls: ['./rating-page.component.scss']})
export class RatingPageComponent implements OnInit {
  statusCode : number;
  rating : Rating;
  id : String;
  requestProcessing = false;
  allRating : Rating[];

  isLoaded : boolean = false;

  title : String = null;
  enteredReview : string = null;

  isRatinActiveded : boolean = false;

  review : Review;

  constructor(public dialog : MdDialog, private ratingService : RatingService, private router : Router, private activatedRoute : ActivatedRoute) {}

  ngOnInit() {
    let name = this
      .activatedRoute
      .snapshot
      .paramMap
      .get('id');
    this.getRatingByName(name);
    //          or  this.readIdFromUrl()
  }
  openDialog() {
    let dialogRef = this
      .dialog
      .open(DialogReviewEnter);
    dialogRef
      .afterClosed()
      .subscribe(result => {
        this.enteredReview = result;
        if (this.enteredReview != null && this.enteredReview != "") {
          this.addReview(this.enteredReview)
        }
      });
  }

  // readIdFromUrl() {
  //   this
  //     .activatedRoute
  //     .paramMap
  //     .switchMap((params : ParamMap) => this.ratingService.getRatingById(params.get('id')))
  //     .subscribe((rating : Rating) => this.rating = rating, (errorCode) => this.statusCode = errorCode);
  //   //  or this.activatedRoute.params.subscribe(   (params: Params) => {this.id =
  //   // params['id']; this.getRating(this.id); this.isLoaded = true},
  //   // (err)=>console.log(err))
  // }

  updateRating(event) {
    let rat = event.target.id;
    let tmpValue = this.rating[rat];
    tmpValue = (parseInt(tmpValue) + 1)
    this.rating[rat] = tmpValue
    this.onAddOrUpdateRate(this.rating);
  }

  onAddOrUpdateRate(rating : Rating) {
    this.preProcessConfigurations();
    this
      .ratingService
      .putRating(rating)
      .subscribe((successCode) => {
        this.statusCode = successCode;
        console.log(successCode)
      }, (errorCode) => this.statusCode = errorCode);
  }

  getRating(id) {
    this.preProcessConfigurations();
    this
      .ratingService
      .getRatingById(id)
      .subscribe((rating) => {
        this.requestProcessing = false;
        this.isRatinActiveded = rating.active;
        this.rating = rating;
        this.title = rating.description;
      }, (errorCode) => this.statusCode = errorCode);

  }
  getRatingByName(name) {
    this.preProcessConfigurations();
    this
      .ratingService
      .getRatingByName(name)
      .subscribe((rating) => {
        this.requestProcessing = false;
        this.isRatinActiveded = rating.active;
        this.rating = rating;
        this.title = rating.description;
      }, (errorCode) => this.statusCode = errorCode);

  }

  addReview(enterdReview) {
    let review = new Review(null, enterdReview, this.rating);
    console.log(review)
    this
      .ratingService
      .putReview(review)
      .subscribe((successCode) => {
        this.statusCode = successCode;
        this.enteredReview = null;
      }, (errorCode) => this.statusCode = errorCode);

  }

  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }

}

@Component({selector: 'dialog-review-enter', templateUrl: 'dialog-review-enter.html', styleUrls: ['./dialog-review-enter.scss']})
export class DialogReviewEnter {
  public enteredReview : string;
  constructor(public dialogRef : MdDialogRef < DialogReviewEnter >) {}

}