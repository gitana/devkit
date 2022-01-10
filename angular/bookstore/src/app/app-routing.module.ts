import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }   from './Main/main.component';
import { BookDetailComponent }  from './Bookdetail/book-detail.component';
import {SearchComponent} from "./Search/search.component";

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'book/:id', component: BookDetailComponent },
    { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

