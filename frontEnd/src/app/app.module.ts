import {BrowserModule} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgModule, ApplicationRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule, JsonpModule} from '@angular/http';
import {ServiceAppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {AppComponent} from './app.component';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk';
// service
import {RatingPageComponent, RatingService, DialogReviewEnter, AdminRatingPageComponent} from './pages/rating';
import {CreateRatingComponent} from './pages/rating/admin-rating-page/create-rating/create-rating.component';
import {RatingInfoComponent} from './pages/rating/admin-rating-page/rating-info/rating-info.component';
import { RatingChartComponent } from './pages/rating/admin-rating-page/rating-info/rating-chart/rating-chart.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';


// @NgModule({
//   exports: [
//     CdkTableModule,
//     MdAutocompleteModule,
//     MdButtonModule,
//     MdButtonToggleModule,
//     MdCardModule,
//     MdCheckboxModule,
//     MdChipsModule,
//     MdCoreModule,
//     MdDatepickerModule,
//     MdDialogModule,
//     MdExpansionModule,
//     MdGridListModule,
//     MdIconModule,
//     MdInputModule,
//     MdListModule,
//     MdMenuModule,
//     MdNativeDateModule,
//     MdPaginatorModule,
//     MdProgressBarModule,
//     MdProgressSpinnerModule,
//     MdRadioModule,
//     MdRippleModule,
//     MdSelectModule,
//     MdSidenavModule,
//     MdSliderModule,
//     MdSlideToggleModule,
//     MdSnackBarModule,
//     MdSortModule,
//     MdTableModule,
//     MdTabsModule,
//     MdToolbarModule,
//     MdTooltipModule,
//   ]
// })

@NgModule({
  declarations: [
    AppComponent,
    RatingPageComponent,
    AdminRatingPageComponent,
    DialogReviewEnter,
    CreateRatingComponent,
    RatingInfoComponent,
    RatingChartComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    FormsModule,
    HttpModule,
    MdNativeDateModule,    
    ReactiveFormsModule,
    NgxChartsModule,
    ServiceAppRoutingModule,
    JsonpModule,
    CdkTableModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  entryComponents: [DialogReviewEnter],
  providers: [RatingService],
  bootstrap: [AppComponent]
})
export class AppModule {}