import { Router, ActivatedRoute, Params } from '@angular/router';
import {OnInit, Component} from '@angular/core';
import { CreateRatingComponent } from "./create-rating/create-rating.component";
import { Rating, Review,RatingService } from "../";


@Component({
  selector: 'app-admin-rating-page',
  templateUrl: './admin-rating-page.component.html',
  styleUrls: ['./admin-rating-page.component.scss']
})
export class AdminRatingPageComponent implements OnInit {
titleSide = "Ratings";
showCreateForm:boolean = false;
statusCode: number;
rating: Rating;
id: String ="1" ;
requestProcessing = false;
allRating: Rating[];
nameRating:string = "new One";
description:string = "description for theis";
allReviwsForRating:Review[];
   constructor(private ratingService: RatingService,private route: Router, private activatedRoute: ActivatedRoute ) {}
  
    ngOnInit() {
      this.getAllRating();

    }    
   

    readIdFromUrl(){
      this.activatedRoute.params.subscribe(
        (params: Params) => {this.id = params['id']; this.getRating(this.id)},
        (err)=>console.log(err))
        
    }

    createNewRating(){
      let ratein = new Rating(null,this.nameRating,this.description,"0","0","0","0","0",null,true)
      this.createUpdaterating(ratein)
    }

     createUpdaterating(rating:Rating){
     this.preProcessConfigurations();
     this.ratingService.putRating(rating).subscribe(
        (successCode) => {this.statusCode = successCode; this.requestProcessing = false; this.getAllRating();this.formClose()},
        (errorCode) => this.statusCode = errorCode);	  
    }
      

    getAllRating(){
       this.preProcessConfigurations();
       this.ratingService.getAllRatings().subscribe(
        (data) => {this.allRating = data; this.requestProcessing = false;},
        (errorCode) =>  this.statusCode = errorCode);  
    }
      
    getRating(id){
      this.preProcessConfigurations();
      this.ratingService.getRatingById(id).subscribe(
        (rating) => { this.requestProcessing = false;  this.rating = rating; this.getAllReviews()},
        (errorCode) =>  this.statusCode = errorCode);   
               
    }

    deletRaing(id){
      this.preProcessConfigurations();
      this.ratingService.deleteRatingById(id).subscribe(
        (successCode) => { this.statusCode = successCode; this.requestProcessing = false; this.getAllRating() },
        (errorCode) =>  this.statusCode = errorCode );    
    }

    getAllReviews(){
      this.ratingService.getAllReviews(this.rating).subscribe(
        reviews=> {this.allReviwsForRating = reviews ;},
        (errorCode) =>  this.statusCode = errorCode)
    }


    formClose(){
      this.showCreateForm = false
    }
    formOpen(){
      this.showCreateForm = true
    }
    preProcessConfigurations() {
      this.statusCode = null;
      this.requestProcessing = true;   
    }


}
