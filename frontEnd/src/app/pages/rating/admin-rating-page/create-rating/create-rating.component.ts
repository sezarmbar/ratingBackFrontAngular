import {Component, OnInit,Output,EventEmitter} from '@angular/core';
import {Rating} from "../../";

@Component({
selector: 'app-create-rating', 
templateUrl: './create-rating.component.html', 
styleUrls: ['./create-rating.component.scss']
})
export class CreateRatingComponent implements OnInit {
  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCancle: EventEmitter<any> = new EventEmitter<any>();
  
  title = "Rating";

  constructor() {}
  rating : Rating;
  ngOnInit() {}

  readFormData(ratingName, description, active):void {
    this.rating = new Rating(null,ratingName.value,description.value,"0","0","0","0","0",null,active.checked)
    this.onDatePicked.emit(this.rating);
  }

  onCansle(){
    this.onCancle.emit();
  }

}
