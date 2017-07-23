import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ServiceAppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';



import {AppComponent} from './app.component';

import {
  MdButtonModule,
  MdInputModule,
  MdCheckboxModule,
  MdSidenavModule,
  MdMenuModule,
  MdChipsModule,
  MdProgressBarModule,
  MdTabsModule,
  MdIconModule,
  MdListModule,
  MdDialogModule,
  MdToolbarModule
} from '@angular/material';

// service
import { RatingPageComponent, RatingService, DialogReviewEnter,AdminRatingPageComponent} from './pages/rating';



@NgModule({
  declarations: [
    AppComponent,
     RatingPageComponent,
     AdminRatingPageComponent,
     DialogReviewEnter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdChipsModule,
    MdInputModule,
    MdProgressBarModule,
    MdMenuModule,
    MdTabsModule,
    MdIconModule,
    MdListModule,
    MdDialogModule,
    MdToolbarModule,
    ServiceAppRoutingModule,
    JsonpModule
  ],
entryComponents:[DialogReviewEnter],
  providers: [RatingService],
  bootstrap: [AppComponent]
})
export class AppModule {}