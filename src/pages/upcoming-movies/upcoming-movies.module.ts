import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingMoviesPage } from './upcoming-movies';

@NgModule({
  declarations: [
    UpcomingMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(UpcomingMoviesPage),
  ],
  exports: [
    UpcomingMoviesPage
  ]
})
export class UpcomingMoviesPageModule {}
