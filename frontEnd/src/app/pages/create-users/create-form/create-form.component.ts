import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
AdminChecked;
Admin:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
