import { Component, OnInit ,Input} from '@angular/core';
import { Rating,Review } from "../../";

@Component({
  selector: 'app-rating-info',
  templateUrl: './rating-info.component.html',
  styleUrls: ['./rating-info.component.scss']
})
export class RatingInfoComponent implements OnInit {

  @Input() rating : Rating;
  @Input() reviews: Review[];
  @Input() chartDate:any;


  showChart:boolean = true;
  constructor() {}


  ngOnInit() {}

}
