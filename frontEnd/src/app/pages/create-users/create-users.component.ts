import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import { RatingService } from "../rating";
@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {

  showCreateForm: boolean = true;

  constructor( private http: Http, private ratignService: RatingService) {
  }

  ngOnInit() {
   
  }

}
