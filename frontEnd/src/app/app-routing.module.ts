import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingPageComponent ,AdminRatingPageComponent} from "./pages/rating";

import { ErrorPageComponent } from './pages/error-page';



const routes: Routes = [
    {path: 'r/:id', component: RatingPageComponent},    
    {path: 'admin', component: AdminRatingPageComponent},
    {path: '**', component:ErrorPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule],
    providers: []
})
export class ServiceAppRoutingModule { }
