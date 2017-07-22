import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingPageComponent ,AdminRatingPageComponent} from "./pages/rating";






const routes: Routes = [
    {path: 'rating/:id', component: RatingPageComponent},


    {path: '', component: AdminRatingPageComponent},

    {path: '**', redirectTo: 'rating/:id', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: []
})
export class ServiceAppRoutingModule { }
