import { UserService } from './service/user.service';
import { LoginGuard } from './guard/login.guard';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {

  constructor(private loginGuard: LoginGuard, private userService: UserService) { }

  ngOnInit() {
    if (this.userService.currentUser) { console.log('sdafsdf'); this.loginGuard.active = false; }
  }
}


