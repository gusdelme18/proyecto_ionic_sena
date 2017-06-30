import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopularMoviesPage } from './popular-movies';

@NgModule({
  declarations: [
    PopularMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(PopularMoviesPage),
  ],
  exports: [
    PopularMoviesPage
  ]
})
export class PopularMoviesPageModule {}
