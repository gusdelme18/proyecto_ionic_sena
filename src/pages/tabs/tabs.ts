import { Component } from '@angular/core';

import { PopularMoviesPage } from '../popular-movies/popular-movies';
import { TopRatedMoviesPage } from '../top-rated-movies/top-rated-movies';
import { UpcomingMoviesPage } from '../upcoming-movies/upcoming-movies';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PopularMoviesPage;
  tab3Root = TopRatedMoviesPage;
  tab4Root = UpcomingMoviesPage;

  constructor() {

  }
}
