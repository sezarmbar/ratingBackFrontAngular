import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Rating, Review} from "../../";
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({selector: 'app-rating-info', templateUrl: './rating-info.component.html', styleUrls: ['./rating-info.component.scss']})
export class RatingInfoComponent implements OnInit {

  @Input()rating : Rating;
  @Input()reviews : Review[];
  @Input()chartDate : any;

  @Output()changRatingActiveStatus : EventEmitter < any > = new EventEmitter < any > ();
  checked : boolean = false;
  showChart : boolean = true;
  highlights = new Set < string > ();
  displayedColumns = ['userName'];
  reviewDatabase;
  dataSource : ReviewDataSource | null;
  constructor() {}

  outRatingStatus(data:boolean):void {
    this.changRatingActiveStatus.emit(data)
  }
  setReviewData(reviews):void {
    this.checked = this.rating.active;
    this.reviewDatabase = new ReviewDatabase(reviews);
    this.dataSource = new ReviewDataSource(this.reviewDatabase);
    this
      .highlights
      .add("odd")
  }
  ngOnInit() {
    this.checked = this.rating.active;
    this.reviewDatabase = new ReviewDatabase(this.reviews);
    this.dataSource = new ReviewDataSource(this.reviewDatabase);
    this
      .highlights
      .add("odd")

    // this.dataSource = new ReviewDataSource(this.reviewDatabase);
  }

}

export interface Reviews {
  name : string;
}

export class ReviewDatabase {
  dataChange : BehaviorSubject < Reviews[] > = new BehaviorSubject < Reviews[] > ([]);
  get data() : Reviews[] {
    return this.dataChange.value;
  }
  reviews : [any]
  constructor(reviews) {
    this.reviews = reviews
    for (let i = 0; i < reviews.length; i++) {
      this.addUser(i);
    }
  }

  addUser(i) {
    const copiedData = this
      .data
      .slice();
    copiedData.push(this.createNewUser(i));
    this
      .dataChange
      .next(copiedData);
  }

  private createNewUser(i) {
    const name = this.reviews[i];

    return {name: name};
  }
}

export class ReviewDataSource extends DataSource < any > {
  constructor(private _ReviewDatabase : ReviewDatabase) {
    super();
  }
  connect() : Observable < Reviews[] > {
    return this._ReviewDatabase.dataChange;
  }

  disconnect() {}
}
