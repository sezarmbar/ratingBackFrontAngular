import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


import { Rating,Review } from "../";
@Injectable()
export class RatingService {
	port = "8080"
	rating = "http://localhost:"+this.port+"/api/rating";
	allrating = "http://localhost:"+this.port+"/api/all-rating";

	allReview = "http://localhost:"+this.port+"/api/all-reviews";

	review = "http://localhost:"+this.port+"/api/review";
	constructor(private http:Http) { 
	}
// Review --------


	getAllReviews(rating:Rating): Observable<Review[]> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: cpHeaders });

        return this.http.post(this.allReview,rating,options)
		   		.map(this.extractData)
		        .catch(this.handleError);

    }

	putReview(review: Review):Observable<number> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: cpHeaders });
		return this.http.post(this.review, review, options)
               .map(success => success.status)
               .catch(this.handleError);
	}


// Rating ------------

	getAllRatings(): Observable<Rating[]> {
        return this.http.get(this.allrating)
		   		.map(this.extractData)
		        .catch(this.handleError);

    }
		
	getRatingById(id: string): Observable<Rating> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let cpParams = new URLSearchParams();
		cpParams.set('id', id);			
		let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
		return this.http.get(this.rating, options)
			   .map(this.extractData)
			   .catch(this.handleError);
	}	

	putRating(rating: Rating):Observable<number> {
	    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.rating, rating, options)
               .map(success => success.status)
               .catch(this.handleError);
	}	
	deleteRatingById(id: string): Observable<number> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let cpParams = new URLSearchParams();
		cpParams.set('id', id);			
		let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
		return this.http.delete(this.rating, options)
			   .map(success => success.status)
			   .catch(this.handleError);
    }		

	// Utils -------------
	private extractData(res: Response) {
	    let body = res.json();
        return body;
	}
	
    private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status);
	}

	
}