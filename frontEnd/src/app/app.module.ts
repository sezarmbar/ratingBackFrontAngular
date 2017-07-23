import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule, ApplicationRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule, JsonpModule} from '@angular/http';
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
  MdToolbarModule,
  MdSlideToggleModule
} from '@angular/material';

// service
import { RatingPageComponent, RatingService, DialogReviewEnter,AdminRatingPageComponent} from './pages/rating';
import { CreateRatingComponent } from './pages/rating/admin-rating-page/create-rating/create-rating.component';
import { RatingInfoComponent } from './pages/rating/admin-rating-page/rating-info/rating-info.component';



@NgModule({
  declarations: [
    AppComponent,
     RatingPageComponent,
     AdminRatingPageComponent,
     DialogReviewEnter,
     CreateRatingComponent,
     RatingInfoComponent
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
    MdSlideToggleModule,
    ServiceAppRoutingModule,
    JsonpModule
  ],
entryComponents:[DialogReviewEnter],
  providers: [RatingService],
  bootstrap: [AppComponent]
})
export class AppModule {}