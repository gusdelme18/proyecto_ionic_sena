import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopRatedMoviesPage } from './top-rated-movies';

@NgModule({
  declarations: [
    TopRatedMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(TopRatedMoviesPage),
  ],
  exports: [
    TopRatedMoviesPage
  ]
})
export class TopRatedMoviesPageModule {}
