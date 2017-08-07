import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();
  submitted = false;
  form: FormGroup;
  user: User;
  authoritis: Authority[] = [];
  constructor(private formBuilder: FormBuilder, ) { }


  ngOnInit() {
    const authority = new Authority('ROLE_USER');
    this.authoritis.push(authority);
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(16)])],
      lastname: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(16)])],
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(64)])],
      admin: []
    });
  }

  onSubmit() {
    this.submitted = true;
    const creatU = this.form.value;
    if (creatU.admin) {
      const authority = new Authority('ROLE_ADMIN');
      this.authoritis.push(authority);
    }
    this.user = new User(null, creatU.username, creatU.password, creatU.firstname, creatU.lastname, this.authoritis);
    this.onDatePicked.emit(this.user);
  }

}
export class Authority {
  constructor(private authority: string) { }
}

